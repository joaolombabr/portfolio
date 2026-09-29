export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow inline-flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-2xl leading-tight font-medium tracking-tight text-balance text-foreground uppercase sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl leading-relaxed text-foreground-muted">{description}</p>
      ) : null}
    </div>
  );
}
