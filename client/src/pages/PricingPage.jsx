import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import PricingCard from "../components/cards/PricingCard";
import Button from "../components/ui/Button";
import FaqList from "../components/shared/FaqList";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";

// Prices and the "featured" flag are language-agnostic; text comes from i18n.
const planMeta = [
  { price: "$29", period: "mo" },
  { price: "$89", period: "mo", featured: true },
  { price: "$149", period: "mo" },
];

export default function PricingPage() {
  const { t } = useTranslation();
  const planText = t("pricingPage.plans", { returnObjects: true });
  const plans = planMeta.map((meta, i) => ({ ...meta, ...planText[i] }));
  const pricingFaq = t("pricingPage.faq", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("pricingPage.kicker")}
        title={t("pricingPage.title")}
        subtitle={t("pricingPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("pricingPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3 md:gap-5 md:pt-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <PricingCard plan={plan} className="h-full" />
            </Reveal>
          ))}
        </div>

        {/* Scholarship callout */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[var(--radius-lg)] border border-secondary/25 bg-card p-7 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius)] border border-secondary/25 bg-secondary/10 text-secondary">
              <Sparkles size={20} />
            </span>
            <div>
              <h3 className="font-semibold text-foreground">{t("pricingPage.scholarshipTitle")}</h3>
              <p className="mt-1 text-sm text-foreground-muted">
                {t("pricingPage.scholarshipBody")}
              </p>
            </div>
          </div>
          <Button to="/scholarships" variant="secondary">
            {t("pricingPage.viewScholarships")}
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper surface>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker={t("pricingPage.faqKicker")}
            title={t("pricingPage.faqTitle")}
            action={{ label: t("common.allFaqs"), to: "/faq" }}
          />
          <FaqList items={pricingFaq} />
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
