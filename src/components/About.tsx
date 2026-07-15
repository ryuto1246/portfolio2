import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-accent-soft blur-3xl opacity-60" />
        <span className="absolute top-16 left-6 w-3 h-3 rounded-full bg-primary" />
        <span className="absolute bottom-24 right-14 w-2.5 h-2.5 rounded-full bg-secondary" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" />

        <div className="mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground/85">
            東京大学工学部計数工学科 システム情報工学コースで、
            制御・信号処理・計測を軸に「対象を捉え、動かす」工学を学びながら、
            <a href="#works" className="font-medium text-primary hover:underline">
              Nectere
            </a>
            ではテクノロジー、
            <a
              href="#works"
              className="font-medium text-secondary hover:underline"
            >
              RADICA
            </a>
            ではエンタメを軸に、それぞれ経営とプロダクト開発に携わっています。
          </p>
        </div>
      </div>
    </section>
  );
}
