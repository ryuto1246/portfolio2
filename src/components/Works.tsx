import Image from "next/image";
import { companies, type Company, type Project } from "@/lib/data";
import { CompanyCarousel } from "./CompanyCarousel";
import { SectionHeading } from "./SectionHeading";

type Accent = "primary" | "secondary" | "accent";

const accentTokens = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    softBg: "bg-primary-soft",
    softText: "bg-primary-soft text-primary",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary",
    softBg: "bg-secondary-soft",
    softText: "bg-secondary-soft text-secondary",
  },
  accent: {
    text: "text-foreground",
    bg: "bg-accent",
    softBg: "bg-accent-soft",
    softText: "bg-accent-soft text-foreground",
  },
} as const;

function accentFor(key: Company["key"]): Accent {
  if (key === "nectere") return "primary";
  if (key === "radica") return "secondary";
  return "accent";
}

export function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-surface/60">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Products & Businesses" />

        <div className="mt-16 space-y-20">
          {companies.map((company) => (
            <CompanyBlock key={company.key} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyBlock({ company }: { company: Company }) {
  const accent = accentFor(company.key);
  const tokens = accentTokens[accent];

  return (
    <div id={company.key} className="scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div className="flex items-start gap-5">
          {company.logoSrc && (
            <div className="shrink-0 h-14 min-w-14 rounded-2xl bg-white ring-1 ring-border/70 grid place-items-center px-3 shadow-sm">
              <Image
                src={company.logoSrc}
                alt={company.logoAlt ?? company.name}
                width={160}
                height={56}
                className="h-9 w-auto object-contain"
                priority
              />
            </div>
          )}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display font-normal text-3xl md:text-4xl tracking-tight">
                {company.name}
              </h3>
              {company.role && (
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tokens.softText}`}
                >
                  {company.role}
                </span>
              )}
            </div>
            <p className="text-foreground/80 font-medium">{company.mission}</p>
            {company.description && (
              <p className="text-sm text-foreground/60 mt-1">
                {company.description}
              </p>
            )}
          </div>
        </div>
      </div>

      <CompanyCarousel>
        {company.projects.map((project) => (
          <div
            key={project.name}
            className="snap-start shrink-0 w-[85%] sm:w-[360px] flex"
          >
            <ProjectCard project={project} accent={accent} />
          </div>
        ))}
      </CompanyCarousel>
    </div>
  );
}

function ProjectCard({
  project,
  accent,
}: {
  project: Project;
  accent: Accent;
}) {
  const tokens = accentTokens[accent];
  const detailRows: Array<[string, string | undefined]> = [
    ["課題", project.problem],
    ["アプローチ", project.approach],
    ["役割", project.role],
    ["成果", project.outcome],
  ];
  const hasDetails = detailRows.some(([, value]) => value);

  return (
    <article className="group relative flex flex-col w-full rounded-3xl bg-white ring-1 ring-border p-0 hover:ring-foreground/30 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden">
      {project.imageSrc ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.name}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      ) : project.logoSrc ? (
        <div
          className={`relative aspect-[16/9] w-full flex items-center justify-center px-6 ${
            project.logoBg ?? "bg-surface"
          }`}
        >
          <Image
            src={project.logoSrc}
            alt={project.logoAlt ?? project.name}
            width={240}
            height={80}
            className="h-14 w-auto object-contain"
          />
        </div>
      ) : (
        <div
          className={`relative aspect-[16/9] w-full ${tokens.softBg}`}
        />
      )}

      <div className="flex flex-col p-6 flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h4 className="font-display font-normal text-2xl leading-tight tracking-tight">
            {project.name}
          </h4>
          <div className="flex flex-col items-end gap-1">
            {project.badge && (
              <span
                className={`inline-flex items-center whitespace-nowrap rounded-full ${tokens.softText} px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase`}
              >
                {project.badge}
              </span>
            )}
            {project.status && (
              <span className="inline-flex items-center rounded-full bg-accent-soft text-foreground px-2 py-0.5 text-[10px] font-medium tracking-wider">
                {project.status}
              </span>
            )}
          </div>
        </div>

        <p className={`text-sm font-medium ${tokens.text} mb-4`}>
          {project.oneLiner}
        </p>

        {hasDetails && (
          <div className="space-y-3 text-sm text-foreground/75 leading-relaxed border-t border-border pt-4 flex-1">
            {detailRows.map(([label, value]) =>
              value ? <DetailRow key={label} label={label} value={value} /> : null,
            )}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${tokens.text} hover:gap-2.5 transition-all`}
          >
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${tokens.bg}`} />
            {project.linkLabel ?? "詳細を見る"}
            <span aria-hidden>↗</span>
          </a>
        )}
      </div>
    </article>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-3">
      <span className="text-[10px] font-medium uppercase tracking-widest text-foreground/40 pt-1">
        {label}
      </span>
      <p>{value}</p>
    </div>
  );
}
