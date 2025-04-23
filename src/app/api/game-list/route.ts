import { NextResponse } from "next/server";

export const revalidate = 86400; // 24 hours

export async function GET() {
  const res = await fetch("https://www.gamedle.wtf/newtokenizedversion", {
    method: "POST",
    body: JSON.stringify([]),
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Cookie: "JSESSIONID=1",
    },
  });

  if (res.status !== 200) {
    return new Response("Failed to fetch game list", { status: 500 });
  }

  const games = (await res.json()).gamelist as {
    label: string;
  }[];

  const mappedGames = games.map((game) => game.label);

  return NextResponse.json(mappedGames, { status: 200 });
}
