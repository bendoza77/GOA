import Icon from "./Icon";
import { cn } from "../../utils/cn";

/** Lucide icon inside a rounded, slightly technical square. */
export default function IconBadge({ name, size = "md", className }) {
  const dims = {
    sm: "h-9 w-9 rounded-[var(--radius-sm)]",
    md: "h-11 w-11 rounded-[var(--radius)]",
    lg: "h-14 w-14 rounded-[var(--radius-lg)]",
  };
  const icon = { sm: 18, md: 20, lg: 26 };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center border border-primary/25 bg-primary/10 text-primary",
        dims[size],
        className,
      )}
    >
      <Icon name={name} size={icon[size]} strokeWidth={1.75} />
    </div>
  );
}
