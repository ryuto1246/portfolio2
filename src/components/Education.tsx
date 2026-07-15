import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

type Entry = {
  period: string;
  name: string;
  department?: string;
  logoSrc?: string;
  logoAlt?: string;
};

const entries: Entry[] = [
  {
    period: "2021.4 〜 2024.3",
    name: "東京都立戸山高校",
  },
  {
    period: "2024.4 〜",
    name: "東京大学 工学部 計数工学科",
    department: "システム情報工学コース",
    logoSrc: "/utokyo.png",
    logoAlt: "東京大学",
  },
  {
    period: "2024.10 〜",
    name: "学習塾講師（東京）",
    department: "数学・物理・化学・英語・現代文・古文を指導。進路指導も担当。",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Education & Career" />
        <div className="mt-10 space-y-4">
          {entries.map((entry) => (
            <EducationCard key={entry.name} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ entry }: { entry: Entry }) {
  const hasLogo = Boolean(entry.logoSrc);
  return (
    <div
      className={`rounded-3xl bg-white ring-1 ring-border shadow-sm ${
        hasLogo ? "p-6 md:p-8" : "px-6 py-4 md:px-8 md:py-5"
      }`}
    >
      <div className="flex items-start gap-4">
        {hasLogo && entry.logoSrc && (
          <div className="shrink-0 h-12 flex items-center rounded-2xl bg-white ring-1 ring-border px-3">
            <Image
              src={entry.logoSrc}
              alt={entry.logoAlt ?? entry.name}
              width={160}
              height={48}
              className="h-8 w-auto object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/40">
            {entry.period}
          </p>
          <h3
            className={`mt-1 font-display font-normal leading-tight tracking-tight ${
              hasLogo ? "text-2xl md:text-3xl" : "text-base md:text-lg"
            }`}
          >
            {entry.name}
          </h3>
          {entry.department && (
            <p className="text-foreground/70 mt-0.5">{entry.department}</p>
          )}
        </div>
      </div>
    </div>
  );
}
