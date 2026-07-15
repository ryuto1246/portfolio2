export type CompanyKey = "nectere" | "radica" | "personal";

export type Project = {
  name: string;
  oneLiner: string;
  problem?: string;
  approach?: string;
  role?: string;
  outcome?: string;
  link?: string;
  linkLabel?: string;
  badge?: string;
  status?: string;
  imageSrc?: string;
  imageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoBg?: string;
};

export type Company = {
  key: CompanyKey;
  name: string;
  role?: string;
  mission: string;
  description?: string;
  accentClass: string;
  softClass: string;
  ringClass: string;
  logoSrc?: string;
  logoAlt?: string;
  email?: string;
  projects: Project[];
};

export const companies: Company[] = [
  {
    key: "nectere",
    name: "Nectere",
    role: "Founder",
    mission: "テクノロジーと人間の架け橋となる会社。",
    accentClass: "text-primary",
    softClass: "bg-primary-soft",
    ringClass: "ring-primary",
    logoSrc: "/nectere-logo-full.png",
    logoAlt: "Nectere",
    email: "nakamura.ryuto@nectere.jp",
    projects: [
      {
        name: "Nobilva",
        oneLiner: "学生アスリートの学習を支える学習支援サービス",
        problem:
          "学業と競技の両立に悩む学生アスリートに向けた学習リソースが不足していた。",
        approach:
          "競技スケジュールに合わせた柔軟な学習プランと、講師とのマッチング機能を提供。",
        role: "サービス企画・運営",
        outcome: "文武両道を後押しする学習支援の仕組みを構築。",
        logoSrc: "/nobilva.png",
        logoAlt: "Nobilva",
        logoBg: "bg-white",
      },
      {
        name: "Teach It",
        oneLiner: "「教えることで学ぶ」Learning by Teaching型 iOSアプリ",
        problem: "受動的な学習で理解が浅く、知識が定着しにくい。",
        approach:
          "自分で説明することで学ぶ「教える側」に立つ体験を、モバイルネイティブな形で提供。",
        role: "プロダクト企画・開発統括",
        outcome: "App Store公開済み。継続的にアップデート中。",
        link: "https://apps.apple.com/",
        linkLabel: "App Store",
        badge: "iOS",
      },
      {
        name: "おきてがみ",
        oneLiner: "場所と紐づくSNS",
        problem:
          "オンラインの交流は増えたが、場所に紐づいた偶然の出会いや発見は減った。",
        approach: "特定の場所に手紙のようにメッセージを残せるSNSを開発中。",
        role: "プロダクト企画・開発",
        outcome: "2026年8月公開予定。",
        status: "Coming Aug 2026",
      },
    ],
  },
  {
    key: "radica",
    name: "RADICA",
    role: "CTO",
    mission: "教育 × エンターテインメントのコンテンツを作る会社。",
    accentClass: "text-secondary",
    softClass: "bg-secondary-soft",
    ringClass: "ring-secondary",
    logoSrc: "/radica.png",
    logoAlt: "RADICA",
    email: "nakamura@radica-inc.jp",
    projects: [
      {
        name: "ラディカルなたくろう",
        oneLiner: "登録者4万人のYouTubeチャンネル",
        problem: "教育コンテンツを親しみやすく届けたい。",
        approach:
          "エンターテインメント要素を強めた出題形式で、幅広い層に学びのきっかけを提供。",
        role: "撮影・出題担当",
        outcome: "登録者4万人を突破。",
        badge: "YouTube",
        imageSrc: "/YouTube.jpg",
        imageAlt: "ラディカルなたくろう YouTubeサムネイル",
      },
      {
        name: "Hintory",
        oneLiner: "ブラウザで遊べる歴史クイズゲーム",
        problem: "歴史を「暗記」ではなく「推理」として楽しく学べる場が欲しい。",
        approach:
          "ヒントを段階的に開示する推理型UIと、AIによる問題生成を組み合わせたブラウザゲームを開発。",
        role: "設計・開発・収益化",
        outcome:
          "Next.js / Supabase / Gemini APIで開発。AdSenseによる広告収益化も実装。",
        link: "https://hintory.com",
        linkLabel: "Play",
        badge: "Web",
        imageSrc: "/Hintory.png",
        imageAlt: "Hintory ロゴ",
      },
    ],
  },
  {
    key: "personal",
    name: "Personal",
    mission: "個人で手がけている制作物と活動。",
    accentClass: "text-foreground",
    softClass: "bg-accent-soft",
    ringClass: "ring-accent",
    email: "nakamura@ryuto.tokyo",
    projects: [
      {
        name: "ren-aka.jp",
        oneLiner: "個人で作成したWebサイト",
        link: "https://ren-aka.jp",
        linkLabel: "サイトを見る",
        badge: "Web",
      },
      {
        name: "FLLロボコン国際大会 通訳",
        oneLiner: "韓国 (ソウル・全州) にて通訳サポートを担当",
        badge: "通訳",
      },
    ],
  },
];

export type HeroTag = {
  label: string;
  href: string;
};

export const heroTags: HeroTag[] = [
  { label: "テクノロジー", href: "#skills" },
  { label: "教育", href: "#works" },
  { label: "エンタメ", href: "#works" },
  { label: "言語", href: "#skills" },
  { label: "音楽", href: "#beyond" },
];

export const techSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Supabase",
  "Gemini API",
  "Cloudflare",
  "DNS / インフラ",
  "iOS (Swift)",
];

export type Language = {
  name: string;
  level: string;
  flags: string[];
};

export const languages: Language[] = [
  { name: "日本語", level: "母語", flags: ["jp"] },
  { name: "英語", level: "ビジネス", flags: ["gb"] },
  { name: "ドイツ語", level: "B2", flags: ["de"] },
  { name: "韓国語", level: "学習中", flags: ["kr"] },
  { name: "フランス語", level: "学習中", flags: ["fr"] },
  { name: "ポルトガル語", level: "学習中", flags: ["pt", "br"] },
];

export const certificates = [
  { name: "IELTS", status: "7.5" },
  { name: "Goethe-Zertifikat B2", status: "Lesen 除く" },
  { name: "基本情報技術者試験", status: "" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];
