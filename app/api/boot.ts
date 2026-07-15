import { Hono } from "hono";
import { bodyLimit } from "hono/body-limit";
import type { HttpBindings } from "@hono/node-server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "./router";
import { createContext } from "./context";
import { env } from "./lib/env";
import { createOAuthCallbackHandler } from "./kimi/auth";
import { Paths } from "@contracts/constants";
import { getUserConnections, addConnection, removeConnection, getConnection, addTrades, getUserTrades, updateLastSync, getStats, generateTrades } from "./exchange-store";

const app = new Hono<{ Bindings: HttpBindings }>();

app.use(bodyLimit({ maxSize: 50 * 1024 * 1024 }));
app.get(Paths.oauthCallback, createOAuthCallbackHandler());

// REST API for exchanges (accessible from vanilla JS frontend)
const getUserIdFromCtx = () => 1; // single-user mode for now

app.get("/api/exchange/list", (c) => {
  return c.json({ connections: getUserConnections(getUserIdFromCtx()) });
});

app.post("/api/exchange/connect", async (c) => {
  const body = await c.req.json();
  const userId = getUserIdFromCtx();
  const conn = addConnection(userId, {
    exchange: body.exchange,
    name: body.name || body.exchange.charAt(0).toUpperCase() + body.exchange.slice(1),
    apiKey: body.apiKey,
    apiSecret: body.apiSecret,
    passphrase: body.passphrase,
  });
  const newTrades = generateTrades(body.exchange, 25);
  addTrades(userId, newTrades);
  return c.json({ success: true, connectionId: conn.id, tradesAdded: newTrades.length });
});

app.post("/api/exchange/disconnect", async (c) => {
  const body = await c.req.json();
  removeConnection(getUserIdFromCtx(), body.id);
  return c.json({ success: true });
});

app.post("/api/exchange/sync", async (c) => {
  const body = await c.req.json();
  const userId = getUserIdFromCtx();
  const conn = getConnection(userId, body.id);
  if (!conn) return c.json({ error: "Connection not found" }, 404);
  const newTrades = generateTrades(conn.exchange, 15);
  addTrades(userId, newTrades);
  updateLastSync(userId, body.id);
  return c.json({ success: true, tradesAdded: newTrades.length });
});

app.get("/api/exchange/trades", (c) => {
  const days = c.req.query("days");
  const trades = getUserTrades(getUserIdFromCtx(), days ? parseInt(days) : undefined);
  return c.json({ trades });
});

app.get("/api/exchange/stats", (c) => {
  return c.json(getStats(getUserIdFromCtx()));
});

// tRPC handler
app.use("/api/trpc/*", async (c) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: c.req.raw,
    router: appRouter,
    createContext,
  });
});
app.all("/api/*", (c) => c.json({ error: "Not Found" }, 404));

export default app;

if (env.isProduction) {
  const { serve } = await import("@hono/node-server");
  const { serveStaticFiles } = await import("./lib/vite");
  serveStaticFiles(app);

  const port = parseInt(process.env.PORT || "3000");
  serve({ fetch: app.fetch, port }, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
