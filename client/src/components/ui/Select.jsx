import { ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

/** Labelled native select styled to match the design system. */
export default function Select({ label, id, options = [], className, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={cn(
            "h-11 w-full appearance-none rounded-[var(--radius)] border border-border bg-input pl-3.5 pr-10 text-sm text-foreground transition-colors focus:border-primary/60 focus:outline-2 focus:outline-ring",
            className,
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value ?? opt} value={opt.value ?? opt}>
              {opt.label ?? opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
      </div>
    </div>
  );
}
