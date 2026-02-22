export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-2">
        <p className="font-mono text-[11px] text-text-muted">
          <span className="text-accent">$</span> echo &quot;
          {new Date().getFullYear()} hw1186 — all rights reserved&quot;
        </p>
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] text-text-muted">
            <span className="text-accent">$</span> built with Next.js +
            Tailwind
          </p>
          <a
            href="#"
            className="font-mono text-[11px] text-text-muted transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            <span className="text-accent">$</span> cd ~
          </a>
        </div>
      </div>
    </footer>
  );
}
