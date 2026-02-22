export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className="text-sm font-semibold tracking-wide text-text-heading">{label}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
