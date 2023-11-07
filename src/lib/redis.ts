import { Redis } from "@upstash/redis";

const REDIS_URL = process.env.REDIS_URL;
const REDIS_TOKEN = process.env.REDIS_TOKEN;

if (!REDIS_URL || !REDIS_TOKEN) {
  throw new Error("Invalid redis key");
}

export const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});
