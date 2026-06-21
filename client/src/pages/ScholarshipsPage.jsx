import { useTranslation } from "react-i18next";
import { HandHeart, GraduationCap, Globe2 } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import RoadmapStepCard from "../components/cards/RoadmapStepCard";
import FaqList from "../components/shared/FaqList";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";

const optionIcons = [HandHeart, GraduationCap, Globe2];

export default function ScholarshipsPage() {
  const { t } = useTranslation();
  const options = t("scholarshipsPage.options", { returnObjects: true });
  const steps = t("scholarshipsPage.steps", { returnObjects: true });
  const eligibility = t("scholarshipsPage.faq", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("scholarshipsPage.kicker")}
        title={t("scholarshipsPage.title")}
        subtitle={t("scholarshipsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("scholarshipsPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <SectionHeading kicker={t("scholarshipsPage.optionsKicker")} title={t("scholarshipsPage.optionsTitle")} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {options.map((o, i) => {
            const Icon = optionIcons[i];
            return (
            <Reveal key={o.title} delay={i * 0.06}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{o.body}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper surface>
        <SectionHeading kicker={t("scholarshipsPage.howKicker")} title={t("scholarshipsPage.howTitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <RoadmapStepCard key={i} step={step} index={i} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading kicker={t("scholarshipsPage.faqKicker")} title={t("scholarshipsPage.faqTitle")} action={{ label: t("common.allFaqs"), to: "/faq" }} />
          <FaqList items={eligibility} />
        </div>
      </SectionWrapper>

      <CTASection
        title={t("scholarshipsPage.ctaTitle")}
        description={t("scholarshipsPage.ctaDescription")}
      />
    </>
  );
}
