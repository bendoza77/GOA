import { programs } from "./programs";

/**
 * Navigation & footer data. Human-readable labels are bilingual `{ en, ka }`
 * leaves resolved by the deep localizer in the consuming components; `to`
 * paths and `icon`/`href` values stay stable.
 */

/** Georgian display labels for program categories (used in the mega-menu). */
const categoryLabel = {
  Development: { en: "Development", ka: "დეველოპმენტი" },
  Security: { en: "Security", ka: "უსაფრთხოება" },
  Design: { en: "Design", ka: "დიზაინი" },
  Engineering: { en: "Engineering", ka: "ინჟინერია" },
  Data: { en: "Data", ka: "მონაცემები" },
  "Computer Science": { en: "Computer Science", ka: "კომპიუტერული მეცნიერება" },
};

/** Primary desktop / mobile navigation. */
export const navLinks = [
  {
    label: { en: "Programs", ka: "პროგრამები" },
    type: "menu",
    to: "/programs",
    children: programs.map((p) => ({
      label: p.title,
      to: `/programs/${p.slug}`,
      icon: p.icon,
      summary: categoryLabel[p.category] ?? p.category,
    })),
    viewAll: { label: { en: "View all programs", ka: "ყველა პროგრამის ნახვა" }, to: "/programs" },
  },
  { label: { en: "Mentors", ka: "მენტორები" }, to: "/mentors" },
  { label: { en: "Projects", ka: "პროექტები" }, to: "/projects" },
  { label: { en: "Success Stories", ka: "წარმატების ისტორიები" }, to: "/testimonials" },
  { label: { en: "Pricing", ka: "ფასები" }, to: "/pricing" },
  {
    label: { en: "Resources", ka: "რესურსები" },
    type: "menu",
    to: "/blog",
    children: [
      { label: { en: "Blog", ka: "ბლოგი" }, to: "/blog", summary: { en: "Articles & guides", ka: "სტატიები და გზამკვლევები" } },
      { label: { en: "Events", ka: "ღონისძიებები" }, to: "/events", summary: { en: "Workshops & hackathons", ka: "ვორქშოპები და ჰაკათონები" } },
      { label: { en: "FAQ", ka: "ხ.დ.კ." }, to: "/faq", summary: { en: "Common questions", ka: "ხშირად დასმული კითხვები" } },
      { label: { en: "Community", ka: "საზოგადოება" }, to: "/community", summary: { en: "Join the network", ka: "შემოუერთდი ქსელს" } },
    ],
  },
];

export const navCta = { label: { en: "Apply Now", ka: "განაცხადის გაკეთება" }, to: "/apply" };

/** Footer link groups. */
export const footerGroups = [
  {
    title: { en: "Programs", ka: "პროგრამები" },
    links: [
      { label: { en: "Front-end", ka: "ფრონტ-ენდი" }, to: "/programs/front-end-development" },
      { label: { en: "Back-end", ka: "ბექ-ენდი" }, to: "/programs/back-end-development" },
      { label: { en: "Mobile", ka: "მობაილი" }, to: "/programs/mobile-development" },
      { label: { en: "Cybersecurity", ka: "კიბერუსაფრთხოება" }, to: "/programs/cybersecurity" },
      { label: { en: "View all →", ka: "ყველას ნახვა →" }, to: "/programs" },
    ],
  },
  {
    title: { en: "Academy", ka: "აკადემია" },
    links: [
      { label: { en: "About", ka: "ჩვენ შესახებ" }, to: "/about" },
      { label: { en: "Mentors", ka: "მენტორები" }, to: "/mentors" },
      { label: { en: "Projects", ka: "პროექტები" }, to: "/projects" },
      { label: { en: "Success Stories", ka: "წარმატების ისტორიები" }, to: "/testimonials" },
      { label: { en: "Pricing", ka: "ფასები" }, to: "/pricing" },
    ],
  },
  {
    title: { en: "Resources", ka: "რესურსები" },
    links: [
      { label: { en: "Blog", ka: "ბლოგი" }, to: "/blog" },
      { label: { en: "Events", ka: "ღონისძიებები" }, to: "/events" },
      { label: { en: "FAQ", ka: "ხ.დ.კ." }, to: "/faq" },
      { label: { en: "Community", ka: "საზოგადოება" }, to: "/community" },
    ],
  },
  {
    title: { en: "Join", ka: "შემოგვიერთდი" },
    links: [
      { label: { en: "Apply", ka: "განაცხადი" }, to: "/apply" },
      { label: { en: "Scholarships", ka: "სტიპენდიები" }, to: "/scholarships" },
      { label: { en: "Careers", ka: "კარიერა" }, to: "/careers" },
      { label: { en: "Contact", ka: "კონტაქტი" }, to: "/contact" },
    ],
  },
];

export const legalLinks = [
  { label: { en: "Privacy", ka: "კონფიდენციალურობა" }, to: "/privacy" },
  { label: { en: "Terms", ka: "პირობები" }, to: "/terms" },
];

export const socialLinks = [
  { label: "GitHub", icon: "Github", href: "#" },
  { label: "X", icon: "Twitter", href: "#" },
  { label: "LinkedIn", icon: "Linkedin", href: "#" },
  { label: "YouTube", icon: "Youtube", href: "#" },
];
