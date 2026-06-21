import { useTranslation } from "react-i18next";
import {
  Hammer,
  Users,
  Map,
  Target,
  MessagesSquare,
  Layers,
} from "lucide-react";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import Reveal from "../../components/shared/Reveal";

const reasons = [
  { icon: Hammer, key: "project" },
  { icon: Users, key: "mentor" },
  { icon: Map, key: "roadmap" },
  { icon: Target, key: "outcomes" },
  { icon: MessagesSquare, key: "community" },
  { icon: Layers, key: "depth" },
];

export default function WhyGoaSection() {
  const { t } = useTranslation();
  return (
    <SectionWrapper id="why">
      <SectionHeading
        kicker={t("home.why.kicker")}
        title={t("home.why.title")}
        description={t("home.why.description")}
        align="center"
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.key} delay={(i % 3) * 0.05}>
            <div className="group h-full rounded-[var(--radius-lg)] border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/30">
              <span className="grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                <r.icon size={20} strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">
                {t(`home.why.reasons.${r.key}Title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {t(`home.why.reasons.${r.key}Body`)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
