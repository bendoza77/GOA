import { useTranslation } from "react-i18next";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const sections = t("privacyPage.sections", { returnObjects: true });
  return (
    <>
      <PageHero
        kicker={t("privacyPage.kicker")}
        title={t("privacyPage.title")}
        subtitle={t("privacyPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("privacyPage.breadcrumb") }]}
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
