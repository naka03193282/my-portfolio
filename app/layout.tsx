import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "中嶋 康太郎 | Portfolio",
  description: "大阪公立大学大学院情報工学専攻 中嶋康太郎のポートフォリオ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={noto.variable}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
