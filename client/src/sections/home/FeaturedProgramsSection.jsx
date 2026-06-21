import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import IconBadge from "../../components/ui/IconBadge";
import Badge from "../../components/ui/Badge";
import Reveal from "../../components/shared/Reveal";
import { programs } from "../../data/programs";
import { useLocalize } from "../../i18n/localize";

export default function FeaturedProgramsSection() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const featured = localize(programs.filter((p) => p.featured).slice(0, 3));

  return (
    <SectionWrapper id="featured">
      <SectionHeading
        kicker={t("home.featured.kicker")}
        title={t("home.featured.title")}
        description={t("home.featured.description")}
        action={{ label: t("common.compareAll"), to: "/programs" }}
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {featured.map((program, i) => (
          <Reveal key={program.slug} delay={i * 0.06}>
            <Link
              to={`/programs/${program.slug}`}
              className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-primary/25 bg-card-raised p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:glow-soft"
            >
              <div className="flex items-center justify-between">
                <IconBadge name={program.icon} size="lg" />
                <Badge tone="primary">{program.level}</Badge>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {program.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {program.summary}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {program.learn.slice(0, 3).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground-muted"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {t("common.viewProgram")}
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
