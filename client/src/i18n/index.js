import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import ka from "./ka";

const STORAGE_KEY = "goa-lang";
const saved =
  typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ka: { translation: ka },
  },
  lng: saved === "ka" || saved === "en" ? saved : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

// Persist the choice and keep <html lang> accurate for a11y / SEO.
i18n.on("languageChanged", (lng) => {
  const lang = lng && lng.startsWith("ka") ? "ka" : "en";
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language?.startsWith("ka")
    ? "ka"
    : "en";
}

export default i18n;
