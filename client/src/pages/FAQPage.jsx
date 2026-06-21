import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import Tabs from "../components/ui/Tabs";
import FaqList from "../components/shared/FaqList";
import CTASection from "../components/shared/CTASection";
import { faqCategories } from "../data/faq";

export default function FAQPage() {
  const { t } = useTranslation();
  const [active, setActive] = useState(faqCategories[0].category);
  const current =
    faqCategories.find((c) => c.category === active) || faqCategories[0];

  return (
    <>
      <PageHero
        kicker={t("faqPage.kicker")}
        title={t("faqPage.title")}
        subtitle={t("faqPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("faqPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-14">
          {/* Category nav */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
              {t("faqPage.categories")}
            </h2>
            <div className="lg:hidden">
              <Tabs
                tabs={faqCategories.map((c) => c.category)}
                value={active}
                onChange={setActive}
              />
            </div>
            <div className="hidden flex-col gap-1 lg:flex">
              {faqCategories.map((c) => (
                <button
                  key={c.category}
                  type="button"
                  onClick={() => setActive(c.category)}
                  className={
                    "rounded-[var(--radius)] px-3.5 py-2.5 text-left text-sm transition-colors " +
                    (active === c.category
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-foreground-muted hover:bg-muted hover:text-foreground")
                  }
                >
                  {t(`taxonomy.${c.category}`, c.category)}
                </button>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div>
            <h3 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              {t(`taxonomy.${current.category}`, current.category)}
            </h3>
            <FaqList key={current.category} items={current.items} />
          </div>
        </div>
      </SectionWrapper>

      <CTASection
        title={t("faqPage.ctaTitle")}
        description={t("faqPage.ctaDescription")}
        primary={{ label: t("faqPage.ctaPrimary"), to: "/contact" }}
        secondary={{ label: t("common.applyNow"), to: "/apply" }}
      />
    </>
  );
}
