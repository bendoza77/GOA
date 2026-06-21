import { useTranslation } from "react-i18next";

/** True for a `{ en, ka }` bilingual leaf. */
function isBilingual(v) {
  return (
    v &&
    typeof v === "object" &&
    !Array.isArray(v) &&
    "en" in v &&
    "ka" in v
  );
}

/**
 * Recursively walks any data structure and replaces every `{ en, ka }`
 * leaf with the string for `lang` (falling back to English). Plain
 * strings, numbers and non-bilingual objects pass through untouched —
 * so stable keys (slug, icon, category) keep their English value for
 * routing and filtering logic.
 */
export function localize(node, lang) {
  if (Array.isArray(node)) return node.map((n) => localize(n, lang));
  if (isBilingual(node)) return node[lang] ?? node.en;
  if (node && typeof node === "object") {
    const out = {};
    for (const key in node) out[key] = localize(node[key], lang);
    return out;
  }
  return node;
}

/** Normalises i18next's language code to one of our two locales. */
export function activeLang(i18nLanguage) {
  return i18nLanguage && i18nLanguage.startsWith("ka") ? "ka" : "en";
}

/**
 * Returns a memo-free localizer bound to the current language. Components
 * that call this re-render on language change (via useTranslation), so the
 * data they derive is always in sync with the active locale.
 */
export function useLocalize() {
  const { i18n } = useTranslation();
  const lang = activeLang(i18n.language);
  return (data) => localize(data, lang);
}
