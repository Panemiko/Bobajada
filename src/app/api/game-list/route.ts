import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://www.gamedle.wtf/newtokenizedversion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Connection: "keep-alive",
      Cookie: "JSESSIONID=1",
    },
  });

  if (res.status !== 200) {
    return new Response(undefined, { status: 500 });
  }

  const games = (await res.json()).gameList as {
    label: string;
  }[];

  const mappedGames = games.map((game) => game.label);

  return NextResponse.json(mappedGames, { status: 200 });
}
