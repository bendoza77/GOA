import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import ProgramCard from "../../components/cards/ProgramCard";
import Reveal from "../../components/shared/Reveal";
import { programs } from "../../data/programs";

export default function ProgramsOverviewSection() {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="programs" surface>
      <SectionHeading
        kicker={t("home.programsOverview.kicker")}
        title={t("home.programsOverview.title")}
        description={t("home.programsOverview.description")}
        action={{ label: t("common.viewAllPrograms"), to: "/programs" }}
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, i) => (
          <Reveal key={program.slug} delay={(i % 3) * 0.05}>
            <ProgramCard program={program} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
