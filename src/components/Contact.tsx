import { companies } from "@/lib/data";

type EmailChannel = {
  label: string;
  email: string;
  tone: "primary" | "secondary" | "accent";
};

const channelsFromCompanies: EmailChannel[] = companies
  .filter((c) => c.email)
  .map((c) => ({
    label: c.name,
    email: c.email!,
    tone:
      c.key === "nectere"
        ? "primary"
        : c.key === "radica"
          ? "secondary"
          : "accent",
  }));

const dotClass: Record<EmailChannel["tone"], string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
};

const labelClass: Record<EmailChannel["tone"], string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-foreground text-white overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-16 right-0 w-96 h-96 rounded-full bg-secondary/40 blur-3xl" />
        <span className="absolute top-10 right-1/4 w-3 h-3 rounded-full bg-accent animate-float-slow" />
        <span className="absolute bottom-24 left-1/3 w-2 h-2 rounded-full bg-white/70 animate-float-fast" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-block w-8 h-0.5 bg-accent rounded-full" />
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Contact
          </p>
          <span className="inline-block w-8 h-0.5 bg-accent rounded-full" />
        </div>

        <h2 className="font-display font-normal text-4xl md:text-6xl leading-[1.15] tracking-tight">
          お仕事のご相談を
          <br />
          お待ちしています。
        </h2>

        <p className="mt-5 text-white/70 leading-relaxed">
          プロダクトの共同開発、教育コンテンツ、翻訳・通訳、その他ご相談まで。
          <br className="hidden md:inline" />
          以下の宛先までお気軽にお問い合わせください。
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 text-left">
          {channelsFromCompanies.map((channel) => (
            <li key={channel.email}>
              <a
                href={`mailto:${channel.email}`}
                className="group flex flex-col rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/30 transition-colors p-5 h-full"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-2 h-2 rounded-full ${dotClass[channel.tone]}`}
                  />
                  <span
                    className={`text-xs font-medium uppercase tracking-widest ${labelClass[channel.tone]}`}
                  >
                    {channel.label}
                  </span>
                </div>
                <span className="text-sm text-white break-all font-mono">
                  {channel.email}
                </span>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-xs text-white/60 group-hover:text-white transition-colors"
                  aria-hidden
                >
                  メールで問い合わせ
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
