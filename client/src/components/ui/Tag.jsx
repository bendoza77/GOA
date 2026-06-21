import { cn } from "../../utils/cn";

/**
 * Rounded chip for tech/skill tags. When `interactive`, used as a filter pill
 * with a `selected` state.
 */
export default function Tag({
  children,
  interactive = false,
  selected = false,
  onClick,
  className,
}) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150";

  if (interactive) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cn(
          base,
          "border",
          selected
            ? "border-primary bg-primary/15 text-primary"
            : "border-border-strong text-foreground-muted hover:border-primary/40 hover:text-foreground",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      className={cn(
        base,
        "border border-border bg-muted/60 text-foreground-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
