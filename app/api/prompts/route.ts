import { NextRequest, NextResponse } from "next/server";

import { getPromptByTitle } from "@/lib/prompt-store";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title")?.trim();

  if (!title) {
    return NextResponse.json({ error: "Missing title query parameter" }, { status: 400 });
  }

  try {
    const prompt = await getPromptByTitle(title);

    if (!prompt) {
      return NextResponse.json({ error: "Prompt not found" }, { status: 404 });
    }

    return NextResponse.json({ title, prompt }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to load prompt database" }, { status: 500 });
  }
}
