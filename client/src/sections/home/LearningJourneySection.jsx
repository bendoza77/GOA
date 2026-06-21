import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import RoadmapStepCard from "../../components/cards/RoadmapStepCard";
import Reveal from "../../components/shared/Reveal";
import { roadmapSteps } from "../../data/roadmap";

export default function LearningJourneySection() {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="journey" surface>
      <SectionHeading
        kicker={t("home.journey.kicker")}
        title={t("home.journey.title")}
        description={t("home.journey.description")}
      />

      <div className="relative mt-14">
        {/* Connecting line (desktop) */}
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
  );
}
