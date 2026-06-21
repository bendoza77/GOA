import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import ProjectCard from "../components/cards/ProjectCard";
import Tabs from "../components/ui/Tabs";
import Tag from "../components/ui/Tag";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { projects, projectCategories } from "../data/projects";
import { useLocalize } from "../i18n/localize";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const [category, setCategory] = useState("All");
  const featured = localize(projects.find((p) => p.featured) || projects[0]);

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((p) => p.category === category),
    [category],
  );

  return (
    <>
      <PageHero
        kicker={t("projectsPage.kicker")}
        title={t("projectsPage.title")}
        subtitle={t("projectsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("projectsPage.breadcrumb") }]}
      />

      {/* Featured project */}
      <SectionWrapper>
        <div className="grid gap-8 overflow-hidden rounded-[var(--radius-xl)] border border-primary/20 bg-card md:grid-cols-2">
          <div className="relative min-h-[18rem] border-b border-border md:border-b-0 md:border-r">
            <div className="absolute inset-0 grid-bg opacity-60" />
            <div className="absolute inset-0 hero-glow opacity-80" />
            <div className="absolute inset-0 grid place-items-center">
              <Code2 size={48} className="text-primary/60" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              {"// "}
              {t("projectsPage.featuredLabel")}
            </div>
            <h2 className="text-2xl font-bold text-foreground">{featured.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground-muted">
              {featured.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              {t("common.by")} <span className="text-foreground">{featured.student}</span> ·{" "}
              {featured.program}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Grid + filters */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("projectsPage.gridKicker")}
          title={t("projectsPage.gridTitle")}
          description={t("projectsPage.gridDescription")}
        />
        <div className="mt-8">
          <Tabs tabs={projectCategories} value={category} onChange={setCategory} />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.04}>
              <ProjectCard project={p} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t("projectsPage.ctaTitle")}
        description={t("projectsPage.ctaDescription")}
      />
    </>
  );
}
