import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이현우 — Security & Infrastructure Engineer",
  description:
    "보안 시스템을 설계하는 개발자 이현우입니다. Network & Infrastructure 중심으로 일합니다.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>⌘</text></svg>",
  },
  openGraph: {
    title: "이현우 — Security & Infrastructure Engineer",
    description:
      "보안 시스템을 설계하는 개발자 이현우입니다. Network & Infrastructure 중심으로 일합니다.",
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
      <body className="scanline antialiased">
        {children}
      </body>
    </html>
  );
}
