import { Star, Quote } from "lucide-react";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Student success-story card. */
export default function TestimonialCard({ testimonial: rawTestimonial, className }) {
  const localize = useLocalize();
  const testimonial = localize(rawTestimonial);
  return (
    <article
      className={cn(
        "flex flex-col rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Quote size={22} className="text-primary/50" />
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-primary text-primary" />
          ))}
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
        “{testimonial.quote}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-sm font-bold text-primary">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-xs text-primary">{testimonial.outcome}</div>
        </div>
      </div>
    </article>
  );
}
