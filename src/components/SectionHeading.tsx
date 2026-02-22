export function SectionHeading({
  label,
  number,
}: {
  label: string;
  number: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[11px] text-accent">{number}</span>
      <h2 className="text-sm font-semibold tracking-wide text-text-heading">
        {label}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
