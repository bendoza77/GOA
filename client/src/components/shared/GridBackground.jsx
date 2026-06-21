import { cn } from "../../utils/cn";

/** Faint cyber grid layer. Decorative only — use behind heroes & CTA bands. */
export default function GridBackground({ className, fade = true }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 grid-bg",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]",
        className,
      )}
    />
  );
}
