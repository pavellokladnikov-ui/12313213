// Shared store for exchange connections and trades
export interface ExchangeConn {
  id: number;
  exchange: string;
  name: string;
  apiKey: string;
  apiSecret: string;
  passphrase?: string;
  createdAt: string;
  lastSyncAt?: string;
}

export interface TradeData {
  id: string;
  exchange: string;
  pair: string;
  side: string;
  entryPrice: number;
  exitPrice: number;
  pnl: number;
  date: string;
  exitDate: string;
  size: number;
  leverage: number;
}

const connections: Record<number, ExchangeConn[]> = {};
const userTrades: Record<number, TradeData[]> = {};
let nextId = 1;

const EXCHANGE_PAIRS: Record<string, string[]> = {
  binance: ["BTC/USDT","ETH/USDT","BNB/USDT","SOL/USDT","XRP/USDT"],
  bybit: ["BTC/USDT","ETH/USDT","SOL/USDT","DOGE/USDT","ADA/USDT"],
  okx: ["BTC/USDT","ETH/USDT","SOL/USDT","LINK/USDT","AVAX/USDT"],
  mexc: ["XRP/USDT","DOGE/USDT","SHIB/USDT","PEPE/USDT","TRX/USDT"],
  bingx: ["BTC/USDT","ETH/USDT","SOL/USDT","DOGE/USDT","XRP/USDT"],
  gateio: ["ETH/USDT","DOT/USDT","MATIC/USDT","LINK/USDT","AVAX/USDT"],
  kraken: ["BTC/USDT","ETH/USDT","ADA/USDT","DOT/USDT","LINK/USDT"],
  htx: ["BTC/USDT","ETH/USDT","LTC/USDT","TRX/USDT","XRP/USDT"],
  bitunix: ["BTC/USDT","ETH/USDT","SOL/USDT","TRX/USDT","DOGE/USDT"],
};

export function generateTrades(exchange: string, count: number): TradeData[] {
  const pairs = EXCHANGE_PAIRS[exchange] || ["BTC/USDT","ETH/USDT"];
  const directions = ["long", "short"];
  const now = new Date();
  const result: TradeData[] = [];
  for (let i = 0; i < count; i++) {
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const isProfit = Math.random() > 0.38;
    const pnl = isProfit ? +(Math.random() * 1200 + 30).toFixed(2) : -(Math.random() * 600 + 15).toFixed(2);
    const date = new Date(now);
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    date.setHours(9 + Math.floor(Math.random() * 14), Math.floor(Math.random() * 60));
    const entryPrice = +(Math.random() * 50000 + 50).toFixed(2);
    const exitPrice = +(entryPrice * (1 + (pnl / 10000) * (dir === "long" ? 1 : -1))).toFixed(2);
    const exitDate = new Date(date);
    exitDate.setMinutes(exitDate.getMinutes() + Math.floor(Math.random() * 180 + 10));
    result.push({
      id: `${exchange}_${Date.now()}_${i}`,
      exchange,
      pair,
      side: dir,
      entryPrice,
      exitPrice: +exitPrice,
      pnl,
      date: date.toISOString(),
      exitDate: exitDate.toISOString(),
      size: +(Math.random() * 3 + 0.05).toFixed(3),
      leverage: [5, 10, 20][Math.floor(Math.random() * 3)],
    });
  }
  return result;
}

export function getUserConnections(userId: number): ExchangeConn[] {
  return connections[userId] || [];
}

export function addConnection(userId: number, data: Omit<ExchangeConn, "id" | "createdAt">): ExchangeConn {
  if (!connections[userId]) connections[userId] = [];
  const conn: ExchangeConn = { ...data, id: nextId++, createdAt: new Date().toISOString() };
  connections[userId].push(conn);
  return conn;
}

export function removeConnection(userId: number, connId: number): boolean {
  if (!connections[userId]) return false;
  const before = connections[userId].length;
  connections[userId] = connections[userId].filter(c => c.id !== connId);
  return connections[userId].length < before;
}

export function addTrades(userId: number, trades: TradeData[]): void {
  if (!userTrades[userId]) userTrades[userId] = [];
  userTrades[userId].push(...trades);
}

export function getUserTrades(userId: number, days?: number): TradeData[] {
  let trades = userTrades[userId] || [];
  if (days) {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    trades = trades.filter(t => new Date(t.date) >= cutoff);
  }
  return trades.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getConnection(userId: number, connId: number): ExchangeConn | undefined {
  return (connections[userId] || []).find(c => c.id === connId);
}

export function updateLastSync(userId: number, connId: number): void {
  const conn = getConnection(userId, connId);
  if (conn) conn.lastSyncAt = new Date().toISOString();
}

export function getStats(userId: number) {
  const trades = userTrades[userId] || [];
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const periodTrades = trades.filter(t => new Date(t.date) >= thirtyDaysAgo);
  const totalPnl = periodTrades.reduce((s, t) => s + t.pnl, 0);
  const wins = periodTrades.filter(t => t.pnl >= 0).length;
  const winRate = periodTrades.length > 0 ? (wins / periodTrades.length * 100).toFixed(1) : "0";
  const exchangePnl: Record<string, number> = {};
  periodTrades.forEach(t => { exchangePnl[t.exchange] = (exchangePnl[t.exchange] || 0) + t.pnl; });
  return { totalPnl, winRate, totalTrades: periodTrades.length, wins, losses: periodTrades.length - wins, exchangePnl, connections: (connections[userId] || []).length };
}

export function getUserId(ctx: { user?: { id: number } | null }): number {
  return ctx.user?.id || 1; // fallback to 1 for anonymous
}
