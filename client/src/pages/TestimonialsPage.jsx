import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import TestimonialCard from "../components/cards/TestimonialCard";
import StatBlock from "../components/ui/StatBlock";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { testimonials, outcomeStats } from "../data/testimonials";
import { useLocalize } from "../i18n/localize";

export default function TestimonialsPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const featured = localize(testimonials.find((item) => item.featured) || testimonials[0]);
  const stats = localize(outcomeStats);
  return (
    <>
      <PageHero
        kicker={t("testimonialsPage.kicker")}
        title={t("testimonialsPage.title")}
        subtitle={t("testimonialsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("testimonialsPage.breadcrumb") }]}
      />

      {/* Stats */}
      <SectionWrapper>
        <div className="grid grid-cols-2 gap-6 rounded-[var(--radius-lg)] border border-border bg-card p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <StatBlock key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Featured story */}
        <div className="mt-8 grid gap-8 rounded-[var(--radius-xl)] border border-primary/20 bg-card p-8 md:grid-cols-[0.35fr_0.65fr] md:p-10">
          <div className="flex flex-col items-start">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-primary/30 bg-primary/10 font-mono text-xl font-bold text-primary">
              {featured.initials}
            </div>
            <h2 className="mt-4 text-xl font-bold text-foreground">{featured.name}</h2>
            <p className="text-sm text-primary">{featured.outcome}</p>
            <p className="mt-1 text-xs text-muted-foreground">{featured.program}</p>
          </div>
          <div className="flex flex-col justify-center">
            <Quote size={28} className="text-primary/40" />
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              “{featured.quote}”
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Grid */}
      <SectionWrapper surface>
        <SectionHeading kicker={t("testimonialsPage.moreKicker")} title={t("testimonialsPage.moreTitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.05}>
              <TestimonialCard testimonial={item} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t("testimonialsPage.ctaTitle")}
        description={t("testimonialsPage.ctaDescription")}
      />
    </>
  );
}
