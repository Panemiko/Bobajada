import { NextResponse } from "next/server";
import animeList from "./data.json";

export async function GET() {
  return NextResponse.json(animeList, { status: 200 });
}
