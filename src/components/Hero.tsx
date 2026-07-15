import Image from "next/image";
import { heroTags } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      {/* Decorative background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 w-72 h-72 rounded-full bg-primary-soft blur-3xl opacity-70" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-secondary-soft blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-accent-soft blur-3xl opacity-60" />

        {/* Small floating dots */}
        <span className="absolute top-20 right-1/4 w-4 h-4 rounded-full bg-primary/70 animate-float-slow" />
        <span className="absolute top-40 left-1/4 w-3 h-3 rounded-full bg-secondary animate-float-fast" />
        <span className="absolute bottom-32 right-1/3 w-5 h-5 rounded-full bg-accent" />
        <span className="absolute top-1/2 left-10 w-2.5 h-2.5 rounded-full bg-foreground/70" />
        <span className="absolute bottom-20 left-1/2 w-3 h-3 rounded-full bg-primary" />

        {/* Squiggle */}
        <svg
          className="absolute top-24 right-8 w-24 h-8 text-secondary/70"
          viewBox="0 0 120 20"
          fill="none"
        >
          <path
            d="M2 10 Q 15 -2 30 10 T 60 10 T 90 10 T 118 10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Hero frame — thick rounded white border. Content overflows naturally. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 md:inset-10 rounded-[2.5rem] md:rounded-[3.5rem] border-[3px] md:border-[5px] border-white"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-[auto_auto] md:justify-center gap-10 md:gap-24 items-center">
        {/* Photo column */}
        <div className="relative mx-auto md:mx-0">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary via-accent to-secondary opacity-40 blur-2xl"
            />
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full ring-4 ring-white shadow-xl overflow-hidden bg-gradient-to-br from-primary-soft via-white to-secondary-soft">
              <Image
                src="/nakamura.png"
                alt="中村龍人"
                fill
                sizes="(min-width: 768px) 320px, 224px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="relative">
          <h1 className="font-display font-normal text-5xl md:text-8xl leading-[0.95] tracking-tight">
            <span className="block -ml-[0.12em]">
              中村 <span className="text-primary text-[1.4em]">龍</span>人
            </span>
            <span className="block text-lg md:text-xl font-normal text-foreground/50 mt-4 tracking-widest">
              Ryuto Nakamura
            </span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
            <a
              href="#works"
              className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1.5 text-sm font-medium text-foreground/80 hover:bg-foreground hover:text-white transition-colors"
            >
              Nectere Founder
            </a>
            <a
              href="#works"
              className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1.5 text-sm font-medium text-foreground/80 hover:bg-foreground hover:text-white transition-colors"
            >
              RADICA CTO
            </a>
            <a
              href="#education"
              className="inline-flex items-center rounded-full bg-foreground/[0.06] px-3 py-1.5 text-sm font-medium text-foreground/80 hover:bg-foreground hover:text-white transition-colors"
            >
              東大工学部
            </a>
          </div>

          <ul className="mt-3 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <li key={tag.label}>
                <a
                  href={tag.href}
                  className="inline-flex items-center rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-foreground/70 ring-1 ring-border hover:text-foreground hover:ring-foreground/40 transition-colors"
                >
                  #{tag.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>

        {/* CTAs — independent row, centered under both columns */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-white px-6 py-3 text-sm font-medium hover:bg-primary transition-colors shadow-lg shadow-foreground/10"
          >
            お問い合わせ
            <span aria-hidden>→</span>
          </a>
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-border px-6 py-3 text-sm font-medium hover:bg-surface transition-colors"
          >
            Products & Businesses
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
