import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "hw1186 — Security & Backend Engineer",
  description:
    "로그 수집부터 탐지 로직 설계, 인프라 구성까지. 보안 데이터 파이프라인을 설계하고 운영합니다.",
  openGraph: {
    title: "hw1186 — Security & Backend Engineer",
    description:
      "로그 수집부터 탐지 로직 설계, 인프라 구성까지. 보안 데이터 파이프라인을 설계하고 운영합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
