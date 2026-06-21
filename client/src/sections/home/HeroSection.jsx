import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";
import Button from "../../components/ui/Button";
import GridBackground from "../../components/shared/GridBackground";
import GlowBackground from "../../components/shared/GlowBackground";
import { outcomeStats } from "../../data/testimonials";
import { useLocalize } from "../../i18n/localize";

export default function HeroSection() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const stats = localize(outcomeStats);
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <GridBackground />
      <GlowBackground />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary"
          >
            <Sparkles size={13} />
            {t("home.hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {t("home.hero.titleLead")}{" "}
            <span className="text-gradient">{t("home.hero.titleHighlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted"
          >
            {t("home.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/apply" size="lg">
              {t("common.applyNow")}
              <ArrowRight size={18} />
            </Button>
            <Button to="/programs" size="lg" variant="secondary">
              {t("common.explorePrograms")}
            </Button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <div className="font-mono text-2xl font-semibold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Terminal visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card shadow-card glow-soft">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-warning/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Terminal size={12} />
                goa@academy: ~/learn
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-foreground">goa init</span>
                {"\n"}
                <span className="text-primary">✔</span>{" "}
                <span className="text-foreground-muted">
                  {t("home.hero.tProgramsAvailable")}
                </span>
                {"\n"}
                <span className="text-primary">✔</span>{" "}
                <span className="text-foreground-muted">
                  {t("home.hero.tMentorFeedback")}
                </span>
                {"\n"}
                <span className="text-primary">✔</span>{" "}
                <span className="text-foreground-muted">
                  {t("home.hero.tRoadmap")}
                </span>
                {"\n\n"}
                <span className="text-muted-foreground">$</span>{" "}
                <span className="text-foreground">goa build --portfolio</span>
                {"\n"}
                <span className="text-secondary">→</span>{" "}
                <span className="text-foreground-muted">
                  {t("home.hero.tShipping")}
                </span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
