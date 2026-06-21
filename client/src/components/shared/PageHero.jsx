import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import GridBackground from "./GridBackground";
import GlowBackground from "./GlowBackground";
import { cn } from "../../utils/cn";

/**
 * Reusable inner-page hero: breadcrumb + kicker + title + subtitle + optional
 * actions, over a grid/glow backdrop. Used by every non-home page.
 */
export default function PageHero({
  kicker,
  title,
  subtitle,
  breadcrumb = [],
  children,
  className,
}) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40 md:pb-20",
        className,
      )}
    >
      <GridBackground />
      <GlowBackground />
      <div className="container-page relative">
        {breadcrumb.length > 0 && (
          <nav className="mb-5 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={12} />}
                {b.to ? (
                  <Link to={b.to} className="transition-colors hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-foreground-muted">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {kicker && (
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
            {"// "}
            {kicker}
          </div>
        )}

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground text-balance md:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground-muted">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
