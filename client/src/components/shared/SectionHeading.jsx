import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

/**
 * Kicker + title + optional description, with optional "view all" action link.
 * `align` controls centered vs left layout.
 */
export default function SectionHeading({
  kicker,
  title,
  description,
  action,
  align = "left",
  className,
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        centered && "md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {kicker && (
          <div
            className={cn(
              "mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary",
              centered && "justify-center",
            )}
          >
            <span className="text-primary/60">{"//"}</span>
            {kicker}
          </div>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-foreground-muted">
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          to={action.to}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-strong"
        >
          {action.label}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}
