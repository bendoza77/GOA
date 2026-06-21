import { cn } from "../../utils/cn";

const tones = {
  default: "bg-muted text-muted-foreground border-border",
  primary: "bg-primary/10 text-primary border-primary/30",
  secondary: "bg-secondary/10 text-secondary border-secondary/30",
  warning: "bg-warning/10 text-warning border-warning/30",
  neutral: "bg-card-raised text-foreground-muted border-border-strong",
};

/** Mono uppercase label for levels, formats and statuses. */
export default function Badge({ children, tone = "default", className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-sm)] border px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
