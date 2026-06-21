import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { useLocalize } from "../../i18n/localize";
import { cn } from "../../utils/cn";

/** Study-plan / pricing tier card (display-only — CTA routes to Apply). */
export default function PricingCard({ plan: rawPlan, className }) {
  const { t } = useTranslation();
  const localize = useLocalize();
  const plan = localize(rawPlan);
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[var(--radius-lg)] border bg-card p-7 shadow-card",
        plan.featured
          ? "border-primary/40 bg-card-raised glow-soft"
          : "border-border",
        className,
      )}
    >
      {plan.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge tone="primary">{t("common.mostPopular")}</Badge>
        </div>
      )}

      <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
      <p className="mt-1 text-sm text-foreground-muted">{plan.tagline}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-mono text-4xl font-bold text-foreground">
          {plan.price}
        </span>
        {plan.period && (
          <span className="text-sm text-muted-foreground">/{plan.period}</span>
        )}
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground-muted">
            <Check size={16} className="mt-0.5 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>

      <Button
        to="/apply"
        variant={plan.featured ? "primary" : "secondary"}
        className="mt-7 w-full"
      >
        {plan.cta || t("common.getStarted")}
      </Button>
    </div>
  );
}
