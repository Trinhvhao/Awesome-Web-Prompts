import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

type PromptRecord = {
  title?: string;
  prompt_text?: string;
};

const PROMPTS_FILE_NAME = "db_prompts_1775120305742.json";

const TITLE_ALIASES: Record<string, string> = {
  "logoisum video agency hero": "logoisum video agency",
};

let promptMapPromise: Promise<Map<string, string>> | null = null;

function normalizeTitle(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

async function buildPromptMap(): Promise<Map<string, string>> {
  const filePath = path.join(process.cwd(), PROMPTS_FILE_NAME);
  const raw = await readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw) as PromptRecord[];

  if (!Array.isArray(parsed)) {
    throw new Error("Prompt database must be an array");
  }

  const map = new Map<string, string>();

  for (const entry of parsed) {
    const title = (entry.title ?? "").trim();
    const promptText = (entry.prompt_text ?? "").trim();

    if (!title || !promptText) {
      continue;
    }

    const normalizedTitle = normalizeTitle(title);
    if (!normalizedTitle || map.has(normalizedTitle)) {
      continue;
    }

    map.set(normalizedTitle, promptText);
  }

  return map;
}

async function getPromptMap(): Promise<Map<string, string>> {
  if (!promptMapPromise) {
    promptMapPromise = buildPromptMap();
  }

  return promptMapPromise;
}

export async function getPromptByTitle(title: string): Promise<string | null> {
  const normalizedTitle = normalizeTitle(title);

  if (!normalizedTitle) {
    return null;
  }

  const promptMap = await getPromptMap();
  const directMatch = promptMap.get(normalizedTitle);
  if (directMatch) {
    return directMatch;
  }

  const aliasTitle = TITLE_ALIASES[normalizedTitle];
  if (!aliasTitle) {
    return null;
  }

  return promptMap.get(aliasTitle) ?? null;
}
