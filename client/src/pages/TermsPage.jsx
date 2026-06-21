import { useTranslation } from "react-i18next";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";

export default function TermsPage() {
  const { t } = useTranslation();
  const sections = t("termsPage.sections", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("termsPage.kicker")}
        title={t("termsPage.title")}
        subtitle={t("termsPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("termsPage.breadcrumb") }]}
      />
      <SectionWrapper innerClassName="max-w-3xl">
        <div className="flex flex-col gap-8">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-semibold text-foreground">{s.title}</h2>
              <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
