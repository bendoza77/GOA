import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import IconBadge from "../ui/IconBadge";
import Badge from "../ui/Badge";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Program summary card. Used on Programs grid + Home preview. */
export default function ProgramCard({ program: rawProgram, className }) {
  const localize = useLocalize();
  const program = localize(rawProgram);
  return (
    <Link
      to={`/programs/${program.slug}`}
      className={cn(
        "group relative flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:glow-soft",
        program.featured && "border-primary/25",
        className,
      )}
    >
      {program.featured && (
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      <div className="flex items-start justify-between">
        <IconBadge name={program.icon} />
        <ArrowUpRight
          size={18}
          className="text-muted-foreground transition-colors group-hover:text-primary"
        />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {program.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
        {program.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Badge tone="primary">{program.format}</Badge>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <Clock size={13} />
          {program.duration}
        </span>
      </div>
    </Link>
  );
}
