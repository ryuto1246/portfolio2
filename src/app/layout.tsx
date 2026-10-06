import type { Metadata } from "next";
import "./globals.css";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "中村龍人 / Ryuto Nakamura — Portfolio",
  description:
    "中村龍人 (Ryuto Nakamura) のポートフォリオ。Nectere Founder / RADICA CTO。東京大学 工学部 計数工学科。Nobilva、Teach It、Hintory など、教育とテクノロジーを軸にプロダクトを開発。",
  openGraph: {
    title: "中村龍人 / Ryuto Nakamura — Portfolio",
    description:
      "Nectere Founder / RADICA CTO / 東京大学 工学部 計数工学科。教育×テクノロジーのプロダクトを開発しています。",
    type: "website",
    locale: "ja_JP",
  },
};

const personId = "https://ryuto.tokyo/#person";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "中村 龍人",
  alternateName: "Ryuto Nakamura",
  url: "https://ryuto.tokyo",
  jobTitle: "Founder / CTO",
  worksFor: [
    { "@type": "Organization", name: "Nectere", url: "https://nectere.jp" },
    { "@type": "Organization", name: "RADICA", url: "https://radica-inc.jp" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "学習塾講師",
    occupationLocation: { "@type": "City", name: "東京" },
    skills: "数学・物理・化学・英語・現代文・古文の指導、進路指導",
  },
  sameAs: socialLinks.map((link) => link.url),
  subjectOf: [
    {
      "@type": "Book",
      "@id": "https://www.amazon.co.jp/dp/B0HM1HKQBN#book",
      name: "野球をがんばる中学生の高校受験",
      alternativeHeadline: "野球推薦・内申・英検・引退後の勉強まで",
      inLanguage: "ja",
      bookFormat: "https://schema.org/EBook",
      url: "https://www.amazon.co.jp/dp/B0HM1HKQBN",
      image: "https://ryuto.tokyo/images/works/yakyu-koukou-juken-cover.jpg",
      author: { "@id": personId },
      editor: { "@type": "Person", name: "養田貴大" },
      publisher: {
        "@type": "Organization",
        name: "Nectere",
        url: "https://www.nectere.jp",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@300;400;500&family=Zen+Maru+Gothic:wght@300;400;500&display=swap"
        />
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd).replace(/</g, "\\u003c")}
        </script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
