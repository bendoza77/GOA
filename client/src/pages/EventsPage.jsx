import { useTranslation } from "react-i18next";
import { Trophy } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import EventCard from "../components/cards/EventCard";
import Button from "../components/ui/Button";
import Tag from "../components/ui/Tag";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { getUpcomingEvents, getPastEvents, events } from "../data/events";
import { formatDate } from "../utils/formatters";
import { useLocalize } from "../i18n/localize";

export default function EventsPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();
  const featured = localize(events.find((e) => e.featured) || upcoming[0]);

  return (
    <>
      <PageHero
        kicker={t("eventsPage.kicker")}
        title={t("eventsPage.title")}
        subtitle={t("eventsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("eventsPage.breadcrumb") }]}
      />

      {/* Featured event */}
      <SectionWrapper>
        <div className="grid gap-8 overflow-hidden rounded-[var(--radius-xl)] border border-primary/20 bg-card md:grid-cols-[0.55fr_0.45fr]">
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Trophy size={14} />
              {t("eventsPage.featuredLabel")} · {t(`taxonomy.${featured.type}`, featured.type)}
            </div>
            <h2 className="text-2xl font-bold text-foreground">{featured.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground-muted">
              {featured.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button to="/apply">{t("eventsPage.reserveSpot")}</Button>
              <span className="text-sm text-muted-foreground">
                {formatDate(featured.date)} · {featured.time} · {featured.location}
              </span>
            </div>
          </div>
          <div className="relative min-h-[16rem] border-t border-border md:border-l md:border-t-0">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 hero-glow" />
            <div className="absolute inset-0 grid place-items-center">
              <Trophy size={48} className="text-primary/50" />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Upcoming */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("eventsPage.upcomingKicker")}
          title={t("eventsPage.upcomingTitle")}
          description={t("eventsPage.upcomingDescription")}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((event, i) => (
            <Reveal key={event.id} delay={(i % 3) * 0.05}>
              <EventCard event={event} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Past */}
      <SectionWrapper>
        <SectionHeading kicker={t("eventsPage.pastKicker")} title={t("eventsPage.pastTitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {past.map((event) => (
            <EventCard key={event.id} event={event} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t("eventsPage.ctaTitle")}
        description={t("eventsPage.ctaDescription")}
      />
    </>
  );
}
