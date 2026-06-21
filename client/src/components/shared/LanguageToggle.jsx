import { useLanguage } from "../../context/LanguageContext";
import { cn } from "../../utils/cn";

/** Switches the whole site between English and Georgian. */
export default function LanguageToggle({ className }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("common.language")}
      className={cn(
        "inline-flex items-center rounded-[var(--radius)] border border-border p-0.5 font-mono text-xs",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={cn(
          "rounded-[var(--radius-sm)] px-2 py-1 transition-colors",
          lang === "en"
            ? "bg-primary/15 text-primary"
            : "text-foreground-muted hover:text-foreground",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ka")}
        aria-pressed={lang === "ka"}
        className={cn(
          "rounded-[var(--radius-sm)] px-2 py-1 transition-colors",
          lang === "ka"
            ? "bg-primary/15 text-primary"
            : "text-foreground-muted hover:text-foreground",
        )}
      >
        ქარ
      </button>
    </div>
  );
}
