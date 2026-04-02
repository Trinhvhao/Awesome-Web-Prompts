import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Inter, Sora } from "next/font/google";
import "./globals.css";


const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const soraDisplay = Sora({
  variable: "--font-sora-display",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

const instrumentSerifArt = Instrument_Serif({
  variable: "--font-instrument-serif-art",
  subsets: ["latin", "latin-ext"],
  style: "italic",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Trịnh Văn Hào",
  description: "Thư viện giao diện và prompt thiết kế bởi Trịnh Văn Hào",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ colorScheme: "dark" }}
    >
      <body
        className={`${interSans.variable} ${geistMono.variable} ${soraDisplay.variable} ${instrumentSerifArt.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
