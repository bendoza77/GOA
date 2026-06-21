import { useTranslation } from "react-i18next";
import SectionWrapper from "../../components/shared/SectionWrapper";
import SectionHeading from "../../components/shared/SectionHeading";
import FaqList from "../../components/shared/FaqList";
import { getFaqPreview } from "../../data/faq";

export default function FAQPreviewSection() {
  const { t } = useTranslation();
  const items = getFaqPreview(5);
  return (
    <SectionWrapper id="faq" surface>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          kicker={t("home.faq.kicker")}
          title={t("home.faq.title")}
          description={t("home.faq.description")}
          action={{ label: t("common.allFaqs"), to: "/faq" }}
        />
        <FaqList items={items} />
      </div>
    </SectionWrapper>
  );
}
