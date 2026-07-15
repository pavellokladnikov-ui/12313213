import { z } from "zod";
import { createRouter, publicQuery } from "./middleware";
import { TRPCError } from "@trpc/server";
import { getUserId, getUserConnections, addConnection, removeConnection, getConnection, addTrades, getUserTrades, updateLastSync, getStats, generateTrades } from "./exchange-store";

export const exchangeRouter = createRouter({
  list: publicQuery.query(({ ctx }) => {
    return getUserConnections(getUserId(ctx));
  }),

  connect: publicQuery
    .input(z.object({
      exchange: z.string(),
      name: z.string().optional(),
      apiKey: z.string(),
      apiSecret: z.string(),
      passphrase: z.string().optional(),
    }))
    .mutation(({ ctx, input }) => {
      const userId = getUserId(ctx);
      const conn = addConnection(userId, {
        exchange: input.exchange,
        name: input.name || input.exchange.charAt(0).toUpperCase() + input.exchange.slice(1),
        apiKey: input.apiKey,
        apiSecret: input.apiSecret,
        passphrase: input.passphrase,
      });
      const newTrades = generateTrades(input.exchange, 25);
      addTrades(userId, newTrades);
      return { success: true, connectionId: conn.id, tradesAdded: newTrades.length };
    }),

  disconnect: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      removeConnection(getUserId(ctx), input.id);
      return { success: true };
    }),

  sync: publicQuery
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      const userId = getUserId(ctx);
      const conn = getConnection(userId, input.id);
      if (!conn) throw new TRPCError({ code: "NOT_FOUND", message: "Connection not found" });
      const newTrades = generateTrades(conn.exchange, 15);
      addTrades(userId, newTrades);
      updateLastSync(userId, input.id);
      return { success: true, tradesAdded: newTrades.length };
    }),

  getTrades: publicQuery
    .input(z.object({ days: z.number().optional() }).optional())
    .query(({ ctx, input }) => {
      return getUserTrades(getUserId(ctx), input?.days);
    }),

  getStats: publicQuery.query(({ ctx }) => {
    return getStats(getUserId(ctx));
  }),
});
