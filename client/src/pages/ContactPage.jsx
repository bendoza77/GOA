import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MessageSquare, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import SectionWrapper from "../components/shared/SectionWrapper";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import { sendContactMessage } from "../lib/api";

const infoIcons = [Mail, MessageSquare, Clock];

export default function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const infoCards = t("contactPage.infoCards", { returnObjects: true });
  const quickLinks = t("contactPage.quickLinks", { returnObjects: true });
  const topicOptions = t("contactPage.topicOptions", { returnObjects: true });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setFailed(false);
    setSending(true);
    try {
      await sendContactMessage({
        name: data.name,
        email: data.email,
        topic: data.topic,
        message: data.message,
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
        kicker={t("contactPage.kicker")}
        title={t("contactPage.title")}
        subtitle={t("contactPage.subtitle")}
        breadcrumb={[{ label: t("common.home"), to: "/" }, { label: t("contactPage.breadcrumb") }]}
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <div className="rounded-[var(--radius-lg)] border border-border bg-card p-7 md:p-8">
            {sent ? (
              <div className="grid place-items-center py-14 text-center">
                <CheckCircle2 size={40} className="text-primary" />
                <h2 className="mt-4 text-xl font-semibold text-foreground">
                  {t("contactPage.sentTitle")}
                </h2>
                <p className="mt-2 max-w-sm text-sm text-foreground-muted">
                  {t("contactPage.sentBody")}
                </p>
                <Button variant="secondary" className="mt-6" onClick={() => setSent(false)}>
                  {t("contactPage.sendAnother")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Input id="name" name="name" label={t("contactPage.fullName")} placeholder="Jane Doe" required />
                  <Input id="email" name="email" type="email" label={t("contactPage.email")} placeholder="you@example.com" required />
                </div>
                <Select
                  id="topic"
                  name="topic"
                  label={t("contactPage.topic")}
                  options={topicOptions}
                />
                <Textarea id="message" name="message" label={t("contactPage.message")} placeholder={t("contactPage.messagePlaceholder")} required />
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
                  {sending ? t("common.sending") : t("contactPage.sendMessage")}
                </Button>
                {failed && (
                  <p role="alert" className="text-sm text-destructive">
                    {t("contactPage.error")}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {t("common.demoFormNote")}
                </p>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            {infoCards.map((c, i) => {
              const Icon = infoIcons[i];
              return (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius)] border border-primary/25 bg-primary/10 text-primary">
                  <Icon size={20} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{c.title}</div>
                  <div className="text-sm text-primary">{c.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.hint}</div>
                </div>
              </div>
              );
            })}

            {/* Quick links */}
            <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                {t("contactPage.quickAnswers")}
              </h3>
              <ul className="mt-3 flex flex-col gap-1">
                {quickLinks.map((q) => (
                  <li key={q.label}>
                    <Link
                      to={q.to}
                      className="group flex items-center justify-between rounded-[var(--radius)] px-2 py-2 text-sm text-foreground-muted transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {q.label}
                      <ArrowRight size={14} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Online learning note */}
        <div className="mt-12 rounded-[var(--radius-lg)] border border-secondary/20 bg-card p-7 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground-muted">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary">
              {t("contactPage.onlineNoteLabel")}
            </span>
            {t("contactPage.onlineNoteBody")}
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
