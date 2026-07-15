import { authRouter } from "./auth-router";
import { exchangeRouter } from "./exchange-router";
import { createRouter, publicQuery } from "./middleware";

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),
  auth: authRouter,
  exchange: exchangeRouter,
});

export type AppRouter = typeof appRouter;
