import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-primary text-primary-foreground font-semibold hover:bg-primary-strong hover:glow-primary active:translate-y-0",
  secondary:
    "border border-border-strong bg-transparent text-foreground hover:border-primary/60 hover:text-foreground hover:bg-primary/5",
  ghost:
    "bg-transparent text-foreground-muted hover:text-foreground hover:bg-muted",
  outline:
    "border border-primary/40 text-primary hover:bg-primary/10",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

/**
 * Polymorphic button: renders <Link> when `to` is set, <a> when `href` is set,
 * otherwise a native <button>. One filled `primary` per view.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] whitespace-nowrap transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
