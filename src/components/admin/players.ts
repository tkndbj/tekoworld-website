/**
 * The shapes the players' callables answer with (`adminListPlayers`, `adminFindPlayers`,
 * `adminGetPlayer`, `adminGiftPlayer` in the game's functions), and the one place they are called
 * from. Every number here is the server's, derived the way the game derives it; this file only
 * names the fields.
 */

import { httpsCallable } from "firebase/functions";
import { webFunctions } from "@/lib/firebase-web";

export interface GiftRow {
  id: string;
  credits: number;
  gems: number;
  atUnix: number;
}

export interface PlayerRow {
  uid: string;
  name: string | null;
  nameDenied: boolean;
  level: number;
  earnedLevel: number;
  levelsCleared: number;
  stars: number;
  credits: number;
  gems: number;
  updatedUnix: number;
  lastPlayedLevelId: string | null;
  language: string;
  hasSave: boolean;
  hasWallet: boolean;
  pendingGifts: GiftRow[];
}

export interface FoundRow extends PlayerRow {
  how: "uid" | "email" | "name";
}

export interface PlayersPage {
  nowUnix: number;
  total: number;
  rows: PlayerRow[];
  next: { updatedUnix: number; uid: string } | null;
}

export interface GiftRecord {
  id: string;
  credits: number;
  gems: number;
  atUnix: number;
  by: string | null;
  paidCreditsUnix: number;
  paidGemsUnix: number;
  claimedUnix: number;
}

export interface PlayerDetail {
  nowUnix: number;
  row: PlayerRow;
  auth: { email: string | null; providers: string[]; createdUnix: number; lastSignInUnix: number; disabled: boolean } | null;
  card: { level: number; score: number; stars: number; rung: string | null; wave: number; shuffle: number; builtUnix: number } | null;
  wallet: {
    keeperBought: number; dealsBought: string[]; dailyPasses: { id: string; remaining: number; day: number }[];
    containersRevoked: string[]; earnedFloor: number; granted: Record<string, number>; spent: Record<string, number>;
  };
  save: { schemaVersion: number; revision: number } | null;
  counts: { spends: number; grants: number };
  gifts: GiftRecord[];
}

export interface GiftReply {
  nowUnix: number;
  gift: GiftRow;
  pending: GiftRow[];
  limits: { maxCredits: number; maxGems: number; maxPending: number };
}

/** The limits the server enforces, for the form before it asks (`gifts.ts`). */
export const GIFT_LIMITS = { maxCredits: 10_000_000, maxGems: 100_000, maxPending: 20 };

export async function listPlayers(after: PlayersPage["next"]): Promise<PlayersPage> {
  const call = httpsCallable<{ after?: PlayersPage["next"] }, PlayersPage>(webFunctions(), "adminListPlayers");
  return (await call(after ? { after } : {})).data;
}

export async function findPlayers(query: string): Promise<{ nowUnix: number; rows: FoundRow[] }> {
  const call = httpsCallable<{ query: string }, { nowUnix: number; rows: FoundRow[] }>(webFunctions(), "adminFindPlayers");
  return (await call({ query })).data;
}

export async function getPlayer(uid: string): Promise<PlayerDetail> {
  const call = httpsCallable<{ uid: string }, PlayerDetail>(webFunctions(), "adminGetPlayer");
  return (await call({ uid })).data;
}

export async function giftPlayer(uid: string, credits: number, gems: number): Promise<GiftReply> {
  const call = httpsCallable<{ uid: string; credits: number; gems: number }, GiftReply>(webFunctions(), "adminGiftPlayer");
  return (await call({ uid, credits, gems })).data;
}

/** The address of a player's page. */
export function playerHref(uid: string): string {
  return `/admin/users?uid=${encodeURIComponent(uid)}`;
}
