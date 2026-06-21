import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle2, FileText, UserCheck, Rocket } from "lucide-react";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import SectionHeading from "../components/shared/SectionHeading";
import RoadmapStepCard from "../components/cards/RoadmapStepCard";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import FaqList from "../components/shared/FaqList";
import { programs } from "../data/programs";
import { getFaqPreview } from "../data/faq";
import { useLocalize } from "../i18n/localize";
import { sendApplication } from "../lib/api";

const expectationIcons = [FileText, UserCheck, Rocket];

export default function ApplyPage() {
  const { t } = useTranslation();
  const localize = useLocalize();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const steps = t("applyPage.steps", { returnObjects: true });
  const expectations = t("applyPage.expectations", { returnObjects: true });
  const experienceOptions = t("applyPage.experienceOptions", { returnObjects: true });
  const programOptions = [
    { label: t("applyPage.programPlaceholder"), value: "" },
    ...localize(programs).map((p) => ({ label: p.title, value: p.title })),
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setFailed(false);
    setSending(true);
    try {
      await sendApplication({
        fullname: data.fullname,
        email: data.email,
        program: data.program,
        experience: data.experience,
        motivation: data.motivation,
        company: data.company, // honeypot
      });
      form.reset();
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <PageHero
        kicker={t("applyPage.kicker")}
        title={t("applyPage.title")}
        subtitle={t("applyPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("applyPage.breadcrumb") }]}
      />

      {/* What to expect */}
      <SectionWrapper>
        <SectionHeading kicker={t("applyPage.expectKicker")} title={t("applyPage.expectTitle")} align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {expectations.map((e, i) => {
            const Icon = expectationIcons[i];
            return (
            <div key={e.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-6 text-center">
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 text-base font-semibold text-foreground">{e.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{e.body}</p>
            </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Steps */}
      <SectionWrapper surface>
        <SectionHeading kicker={t("applyPage.processKicker")} title={t("applyPage.processTitle")} />
        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RoadmapStepCard key={i} step={step} index={i} className="h-full" />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Form */}
      <SectionWrapper>
        <div className="mx-auto max-w-2xl">
          <SectionHeading kicker={t("applyPage.formKicker")} title={t("applyPage.formTitle")} align="center" />
          <div className="mt-10 rounded-[var(--radius-lg)] border border-border bg-card p-7 md:p-8">
            {sent ? (
              <div className="grid place-items-center py-14 text-center">
                <CheckCircle2 size={40} className="text-primary" />
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {t("applyPage.sentTitle")}
                </h2>
                <p className="mt-2 max-w-sm text-sm text-foreground-muted">
                  {t("applyPage.sentBody")}
                </p>
                <Button variant="secondary" className="mt-6" onClick={() => setSent(false)}>
                  {t("applyPage.startOver")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input id="fullname" name="fullname" label={t("applyPage.fullName")} placeholder="Jane Doe" required />
                  <Input id="email" name="email" type="email" label={t("applyPage.email")} placeholder="you@example.com" required />
                </div>
                <Select
                  id="program"
                  name="program"
                  label={t("applyPage.programLabel")}
                  options={programOptions}
                />
                <Select
                  id="experience"
                  name="experience"
                  label={t("applyPage.experienceLabel")}
                  options={experienceOptions}
                />
                <Textarea
                  id="motivation"
                  name="motivation"
                  label={t("applyPage.motivationLabel")}
                  placeholder={t("applyPage.motivationPlaceholder")}
                />
                {/* Honeypot — hidden from real users, catches bots. */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <Button type="submit" size="lg" className="self-start" disabled={sending}>
                  {sending ? t("common.sending") : t("applyPage.submitApplication")}
                </Button>
                {failed && (
                  <p role="alert" className="text-sm text-destructive">
                    {t("applyPage.error")}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t("common.demoFormNote")}
                </p>
              </form>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper surface>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            kicker={t("applyPage.faqKicker")}
            title={t("applyPage.faqTitle")}
            action={{ label: t("common.allFaqs"), to: "/faq" }}
          />
          <FaqList items={getFaqPreview(4)} />
        </div>
      </SectionWrapper>
    </>
  );
}
