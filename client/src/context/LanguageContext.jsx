import { createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { activeLang } from "../i18n/localize";

const LanguageContext = createContext(null);

/**
 * Wraps i18next behind a small, app-shaped API so components don't each
 * reach into `i18n.changeLanguage` / language-code parsing. `lang` is always
 * normalised to one of our two locales ("en" | "ka").
 */
export function LanguageProvider({ children }) {
  const { i18n, t } = useTranslation();
  const lang = activeLang(i18n.language);

  const setLang = (next) => {
    if (next !== lang) i18n.changeLanguage(next);
  };

  const toggle = () => setLang(lang === "en" ? "ka" : "en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Consume the language context. Throws if used outside <LanguageProvider>. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
