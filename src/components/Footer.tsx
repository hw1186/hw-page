export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-4xl items-center justify-between text-xs text-text-muted">
        <span>© {new Date().getFullYear()} hw1186</span>
        <span className="hidden sm:inline">built with Next.js + Tailwind</span>
      </div>
    </footer>
  );
}
