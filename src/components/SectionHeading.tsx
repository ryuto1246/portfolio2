type Props = {
  eyebrow: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  subtitle,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <div
        className={`flex items-center gap-2 mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="inline-block w-8 h-0.5 bg-primary rounded-full" />
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
          {eyebrow}
        </p>
      </div>
      {subtitle && (
        <p className="mt-4 text-foreground/70 leading-relaxed text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
