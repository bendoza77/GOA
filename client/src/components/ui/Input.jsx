import { cn } from "../../utils/cn";

/** Labelled text input (UI-only — no submission logic). */
export default function Input({ label, id, className, hint, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          "h-11 rounded-[var(--radius)] border border-border bg-input px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-2 focus:outline-ring",
          className,
        )}
        {...props}
      />
      {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
    </div>
  );
}
