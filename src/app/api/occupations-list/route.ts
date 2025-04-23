import { NextResponse } from "next/server";
import occupationsList from "./data.json";

export async function GET() {
  return NextResponse.json(occupationsList, { status: 200 });
}
