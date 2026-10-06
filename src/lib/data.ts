export type CompanyKey = "nectere" | "radica" | "personal";

export type ProjectImage = {
  src: string;
  alt?: string;
};

export type Project = {
  name: string;
  oneLiner: string;
  problem?: string;
  approach?: string;
  role?: string;
  outcome?: string;
  link?: string;
  linkLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  images?: ProjectImage[];
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
          "競技スケジュールに合わせた柔軟な学習プランを設計し、文武両道の実現をサポート。2024年8月にサービス開始、2025年10月に少年スポーツ選手向けとして拡大。",
        role: "企画・運営・資料作成・実装",
        outcome:
          "学習管理サービスとして運用中。現在はLP・ブランディングを刷新中。",
        link: "https://nobilva.jp",
        linkLabel: "サイトを見る",
        logoSrc: "/nobilva.png",
        logoAlt: "Nobilva",
        logoBg: "bg-white",
      },
      {
        name: "野球をがんばる中学生の高校受験",
        oneLiner: "Kindle本 — 野球推薦・内申・英検・引退後の勉強まで",
        problem:
          "野球を続けながら高校受験に向かう中学生の保護者には、進路（野球推薦・推薦入試・一般入試）や、内申・英検・引退後の勉強の進め方をまとめた情報が少なかった。",
        approach:
          "3つの進路と、内申・英検・引退後の勉強の進め方をまとめたKindle本として編集。Nobilvaのブログ記事をもとに再構成。",
        role: "著（監修：養田貴大）",
        outcome: "Nectere、2026年刊。Kindle版で発売中。",
        link: "https://www.amazon.co.jp/dp/B0HM1HKQBN",
        linkLabel: "Amazonで見る",
        imageSrc: "/images/works/yakyu-koukou-juken-cover.jpg",
        imageAlt: "『野球をがんばる中学生の高校受験』の表紙",
        imageFit: "contain",
      },
      {
        name: "Teach It",
        oneLiner: "「教えることで学ぶ」iOSアプリ",
        problem: "受動的な学習で理解が浅く、知識が定着しにくい。",
        approach:
          "高校生向けに、AIの後輩キャラに数学を教えることで理解と説明力を高める「教える側に立つ」体験を提供。",
        role: "企画・開発統括",
        outcome: "App Store公開済み。継続的にアップデート中。",
        link: "https://apps.apple.com/jp/app/teach-it/id6758047725",
        linkLabel: "App Store",
        imageSrc: "/images/works/teach-it-screenshot.webp",
        imageAlt: "Teach It — AIに教えて 思考力UP & 理解定着",
        imageFit: "contain",
      },
      {
        name: "おきてがみ",
        oneLiner: "場所と紐づくSNS",
        problem:
          "オンラインの交流は増えたが、場所に紐づいた偶然の出会いや発見は減った。",
        approach:
          "場所に言葉を残せるSNS。投稿はその場所に行かないと読めず、近づくにつれて文字が鮮明になる「にじみ」の演出で、地図を歩く体験をつくる。",
        role: "発案・企画・開発",
        outcome:
          "2026年8月、Nectere2本目のアプリとしてApp Store公開予定。",
        images: [
          {
            src: "/images/works/okitegami-01.png",
            alt: "おきてがみ — あなたの言葉を街に残そう",
          },
          {
            src: "/images/works/okitegami-02.png",
            alt: "おきてがみ — 立ち止まったこの場所に",
          },
          {
            src: "/images/works/okitegami-03.png",
            alt: "おきてがみ — 投稿は近くへいかないと読めません",
          },
        ],
      },
      {
        name: "WEG 日本向けローカライズ",
        oneLiner: "WEG（weg.net）の日本市場向けコンテンツ翻訳・ローカライズ",
        approach:
          "LinkedIn 投稿をはじめとする発信コンテンツを、日本のビジネス文脈に馴染む形へ翻訳・ローカライズ。",
        role: "翻訳・ローカライズ",
        link: "https://www.linkedin.com/company/weg/posts/?feedView=all",
        linkLabel: "LinkedIn",
        logoSrc: "/weg-logo.png",
        logoAlt: "WEG",
        logoBg: "bg-white",
      },
      {
        name: "nectere.jp",
        oneLiner: "Nectere コーポレートサイト",
        link: "https://nectere.jp",
        linkLabel: "サイトを見る",
        imageSrc: "/nectere-lp.png",
        imageAlt: "nectere.jp トップページ",
      },
    ],
  },
  {
    key: "radica",
    name: "RADICA",
    role: "CTO",
    mission:
      "エンターテインメントを軸にコンテンツをつくる会社。現在は教育コンテンツを中心に展開。",
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
        role: "撮影・出題",
        outcome: "登録者4万人を突破。",
        link: "https://www.youtube.com/@radicalNaTakurou",
        linkLabel: "YouTube",
        imageSrc: "/YouTube.jpg",
        imageAlt: "ラディカルなたくろう YouTubeサムネイル",
      },
      {
        name: "Hintory",
        oneLiner: "ブラウザで遊べる歴史クイズゲーム",
        problem: "歴史を「暗記」ではなく「推理」として楽しく学べる場が欲しい。",
        approach:
          "ヒントを段階的に開示する推理型UIと、AIによる回答判定を組み合わせたブラウザゲームを開発。",
        role: "設計・開発・収益化",
        outcome:
          "Next.js / Supabase / Gemini APIで開発。AdSenseによる広告収益化も実装。",
        link: "https://hintory.radica-inc.jp",
        linkLabel: "Play",
        imageSrc: "/Hintory.png",
        imageAlt: "Hintory ロゴ",
      },
      {
        name: "radica-inc.jp",
        oneLiner: "RADICA コーポレートサイト",
        link: "https://radica-inc.jp",
        linkLabel: "サイトを見る",
        imageSrc: "/radica-lp.png",
        imageAlt: "radica-inc.jp トップページ",
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
        name: "れんアカデミー",
        oneLiner: "こども向けミュージカルスクールの公式サイト",
        problem:
          "既存サイトは更新がしにくく、文字サイズの乱れやレスポンシブ未対応といった技術的な課題を抱えていた。",
        approach:
          "保守性とレスポンシブ対応を重視して作り直し。「目が、声が、輝く。」をキーコピーに、レッスン案内〜体験申込までの導線を再設計。",
        role: "DNS設定・デザイン・実装",
        outcome:
          "公式サイトをリニューアル公開。保守性・レスポンシブ対応を改善。",
        link: "https://ren-aka.com",
        linkLabel: "サイトを見る",
        imageSrc: "/ren-aka.png",
        imageAlt: "れんアカデミー トップページ",
      },
      {
        name: "FLL Korea Open Invitational",
        oneLiner: "日本代表チームのプレゼン通訳を担当",
        role: "日本代表チームに帯同し、審査員向けプレゼンテーションの日英通訳を担当。",
        logoSrc: "/fll-korea-event.png",
        logoAlt: "FIRST LEGO League Korea",
        logoBg: "bg-white",
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

export type TechSkillGroup = {
  category: string;
  items: string[];
};

export const techSkillGroups: TechSkillGroup[] = [
  {
    category: "開発",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "iOS (Swift)",
    ],
  },
  {
    category: "インフラ",
    items: ["Cloudflare", "DNS（基礎レベル）"],
  },
  {
    category: "デザイン・クリエイティブ",
    items: ["Figma", "Illustrator", "Premiere Pro"],
  },
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

export type SocialLink = {
  label: string;
  url: string;
};

export const socialLinks: SocialLink[] = [
  { label: "note", url: "https://note.com/ryuto1246" },
  { label: "Instagram", url: "https://www.instagram.com/ryutonakamura1246/" },
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100025145191972" },
  { label: "X", url: "https://x.com/ryuto1246" },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Skills", href: "#skills" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];
