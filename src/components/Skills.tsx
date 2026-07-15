import { SectionHeading } from "./SectionHeading";
import { techSkillGroups, certificates } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface/60">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Skills" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white ring-1 ring-border p-6 shadow-sm">
            <SkillHeader
              icon={<TechIcon />}
              title="Tech Stack"
              tone="primary"
            />
            <div className="mt-5 space-y-4">
              {techSkillGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-[10px] font-medium uppercase tracking-widest text-foreground/50">
                    {group.category}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="inline-flex items-center rounded-full bg-primary-soft text-primary-strong px-3 py-1 text-sm font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white ring-1 ring-border p-6 shadow-sm">
            <SkillHeader
              icon={<CertIcon />}
              title="Certificates"
              tone="accent"
            />
            <ul className="mt-5 space-y-3">
              {certificates.map((c) => (
                <li key={c.name} className="flex items-center gap-3">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium flex-1">{c.name}</span>
                  {c.status && (
                    <span className="text-xs text-foreground/60 rounded-full bg-accent-soft px-2 py-0.5 font-medium">
                      {c.status}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillHeader({
  icon,
  title,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  tone: "primary" | "secondary" | "accent";
}) {
  const toneMap = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-foreground",
  };
  return (
    <div className="flex items-center gap-3">
      <div className={`w-10 h-10 rounded-xl grid place-items-center ${toneMap[tone]}`}>
        {icon}
      </div>
      <h3 className="font-display font-normal text-xl tracking-tight">
        {title}
      </h3>
    </div>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  className: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function TechIcon() {
  return (
    <svg {...iconProps}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="8" r="6" />
      <path d="M9 13.5 7.5 22l4.5-3 4.5 3-1.5-8.5" />
    </svg>
  );
}
