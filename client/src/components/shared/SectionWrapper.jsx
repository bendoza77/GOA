import { cn } from "../../utils/cn";

/**
 * Standard section: consistent vertical rhythm + page container.
 * `surface` toggles a slightly different background for alternating sections.
 */
export default function SectionWrapper({
  children,
  id,
  surface = false,
  className,
  innerClassName,
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24",
        surface && "bg-surface",
        className,
      )}
    >
      <div className={cn("container-page", innerClassName)}>{children}</div>
    </section>
  );
}
