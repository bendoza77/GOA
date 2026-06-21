import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import ProjectCard from "../../components/cards/ProjectCard";
import Reveal from "../../components/shared/Reveal";
import { getFeaturedProjects } from "../../data/projects";

export default function ProjectsPreviewSection() {
  const { t } = useTranslation();
  const projects = getFeaturedProjects(3);
  return (
    <SectionWrapper id="projects-preview">
      <SectionHeading
        kicker={t("home.projects.kicker")}
        title={t("home.projects.title")}
        description={t("home.projects.description")}
        action={{ label: t("home.projects.action"), to: "/projects" }}
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.05}>
            <ProjectCard project={project} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
