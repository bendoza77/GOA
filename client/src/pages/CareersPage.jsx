import { useTranslation } from "react-i18next";
import { Heart, Clock, Globe, Sparkles } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import Accordion from "../components/ui/Accordion";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";

const reasonIcons = [Heart, Clock, Globe, Sparkles];

export default function CareersPage() {
  const { t } = useTranslation();
  const reasons = t("careersPage.reasons", { returnObjects: true });
  const roles = t("careersPage.roles", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("careersPage.kicker")}
        title={t("careersPage.title")}
        subtitle={t("careersPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("careersPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <SectionHeading kicker={t("careersPage.whyKicker")} title={t("careersPage.whyTitle")} align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => {
            const Icon = reasonIcons[i];
            return (
            <Reveal key={r.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{r.body}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper surface>
        <SectionHeading
          kicker={t("careersPage.rolesKicker")}
          title={t("careersPage.rolesTitle")}
          description={t("careersPage.rolesDescription")}
        />
        <div className="mt-10 flex flex-col gap-3">
          {roles.map((role) => (
            <Accordion key={role.title} question={role.title} answer={role.summary} />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        kicker={t("careersPage.ctaKicker")}
        title={t("careersPage.ctaTitle")}
        description={t("careersPage.ctaDescription")}
        primary={{ label: t("careersPage.ctaPrimary"), to: "/contact" }}
        secondary={{ label: t("careersPage.ctaSecondary"), to: "/about" }}
      />
    </>
  );
}
