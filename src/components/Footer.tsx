export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <p>© {year} Ryuto Nakamura. All rights reserved.</p>
        <p className="font-mono">
          crafted with{" "}
          <span className="text-primary">♥</span> — Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
