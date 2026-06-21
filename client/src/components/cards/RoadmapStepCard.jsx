import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Numbered step in the learning-journey roadmap. */
export default function RoadmapStepCard({ step: rawStep, index, className }) {
  const localize = useLocalize();
  const step = localize(rawStep);
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
        {step.label && (
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80">
            {step.label}
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {step.description}
      </p>
    </div>
  );
}
