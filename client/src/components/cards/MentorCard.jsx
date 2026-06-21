import Tag from "../ui/Tag";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Mentor profile card with avatar monogram + expertise tags. */
export default function MentorCard({ mentor: rawMentor, className }) {
  const localize = useLocalize();
  const mentor = localize(rawMentor);
  return (
    <article
      className={cn(
        "group flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:glow-soft",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[var(--radius)] border border-primary/30 bg-primary/10 font-mono text-lg font-bold text-primary">
          {mentor.initials}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{mentor.name}</h3>
          <p className="text-sm text-foreground-muted">{mentor.role}</p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground-muted">
        {mentor.bio}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {mentor.expertise.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </article>
  );
}
