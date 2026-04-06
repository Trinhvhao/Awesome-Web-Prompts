"use client";

import { useEffect } from "react";
import { Globe, Mail, MessageCircle, Phone, Sparkles, X } from "lucide-react";

type UnlockContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  sourceTitle?: string | null;
};

export default function UnlockContactModal({ isOpen, onClose, sourceTitle }: UnlockContactModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <button
        aria-label="Đóng popup liên hệ"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/15 bg-neutral-950 shadow-[0_28px_60px_rgba(0,0,0,0.65)]">
        <div className="pointer-events-none absolute inset-0 opacity-80" style={{ background: "radial-gradient(85% 80% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)" }} />

        <div className="relative p-6 sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/85">
                <Sparkles className="h-3.5 w-3.5" />
                Mở khóa prompt premium
              </span>
              <h2 className="text-2xl font-bold text-white sm:text-3xl whitespace-nowrap">Liên hệ để mở khóa toàn bộ Promt</h2>
              <p className="mt-2 text-sm text-white/70">
                Mở khoá mẫu này và nhận thêm bộ prompt nâng cao cho Lovable, Google AI Studio, Stitch, Cursor, Copilot, Kiro...
              </p>
            </div>

            <button
              aria-label="Đóng"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white"
              onClick={onClose}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {sourceTitle ? (
            <p className="mb-4 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white/90">
              Mẫu bạn vừa bấm unlock: <span className="font-semibold">{sourceTitle}</span>
            </p>
          ) : null}

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              <Phone className="h-4 w-4 shrink-0 text-white/70" />
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-white/50">Liên hệ</p>
                <p className="font-semibold text-white">Trịnh Văn Hào</p>
              </div>
            </div>

            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-blue-400/40 hover:bg-blue-500/10"
              href="https://www.facebook.com/trinhhao142.hayyier/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Globe className="h-4 w-4 shrink-0 text-blue-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-white/50">Facebook</p>
                <p className="font-medium">facebook.com/trinhhao142.hayyier</p>
              </div>
            </a>

            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-green-400/40 hover:bg-green-500/10"
              href="https://zalo.me/0777228660"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-green-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-white/50">Zalo</p>
                <p className="font-medium">0777228660</p>
              </div>
            </a>

            <a
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-purple-400/40 hover:bg-purple-500/10"
              href="mailto:haotrinh142@gmail.com"
            >
              <Mail className="h-4 w-4 shrink-0 text-purple-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.08em] text-white/50">Gmail</p>
                <p className="font-medium">haotrinh142@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
