import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Copy, Sparkles, Zap, Code2, Bolt, Heart, Terminal, MessageSquare, Lightbulb, Wand2, Cpu, Boxes, Rocket, Palette, Layers, Zap as Lightning, Sparkle, Brain, Globe } from "lucide-react";

const BRAND_NAME = "Trịnh Văn Hào";
const BRAND_LOGO_SRC = "/assets/images/assets/tvh.png";

const SUPPORTED_TOOLS = [
  {
    name: "v0.dev",
    icon: Code2,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    name: "Bolt.new",
    icon: Bolt,
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    name: "Lovable",
    icon: Heart,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
  },
  {
    name: "Cursor",
    icon: Terminal,
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400",
  },
  {
    name: "Windsurf",
    icon: Layers,
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
  {
    name: "Claude",
    icon: MessageSquare,
    color: "from-purple-500/20 to-violet-500/20",
    iconColor: "text-purple-400",
  },
  {
    name: "ChatGPT",
    icon: Brain,
    color: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
  },
  {
    name: "Gemini",
    icon: Sparkle,
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    name: "AI Studio",
    icon: Lightbulb,
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    name: "Replit",
    icon: Boxes,
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-300",
  },
  {
    name: "Vercel",
    icon: Lightning,
    color: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-300",
  },
  {
    name: "Framer",
    icon: Palette,
    color: "from-fuchsia-500/20 to-pink-500/20",
    iconColor: "text-fuchsia-400",
  },
  {
    name: "Webflow",
    icon: Globe,
    color: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
  },
  {
    name: "Dora AI",
    icon: Wand2,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    name: "Galileo",
    icon: Cpu,
    color: "from-indigo-500/20 to-blue-500/20",
    iconColor: "text-indigo-400",
  },
  {
    name: "Uizard",
    icon: Rocket,
    color: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400",
  },
];

export default function InstructionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-xl border-b border-white/5 transition-all duration-500 hover:bg-background/90">
        <div className="w-full px-6 sm:px-8 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
          <Link className="flex items-center gap-3 sm:gap-4 min-w-0" href="/">
            <Image
              alt={BRAND_NAME}
              className="h-10 sm:h-12 w-auto shrink-0 transition-transform duration-500 hover:scale-105"
              height={48}
              src={BRAND_LOGO_SRC}
              unoptimized
              width={160}
              style={{ objectFit: "contain" }}
            />
            <span className="font-[var(--font-display)] text-sm sm:text-base md:text-lg text-foreground tracking-[0.08em] whitespace-nowrap hover:text-purple-300 transition-colors duration-300">
              Promptverse
            </span>
          </Link>

          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            href="/"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Quay về thư viện</span>
            <span className="sm:hidden">Quay về</span>
          </Link>
        </div>
      </nav>

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:py-14">
        <header className="mb-10 rounded-3xl border border-white/10 bg-neutral-900/70 p-6 sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-purple-100">
            <Sparkles className="h-3.5 w-3.5" />
            Hướng dẫn sử dụng
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl mb-4">
            Copy, Paste & Tạo giao diện đẹp ngay lập tức
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-white/70 mb-6">
            Các prompt này sẵn sàng để dùng trong các công cụ AI yêu thích của bạn. Không cần chỉnh sửa gì — chỉ cần copy và paste để tạo landing page production-ready với thiết kế đẹp và animation mượt mà.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20">
                <Copy className="h-4 w-4 text-purple-300" />
              </div>
              <p className="text-sm font-semibold">1. Copy Prompt</p>
              <p className="mt-1 text-xs text-white/65">Nhấn nút copy trên bất kỳ template nào</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/20">
                <Zap className="h-4 w-4 text-orange-300" />
              </div>
              <p className="text-sm font-semibold">2. Paste vào Tool</p>
              <p className="mt-1 text-xs text-white/65">Mở v0, Bolt, Cursor, hoặc bất kỳ AI tool nào</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-500/20">
                <Sparkles className="h-4 w-4 text-green-300" />
              </div>
              <p className="text-sm font-semibold">3. Generate & Deploy</p>
              <p className="mt-1 text-xs text-white/65">Nhận code production-ready ngay lập tức</p>
            </div>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Các công cụ hỗ trợ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {SUPPORTED_TOOLS.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <article
                  className="group rounded-2xl border border-white/10 bg-neutral-900 p-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center text-center"
                  key={tool.name}
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${tool.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-semibold">{tool.name}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-orange-500/5 to-transparent p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-4">Mẹo hay</h2>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <span className="text-purple-400 font-bold">•</span>
              <span><strong className="text-white">Dùng model mạnh hơn</strong> — Claude Sonnet 3.5, GPT-4, hoặc Gemini Pro cho kết quả tốt hơn với ít lần chỉnh sửa</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-400 font-bold">•</span>
              <span><strong className="text-white">Thêm chi tiết thương hiệu</strong> — Bổ sung màu sắc, font chữ và nội dung của bạn để cá nhân hóa output</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong className="text-white">Tinh chỉnh từng section</strong> — Chỉnh hero, features, hoặc CTA riêng biệt để kiểm soát chính xác</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong className="text-white">Kiểm tra responsive</strong> — Luôn kiểm tra trên mobile và desktop trước khi deploy</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
