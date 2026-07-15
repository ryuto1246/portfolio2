import type { ComponentType, SVGProps } from "react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { languages } from "@/lib/data";
import { FluteIcon, TenorSaxIcon } from "./InstrumentIcons";

export function BeyondWork() {
  return (
    <section id="beyond" className="relative py-24 md:py-32 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 -left-24 w-72 h-72 rounded-full bg-primary-soft blur-3xl opacity-60" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-secondary-soft blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Beyond Work" />

        <div className="mt-12 grid md:grid-cols-2 gap-5 items-start">
          <div className="space-y-5">
            <InstrumentCard
              eyebrow="Music"
              title="フルート"
              Icon={FluteIcon}
            />
            <InstrumentCard
              eyebrow="Music"
              title="テナーサックス"
              Icon={TenorSaxIcon}
            />
          </div>
          <LanguagesCard />
        </div>
      </div>
    </section>
  );
}

function InstrumentCard({
  eyebrow,
  title,
  Icon,
}: {
  eyebrow: string;
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <article className="relative rounded-3xl bg-white ring-1 ring-border shadow-sm overflow-hidden h-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 text-primary/10"
      >
        <Icon className="w-32 h-32" />
      </div>
      <div className="relative flex flex-col justify-center h-full pl-28 pr-6">
        <p className="text-[10px] font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h3 className="mt-1 font-display font-normal text-2xl leading-snug tracking-tight">
          {title}
        </h3>
      </div>
    </article>
  );
}

function LanguagesCard() {
  return (
    <article className="relative rounded-3xl bg-white ring-1 ring-border p-8 shadow-sm">
      <div className="flex items-start gap-4 mb-5">
        <div
          className="shrink-0 w-14 h-14 rounded-2xl grid place-items-center text-3xl bg-secondary-soft text-secondary"
          aria-hidden
        >
          🌍
        </div>
        <div className="flex-1">
          <p className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest bg-secondary-soft text-secondary">
            Languages
          </p>
          <h3 className="mt-2 font-display font-normal text-2xl leading-snug tracking-tight">
            語学
          </h3>
        </div>
      </div>

      <ul className="space-y-2.5">
        {languages.map((lang) => (
          <li
            key={lang.name}
            className="flex items-center gap-3 border-b border-border/60 pb-2 last:border-0"
          >
            <span className="flex -space-x-1.5 shrink-0">
              {lang.flags.map((code) => (
                <Image
                  key={code}
                  src={`/flags/${code}.svg`}
                  alt=""
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px] rounded-full ring-1 ring-white"
                />
              ))}
            </span>
            <span className="text-sm font-medium flex-1">{lang.name}</span>
            <span className="text-xs text-foreground/60 font-medium">
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
