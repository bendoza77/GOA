import { useTranslation } from "react-i18next";
import { cn } from "../../utils/cn";

/**
 * Horizontal filter tabs. Controlled: parent owns `value` + `onChange`.
 * `tabs` is an array of strings or { label, value }. String tabs are stable
 * English keys (taxonomy / "All"), so labels are translated for display while
 * the underlying value stays English for filtering.
 */
export default function Tabs({ tabs = [], value, onChange, className }) {
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2",
        className,
      )}
    >
      {tabs.map((tab) => {
        const raw = tab.label ?? tab;
        const val = tab.value ?? tab;
        const label = raw === "All" ? t("common.all") : t(`taxonomy.${raw}`, raw);
        const active = val === value;
        return (
          <button
            key={val}
            type="button"
            onClick={() => onChange?.(val)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150",
              active
                ? "border-primary bg-primary/15 text-primary"
                : "border-border-strong text-foreground-muted hover:border-primary/40 hover:text-foreground",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
