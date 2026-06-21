import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import EventCard from "../../components/cards/EventCard";
import Reveal from "../../components/shared/Reveal";
import { getUpcomingEvents } from "../../data/events";

export default function EventsPreviewSection() {
  const { t } = useTranslation();
  const events = getUpcomingEvents().slice(0, 3);
  return (
    <SectionWrapper id="events">
      <SectionHeading
        kicker={t("home.events.kicker")}
        title={t("home.events.title")}
        description={t("home.events.description")}
        action={{ label: t("home.events.action"), to: "/events" }}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {events.map((event, i) => (
          <Reveal key={event.id} delay={i * 0.06}>
            <EventCard event={event} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
