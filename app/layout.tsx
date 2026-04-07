import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Inter, Sora } from "next/font/google";
import "./globals.css";
import StructuredData from "./structured-data";


const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"], // Bỏ latin-ext để giảm size
  weight: ["400", "600", "700"], // Bỏ 500 nếu không dùng
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

const soraDisplay = Sora({
  variable: "--font-sora-display",
  subsets: ["latin"], // Bỏ latin-ext
  weight: ["700", "800"], // Chỉ giữ weights cần thiết
  display: 'swap',
  preload: true,
});

const instrumentSerifArt = Instrument_Serif({
  variable: "--font-instrument-serif-art",
  subsets: ["latin"], // Bỏ latin-ext
  style: "italic",
  weight: "400",
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://promptverse.com'),
  title: {
    default: "Promptverse - Trịnh Văn Hào | AI Design Prompts Library",
    template: "%s | Promptverse"
  },
  description: "Thư viện giao diện và prompt thiết kế bởi Trịnh Văn Hào. Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn cho v0, Bolt, Cursor, Claude và nhiều AI tools khác.",
  keywords: [
    "AI design",
    "prompts",
    "landing page",
    "v0",
    "bolt",
    "cursor",
    "web design",
    "UI templates",
    "Trịnh Văn Hào",
    "Promptverse",
    "AI tools",
    "design templates",
    "website builder"
  ],
  authors: [{ name: "Trịnh Văn Hào" }],
  creator: "Trịnh Văn Hào",
  publisher: "Trịnh Văn Hào",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    title: "Promptverse - AI Design Prompts Library",
    description: "Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn cho v0, Bolt, Cursor, Claude và nhiều AI tools khác",
    siteName: "Promptverse",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Promptverse - AI Design Prompts Library by Trịnh Văn Hào",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptverse - AI Design Prompts Library",
    description: "Xây dựng landing page đẹp trong vài phút với bộ prompt có sẵn",
    images: ["/og-image.png"],
    creator: "@trinhvanhao",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      'vi-VN': '/vi',
      'en-US': '/en',
    },
  },
  verification: {
    // Thêm verification codes khi có
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      style={{ colorScheme: "dark" }}
    >
      <head>
        <StructuredData />
      </head>
      <body
        className={`${interSans.variable} ${geistMono.variable} ${soraDisplay.variable} ${instrumentSerifArt.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
