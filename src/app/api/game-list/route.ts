import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
  let redisGameList = await redis.get<string>("game-list");

  if (!redisGameList) {
    const res = await fetch("https://gamedle.wtf/search2");

    if (res.status !== 200) {
      return new Response(undefined, { status: 500 });
    }

    const games = (await res.json()) as {
      value: number;
      label: string;
      collection: number;
    }[];

    const mappedGames = games.map((game) => game.label);

    // game-list to redis
    redisGameList = (await redis.set("game-list", JSON.stringify(mappedGames), {
      ex: 86400, // expires in 24 hours
    })) as string;
  }

  return NextResponse.json(redisGameList, { status: 200 });
}
