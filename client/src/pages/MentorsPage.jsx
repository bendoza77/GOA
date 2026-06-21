import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import MentorCard from "../components/cards/MentorCard";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { mentors } from "../data/mentors";
import { useLocalize } from "../i18n/localize";

export default function MentorsPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const featured = localize(mentors.find((m) => m.featured) || mentors[0]);
  const culturePoints = t("mentorsPage.culturePoints", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("mentorsPage.kicker")}
        title={t("mentorsPage.title")}
        subtitle={t("mentorsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("mentorsPage.breadcrumb") }]}
      />

      {/* Featured mentor */}
      <SectionWrapper>
        <div className="grid gap-8 rounded-[var(--radius-xl)] border border-primary/20 bg-card p-8 md:grid-cols-[0.4fr_0.6fr] md:p-10">
          <div className="flex flex-col items-start">
            <div className="grid h-20 w-20 place-items-center rounded-[var(--radius-lg)] border border-primary/30 bg-primary/10 font-mono text-2xl font-bold text-primary">
              {featured.initials}
            </div>
            <h2 className="mt-5 text-2xl font-bold text-foreground">{featured.name}</h2>
            <p className="text-sm text-primary">{featured.role}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featured.expertise.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Quote size={28} className="text-primary/40" />
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              “{t("mentorsPage.featuredQuote")}”
            </p>
            <p className="mt-4 text-sm text-foreground-muted">
              {t("mentorsPage.specializesIn", { field: featured.specialization })}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mentor grid */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("mentorsPage.rosterKicker")}
          title={t("mentorsPage.rosterTitle")}
          description={t("mentorsPage.rosterDescription")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((m, i) => (
            <Reveal key={m.id} delay={(i % 3) * 0.05}>
              <MentorCard mentor={m} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Mentor culture */}
      <SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              kicker={t("mentorsPage.cultureKicker")}
              title={t("mentorsPage.cultureTitle")}
            />
            <p className="mt-5 text-base leading-relaxed text-foreground-muted">
              {t("mentorsPage.cultureBody1")}
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground-muted">
              {t("mentorsPage.cultureBody2")}
            </p>
            <Button to="/careers" variant="secondary" className="mt-6">
              {t("common.becomeMentor")}
            </Button>
          </div>
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-8">
            <ul className="flex flex-col gap-4">
              {culturePoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
