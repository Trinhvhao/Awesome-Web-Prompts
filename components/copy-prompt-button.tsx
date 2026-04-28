"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, Copy as CopyIconLucide } from "lucide-react";

type CopyPromptButtonProps = {
  title: string;
  className: string;
};

type CopyStatus = "idle" | "copying" | "copied" | "missing" | "error";

// No longer needed, using lucide-react icons

async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fallback for insecure origins or blocked clipboard permissions.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(textarea);

  if (!copied) {
    throw new Error("Copy command failed");
  }
}

export default function CopyPromptButton({ title, className }: CopyPromptButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReset = useCallback(() => {
    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setStatus("idle");
    }, 1800);
  }, []);

  const handleCopy = useCallback(async () => {
    setStatus("copying");

    try {
      const response = await fetch(`/api/prompts?title=${encodeURIComponent(title)}`, {
        cache: "no-store",
      });

      if (response.status === 404) {
        setStatus("missing");
        scheduleReset();
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch prompt");
      }

      const data = (await response.json()) as { prompt?: string };
      const promptText = (data.prompt ?? "").trim();

      if (!promptText) {
        setStatus("missing");
        scheduleReset();
        return;
      }

      await copyToClipboard(promptText);
      setStatus("copied");
      scheduleReset();
    } catch {
      setStatus("error");
      scheduleReset();
    }
  }, [scheduleReset, title]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const buttonText =
    status === "copying"
      ? "Loading..."
      : status === "copied"
        ? "Copied"
        : status === "missing"
          ? "Missing prompt"
          : status === "error"
            ? "Copy error"
            : "Copy";

  return (
    <button
      aria-label={`Copy prompt ${title}`}
      className={`${className} cursor-pointer pointer-events-auto`}
      disabled={status === "copying"}
      onClick={handleCopy}
      type="button"
    >
      {status === "copied" ? (
        <Check className="w-4 h-4 mr-1 text-green-600 inline" />
      ) : (
        <CopyIconLucide className="w-4 h-4 mr-1 inline" />
      )}
      {buttonText}
    </button>
  );
}
