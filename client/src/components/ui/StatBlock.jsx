import { cn } from "../../utils/cn";

/** Big number + label. Used in outcome/achievement rows. */
export default function StatBlock({ value, label, className }) {
  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div className="font-mono text-3xl font-semibold text-primary md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-foreground-muted">{label}</div>
    </div>
  );
}
