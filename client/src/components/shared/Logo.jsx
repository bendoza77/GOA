import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import logoMark from "../../assets/Screenshot 2026-06-20 122941.png";

/**
 * Brand mark: the GOA pixel-grid logo image + wordmark.
 * Green is the only accent.
 */
export default function Logo({ className, showText = true }) {
  return (
    <Link
      to="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label="Goa-Oriented Academy — home"
    >
      <img
        src={logoMark}
        alt="Goa-Oriented Academy"
        className="h-9 w-auto rounded-[var(--radius-sm)]"
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-sm font-bold tracking-tight text-foreground">
            GOA-ORIENTED
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Academy
          </span>
        </span>
      )}
    </Link>
  );
}
