import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import MentorCard from "../../components/cards/MentorCard";
import Reveal from "../../components/shared/Reveal";
import { getFeaturedMentors } from "../../data/mentors";

export default function MentorsPreviewSection() {
  const { t } = useTranslation();
  const mentors = getFeaturedMentors(4);
  return (
    <SectionWrapper id="mentors" surface>
      <SectionHeading
        kicker={t("home.mentors.kicker")}
        title={t("home.mentors.title")}
        description={t("home.mentors.description")}
        action={{ label: t("home.mentors.action"), to: "/mentors" }}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {mentors.map((mentor, i) => (
          <Reveal key={mentor.id} delay={(i % 4) * 0.05}>
            <MentorCard mentor={mentor} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
