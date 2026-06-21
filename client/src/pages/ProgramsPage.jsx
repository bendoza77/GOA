import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, Compass } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import ProgramCard from "../components/cards/ProgramCard";
import Tabs from "../components/ui/Tabs";
import Button from "../components/ui/Button";
import Reveal from "../components/shared/Reveal";
import CTASection from "../components/shared/CTASection";
import { programs, programCategories } from "../data/programs";
import { localize as localizeData, activeLang } from "../i18n/localize";

export default function ProgramsPage() {
  const { t, i18n } = useTranslation();
  const lang = activeLang(i18n.language);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return localizeData(programs, lang).filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category, lang]);

  return (
    <>
      <PageHero
        kicker={t("programsPage.kicker")}
        title={t("programsPage.title")}
        subtitle={t("programsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("programsPage.breadcrumb") }]}
      />

      <SectionWrapper>
        {/* Search + filters */}
        <div className="flex flex-col gap-5">
          <div className="relative max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("programsPage.searchPlaceholder")}
              className="h-11 w-full rounded-[var(--radius)] border border-border bg-input pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/60 focus:outline-2 focus:outline-ring"
            />
          </div>
          <Tabs tabs={programCategories} value={category} onChange={setCategory} />
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((program, i) => (
              <Reveal key={program.slug} delay={(i % 3) * 0.04}>
                <ProgramCard program={program} className="h-full" />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid place-items-center rounded-[var(--radius-lg)] border border-dashed border-border bg-card/50 py-16 text-center">
            <Compass size={28} className="text-muted-foreground" />
            <p className="mt-4 font-medium text-foreground">{t("programsPage.noResults")}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {t("programsPage.noResultsHint")}
            </p>
            <Button
              variant="secondary"
              size="sm"
              className="mt-5"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              {t("programsPage.resetFilters")}
            </Button>
          </div>
        )}

        {/* Which path fits you? */}
        <div className="mt-16 overflow-hidden rounded-[var(--radius-xl)] border border-primary/20 bg-card p-8 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
                {"// "}
                {t("programsPage.calloutKicker")}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                {t("programsPage.calloutTitle")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {t("programsPage.calloutBody")}
              </p>
            </div>
            <Button to="/apply" size="lg">
              {t("common.getRecommendation")}
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
