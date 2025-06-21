import { NextResponse } from "next/server";
import { posts } from "@/lib/mock/posts";

export async function GET() {
  return NextResponse.json(posts);
}
