import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import GridBackground from "./GridBackground";
import GlowBackground from "./GlowBackground";
import Reveal from "./Reveal";

/**
 * Pre-built "convert now" band. Ends most pages. Defaults to the Apply CTA.
 * Text props fall back to the translated default copy when not provided.
 */
export default function CTASection({
  kicker,
  title,
  description,
  primary,
  secondary,
}) {
  const { t } = useTranslation();
  kicker = kicker ?? t("cta.kicker");
  title = title ?? t("cta.title");
  description = description ?? t("cta.description");
  primary = primary ?? { label: t("common.applyNow"), to: "/apply" };
  secondary = secondary ?? { label: t("common.explorePrograms"), to: "/programs" };
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <GridBackground />
      <GlowBackground className="opacity-80" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl rounded-[var(--radius-xl)] border border-primary/20 bg-card/60 p-8 text-center backdrop-blur-sm md:p-14">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-primary">
            {"// "}
            {kicker}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primary && (
              <Button to={primary.to} size="lg">
                {primary.label}
              </Button>
            )}
            {secondary && (
              <Button to={secondary.to} size="lg" variant="secondary">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
