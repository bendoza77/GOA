import { useTranslation } from "react-i18next";
import { Target, Eye, Compass, Heart, Shield, Rocket } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import RoadmapStepCard from "../components/cards/RoadmapStepCard";
import MentorCard from "../components/cards/MentorCard";
import StatBlock from "../components/ui/StatBlock";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { roadmapSteps } from "../data/roadmap";
import { getFeaturedMentors } from "../data/mentors";
import { outcomeStats } from "../data/testimonials";
import { useLocalize } from "../i18n/localize";

const valueIcons = [Heart, Shield, Compass, Rocket];

export default function AboutPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const mentors = getFeaturedMentors(4);
  const stats = localize(outcomeStats);
  const storyParagraphs = t("aboutPage.storyParagraphs", { returnObjects: true });
  const values = t("aboutPage.values", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("aboutPage.kicker")}
        title={t("aboutPage.title")}
        subtitle={t("aboutPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("aboutPage.breadcrumb") }]}
      />

      {/* Story */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading kicker={t("aboutPage.storyKicker")} title={t("aboutPage.storyTitle")} />
            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground-muted">
              {storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 self-start rounded-[var(--radius-lg)] border border-border bg-card p-8">
            {stats.map((s) => (
              <StatBlock key={s.label} value={s.value} label={s.label} className="text-center sm:text-left" />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mission / Vision */}
      <SectionWrapper surface>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[var(--radius-lg)] border border-primary/20 bg-card p-8">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                <Target size={20} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{t("aboutPage.missionTitle")}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {t("aboutPage.missionBody")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-8">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-secondary/25 bg-secondary/10 text-secondary">
                <Eye size={20} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{t("aboutPage.visionTitle")}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {t("aboutPage.visionBody")}
              </p>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Methodology / roadmap */}
      <SectionWrapper>
        <SectionHeading
          kicker={t("aboutPage.methodKicker")}
          title={t("aboutPage.methodTitle")}
          description={t("aboutPage.methodDescription")}
        />
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {roadmapSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <RoadmapStepCard step={step} index={i} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper surface>
        <SectionHeading kicker={t("aboutPage.valuesKicker")} title={t("aboutPage.valuesTitle")} align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={v.title} delay={(i % 4) * 0.05}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{v.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Team preview */}
      <SectionWrapper>
        <SectionHeading
          kicker={t("aboutPage.teamKicker")}
          title={t("aboutPage.teamTitle")}
          description={t("aboutPage.teamDescription")}
          action={{ label: t("common.meetAllMentors"), to: "/mentors" }}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m) => (
            <MentorCard key={m.id} mentor={m} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
