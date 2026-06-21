import { cn } from "../../utils/cn";

/** Radial green glow layer. One per viewport, max. Decorative only. */
export default function GlowBackground({ className }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 hero-glow", className)} />
  );
}
