import { NextResponse } from "next/server";
import animeList from "./data.json";

export async function GET() {
  const formattedData = animeList.map((anime) => ({
    name: anime.english || anime.name,
    code: anime.code,
  }));

  return NextResponse.json(formattedData, { status: 200 });
}
