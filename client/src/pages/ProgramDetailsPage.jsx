import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check, Clock, Layers } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import Badge from "../components/ui/Badge";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import IconBadge from "../components/ui/IconBadge";
import Accordion from "../components/ui/Accordion";
import StatBlock from "../components/ui/StatBlock";
import MentorCard from "../components/cards/MentorCard";
import ProgramCard from "../components/cards/ProgramCard";
import FaqList from "../components/shared/FaqList";
import CTASection from "../components/shared/CTASection";
import { getProgramBySlug, programs } from "../data/programs";
import { mentors } from "../data/mentors";
import { getFaqPreview } from "../data/faq";
import { useLocalize } from "../i18n/localize";
import NotFoundPage from "./NotFoundPage";

/** Read the English value of a possibly-bilingual leaf (for stable matching). */
const enText = (v) => (v && typeof v === "object" ? v.en : v);

export default function ProgramDetailsPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const localize = useLocalize();
  const rawProgram = getProgramBySlug(slug);

  if (!rawProgram) return <NotFoundPage />;

  const program = localize(rawProgram);

  const related = programs
    .filter((p) => p.slug !== rawProgram.slug && p.category === rawProgram.category)
    .concat(programs.filter((p) => p.category !== rawProgram.category))
    .slice(0, 3);

  const programMentor =
    mentors.find((m) => enText(m.specialization) === enText(rawProgram.title)) ||
    mentors[0];

  return (
    <>
      <PageHero
        kicker={t(`taxonomy.${rawProgram.category}`, rawProgram.category)}
        title={program.title}
        subtitle={program.description}
        breadcrumb={[
          { label: t("common.home"), to: "/" },
          { label: t("programDetail.breadcrumb"), to: "/programs" },
          { label: program.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="primary">{program.level}</Badge>
          <span className="inline-flex items-center gap-1.5 text-sm text-foreground-muted">
            <Clock size={15} className="text-primary" />
            {program.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-foreground-muted">
            <Layers size={15} className="text-primary" />
            {program.format}
          </span>
          <Button to="/apply" className="ml-1">
            {t("programDetail.applyToProgram")}
          </Button>
        </div>
      </PageHero>

      {/* Overview + what you'll learn */}
      <SectionWrapper>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <SectionHeading kicker={t("programDetail.overviewKicker")} title={t("programDetail.overviewTitle")} />
            <p className="mt-5 text-base leading-relaxed text-foreground-muted">
              {program.description}
              {t("programDetail.overviewExtra")}
            </p>

            <h3 className="mt-10 text-lg font-semibold text-foreground">
              {t("programDetail.whatYoullLearn")}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {program.learn.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 rounded-[var(--radius)] border border-border bg-card p-3.5 text-sm text-foreground-muted"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-semibold text-foreground">
              {t("programDetail.technologies")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {program.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          {/* Sticky-ish summary card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-lg)] border border-primary/20 bg-card p-6 shadow-card">
              <IconBadge name={program.icon} size="lg" />
              <div className="mt-5 flex flex-col gap-4">
                {program.outcomes.map((o) => (
                  <div
                    key={o.label}
                    className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-foreground-muted">
                      {o.label}
                    </span>
                    <span className="font-mono text-sm font-semibold text-primary">
                      {o.value}
                    </span>
                  </div>
                ))}
              </div>
              <Button to="/apply" className="mt-6 w-full">
                {t("common.applyNow")}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {program.prerequisites}
              </p>
            </div>
          </aside>
        </div>
      </SectionWrapper>

      {/* Curriculum */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("programDetail.curriculumKicker")}
          title={t("programDetail.curriculumTitle")}
          description={t("programDetail.curriculumDescription")}
        />
        <div className="mt-10 flex flex-col gap-3">
          {program.modules.map((mod, i) => (
            <Accordion
              key={mod.title}
              defaultOpen={i === 0}
              question={
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {mod.title}
                  <span className="ml-1 text-xs text-muted-foreground">
                    · {mod.lessons} {t("common.lessons")}
                  </span>
                </span>
              }
              answer={mod.summary}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Outcomes */}
      <SectionWrapper>
        <SectionHeading
          kicker={t("programDetail.outcomesKicker")}
          title={t("programDetail.outcomesTitle")}
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 rounded-[var(--radius-lg)] border border-border bg-card p-8 sm:grid-cols-3">
          {program.outcomes.map((o) => (
            <StatBlock key={o.label} value={o.value} label={o.label} className="text-center" />
          ))}
        </div>
      </SectionWrapper>

      {/* Mentor */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("programDetail.mentorKicker")}
          title={t("programDetail.mentorTitle")}
        />
        <div className="mt-10 max-w-md">
          <MentorCard mentor={programMentor} />
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker={t("programDetail.faqKicker")}
            title={t("programDetail.faqTitle")}
            action={{ label: t("common.allFaqs"), to: "/faq" }}
          />
          <FaqList items={getFaqPreview(4)} />
        </div>
      </SectionWrapper>

      {/* Related */}
      <SectionWrapper surface>
        <SectionHeading
          kicker={t("programDetail.relatedKicker")}
          title={t("programDetail.relatedTitle")}
          action={{ label: t("common.viewAll"), to: "/programs" }}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProgramCard key={p.slug} program={p} className="h-full" />
          ))}
        </div>
      </SectionWrapper>

      <CTASection
        title={t("programDetail.ctaTitle", { title: program.title })}
        description={t("programDetail.ctaDescription")}
      />
    </>
  );
}
