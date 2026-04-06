import { NextRequest, NextResponse } from "next/server";

import { isPromptUnlockedByTitle } from "@/lib/prompt-access";
import { getPromptByTitle } from "@/lib/prompt-store";

export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title")?.trim();

  if (!title) {
    return NextResponse.json({ error: "Missing title query parameter" }, { status: 400 });
  }

  if (!isPromptUnlockedByTitle(title)) {
    return NextResponse.json({ error: "Prompt is premium and requires unlock" }, { status: 403 });
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
