import { useTranslation } from "react-i18next";
import { Calendar, Clock, MapPin } from "lucide-react";
import Badge from "../ui/Badge";
import Tag from "../ui/Tag";
import { formatDate } from "../../utils/formatters";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Event / workshop / hackathon card. */
export default function EventCard({ event: rawEvent, className }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const event = localize(rawEvent);
  const isPast = event.status === "past";
  return (
    <article
      className={cn(
        "group flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:glow-soft",
        isPast && "opacity-80",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Badge tone={event.type === "Hackathon" ? "primary" : "secondary"}>
          {t(`taxonomy.${event.type}`, event.type)}
        </Badge>
        <Badge tone={isPast ? "neutral" : "default"}>
          {isPast ? t("common.past") : t("common.upcoming")}
        </Badge>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground">
        {event.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
        {event.summary}
      </p>

      <div className="mt-5 flex flex-col gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <Calendar size={14} className="text-primary" />
          {formatDate(event.date)}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock size={14} className="text-primary" />
          {event.time}
        </span>
        <span className="inline-flex items-center gap-2">
          <MapPin size={14} className="text-primary" />
          {event.location}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
