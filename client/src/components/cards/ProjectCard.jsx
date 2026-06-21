import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import Badge from "../ui/Badge";
import Tag from "../ui/Tag";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Student project showcase card. */
export default function ProjectCard({ project: rawProject, className }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const project = localize(rawProject);
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:glow-soft",
        className,
      )}
    >
      {/* Visual placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 hero-glow opacity-70" />
        <div className="absolute inset-0 grid place-items-center">
          <Code2 size={32} className="text-primary/60" />
        </div>
        <div className="absolute left-3 top-3">
          <Badge tone="primary">{t(`taxonomy.${project.category}`, project.category)}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">
          {t("common.by")}{" "}
          <span className="text-foreground">{project.student}</span> ·{" "}
          {project.program}
        </div>
      </div>
    </article>
  );
}
