import { useTranslation } from "react-i18next";
import { Users, MessagesSquare, CalendarDays, GraduationCap } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import EventCard from "../components/cards/EventCard";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { getUpcomingEvents } from "../data/events";

const pillarIcons = [MessagesSquare, CalendarDays, Users, GraduationCap];

export default function CommunityPage() {
  const { t } = useTranslation();
  const events = getUpcomingEvents().slice(0, 3);
  const pillars = t("communityPage.pillars", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("communityPage.kicker")}
        title={t("communityPage.title")}
        subtitle={t("communityPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("communityPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <SectionHeading kicker={t("communityPage.pillarsKicker")} title={t("communityPage.pillarsTitle")} align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[i];
            return (
            <Reveal key={p.title} delay={(i % 4) * 0.05}>
              <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{p.body}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper surface>
        <SectionHeading
          kicker={t("communityPage.eventsKicker")}
          title={t("communityPage.eventsTitle")}
          action={{ label: t("communityPage.allEvents"), to: "/events" }}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.id} event={e} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t("communityPage.ctaTitle")}
        description={t("communityPage.ctaDescription")}
      />
    </>
  );
}
