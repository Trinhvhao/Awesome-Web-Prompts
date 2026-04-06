import "server-only";

import { HOME_PAGE_DATA } from "@/lib/home-data";

function normalizeTitle(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const unlockedPromptTitles = new Set(
  HOME_PAGE_DATA.gridItems
    .filter((item) => item.kind === "template" && item.action === "copy")
    .map((item) => normalizeTitle(item.title))
    .filter(Boolean),
);

export function isPromptUnlockedByTitle(title: string): boolean {
  return unlockedPromptTitles.has(normalizeTitle(title));
}
