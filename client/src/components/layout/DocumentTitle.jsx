import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { activeLang } from "../../i18n/localize";
import { getProgramBySlug } from "../../data/programs";
import { getBlogPostBySlug } from "../../data/blogPosts";

const SITE_NAME = "Goa-Oriented Academy";

/** Tagline shown on the home tab (no leading page name). */
const HOME_TAGLINE = {
  en: "Learn Real Tech Skills",
  ka: "ისწავლე რეალური ტექნიკური უნარები",
};

/** Static route → bilingual tab title. Dynamic routes are resolved below. */
const STATIC_TITLES = {
  "/about": { en: "About", ka: "ჩვენ შესახებ" },
  "/programs": { en: "Programs", ka: "პროგრამები" },
  "/mentors": { en: "Mentors", ka: "მენტორები" },
  "/projects": { en: "Projects", ka: "პროექტები" },
  "/testimonials": { en: "Success Stories", ka: "წარმატების ისტორიები" },
  "/pricing": { en: "Pricing", ka: "ფასები" },
  "/events": { en: "Events", ka: "ღონისძიებები" },
  "/blog": { en: "Blog", ka: "ბლოგი" },
  "/faq": { en: "FAQ", ka: "ხ.დ.კ." },
  "/contact": { en: "Contact", ka: "კონტაქტი" },
  "/apply": { en: "Apply", ka: "განაცხადი" },
  "/community": { en: "Community", ka: "საზოგადოება" },
  "/careers": { en: "Careers", ka: "კარიერა" },
  "/scholarships": { en: "Scholarships", ka: "სტიპენდიები" },
  "/privacy": { en: "Privacy", ka: "კონფიდენციალურობა" },
  "/terms": { en: "Terms", ka: "პირობები" },
};

const NOT_FOUND = { en: "Page not found", ka: "გვერდი ვერ მოიძებნა" };

/** Read the right-language string from a `{ en, ka }` leaf (or plain string). */
const pick = (leaf, lang) =>
  leaf && typeof leaf === "object" ? leaf[lang] ?? leaf.en : leaf;

/** Resolve the page-name part of the tab title for a given path. */
function pageNameFor(pathname, lang) {
  if (pathname === "/") return null; // home → tagline form

  const programMatch = matchPath("/programs/:slug", pathname);
  if (programMatch) {
    const program = getProgramBySlug(programMatch.params.slug);
    if (program) return pick(program.title, lang);
  }

  const postMatch = matchPath("/blog/:slug", pathname);
  if (postMatch) {
    const post = getBlogPostBySlug(postMatch.params.slug);
    if (post) return pick(post.title, lang);
  }

  const staticTitle = STATIC_TITLES[pathname];
  if (staticTitle) return pick(staticTitle, lang);

  return pick(NOT_FOUND, lang); // unmatched → NotFoundPage renders
}

/**
 * Keeps `document.title` in sync with the active route and language.
 * Renders nothing — drop it once near the app root.
 */
export default function DocumentTitle() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = activeLang(i18n.language);

  useEffect(() => {
    const pageName = pageNameFor(pathname, lang);
    document.title = pageName
      ? `${pageName} — ${SITE_NAME}`
      : `${SITE_NAME} — ${pick(HOME_TAGLINE, lang)}`;
  }, [pathname, lang]);

  return null;
}
