import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import TestimonialCard from "../../components/cards/TestimonialCard";
import StatBlock from "../../components/ui/StatBlock";
import Reveal from "../../components/shared/Reveal";
import { getFeaturedTestimonials, outcomeStats } from "../../data/testimonials";
import { useLocalize } from "../../i18n/localize";

export default function TestimonialsPreviewSection() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const testimonials = getFeaturedTestimonials(3);
  const stats = localize(outcomeStats);
  return (
    <SectionWrapper id="testimonials" surface>
      <SectionHeading
        kicker={t("home.testimonials.kicker")}
        title={t("home.testimonials.title")}
        description={t("home.testimonials.description")}
        action={{ label: t("home.testimonials.action"), to: "/testimonials" }}
      />

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-6 rounded-[var(--radius-lg)] border border-border bg-card p-7 sm:grid-cols-4">
        {stats.map((s) => (
          <StatBlock key={s.label} value={s.value} label={s.label} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={(i % 3) * 0.05}>
            <TestimonialCard testimonial={t} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
