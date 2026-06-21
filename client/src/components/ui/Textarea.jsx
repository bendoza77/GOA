import { cn } from "../../utils/cn";

/** Labelled textarea (UI-only). */
export default function Textarea({ label, id, className, rows = 5, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "rounded-[var(--radius)] border border-border bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-2 focus:outline-ring resize-y",
          className,
        )}
        {...props}
      />
    </div>
  );
}
