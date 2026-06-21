/**
 * Student project showcase — static mock data.
 * `category` and `tags` stay English (filtering + taxonomy); prose is bilingual.
 */
export const projects = [
  {
    id: "p1",
    title: { en: "DevConnect — Developer Social App", ka: "DevConnect — დეველოპერების სოციალური აპი" },
    student: "Liam Cruz",
    program: { en: "Front-end Development", ka: "ფრონტ-ენდ დეველოპმენტი" },
    category: "Web App",
    tags: ["React", "Tailwind", "REST"],
    featured: true,
    description: {
      en: "A full social feed for developers — profiles, theming, infinite scroll and a polished component system.",
      ka: "სრულფასოვანი სოციალური ფიდი დეველოპერებისთვის — პროფილები, თემები, უსასრულო სქროლი და გაპრიალებული კომპონენტების სისტემა.",
    },
  },
  {
    id: "p2",
    title: { en: "VaultKeeper — Password Manager", ka: "VaultKeeper — პაროლების მენეჯერი" },
    student: "Mei Lin",
    program: { en: "Cybersecurity", ka: "კიბერუსაფრთხოება" },
    category: "Security Tool",
    tags: ["Encryption", "Node.js", "CLI"],
    featured: false,
    description: {
      en: "A local-first password manager built around strong encryption and a clean threat model.",
      ka: "ლოკალურ-პრიორიტეტული პაროლების მენეჯერი, აგებული ძლიერ დაშიფვრასა და სუფთა საფრთხის მოდელზე.",
    },
  },
  {
    id: "p3",
    title: { en: "Orbit — 2D Space Roguelike", ka: "Orbit — 2D კოსმოსური Roguelike" },
    student: "Hassan Ali",
    program: { en: "Game Development", ka: "თამაშების შემუშავება" },
    category: "Game",
    tags: ["Unity", "Physics", "Procedural"],
    featured: false,
    description: {
      en: "A fast, juicy roguelike with procedurally generated levels and tight physics-based controls.",
      ka: "სწრაფი, დახვეწილი roguelike პროცედურულად გენერირებული დონეებითა და ზუსტი ფიზიკაზე დაფუძნებული მართვით.",
    },
  },
  {
    id: "p4",
    title: { en: "FreshCart — Grocery API", ka: "FreshCart — სასურსათო API" },
    student: "Elena Popa",
    program: { en: "Back-end Development", ka: "ბექ-ენდ დეველოპმენტი" },
    category: "API",
    tags: ["Node.js", "PostgreSQL", "Auth"],
    featured: false,
    description: {
      en: "A production-style REST API with auth, carts, inventory and a fully documented schema.",
      ka: "საწარმოო სტილის REST API ავთენტიფიკაციით, კალათებით, ინვენტარითა და სრულად დოკუმენტირებული სქემით.",
    },
  },
  {
    id: "p5",
    title: { en: "TrailMate — Hiking Companion", ka: "TrailMate — ლაშქრობის თანამგზავრი" },
    student: "Noah Berg",
    program: { en: "Mobile Development", ka: "მობაილ დეველოპმენტი" },
    category: "Mobile App",
    tags: ["React Native", "Maps", "Offline"],
    featured: false,
    description: {
      en: "An offline-first hiking app with GPS tracking, route saving and a clean native-feeling UI.",
      ka: "ოფლაინ-პრიორიტეტული ლაშქრობის აპი GPS თვალთვალით, მარშრუტების შენახვითა და სუფთა, ნატიური შეგრძნების UI-ით.",
    },
  },
  {
    id: "p6",
    title: { en: "Lumen — Brand Identity System", ka: "Lumen — ბრენდის იდენტობის სისტემა" },
    student: "Zara Khan",
    program: { en: "Graphic Design", ka: "გრაფიკული დიზაინი" },
    category: "Branding",
    tags: ["Branding", "Typography", "Figma"],
    featured: false,
    description: {
      en: "A complete brand system — logo, type scale, color and guidelines — for a fictional energy startup.",
      ka: "სრული ბრენდის სისტემა — ლოგო, შრიფტის მასშტაბი, ფერი და გაიდლაინები — გამოგონილი ენერგეტიკული სტარტაპისთვის.",
    },
  },
  {
    id: "p7",
    title: { en: "PathFinder — Maze Solving Bot", ka: "PathFinder — ლაბირინთის ამომხსნელი ბოტი" },
    student: "Omar Farouk",
    program: { en: "Robotics", ka: "რობოტიკა" },
    category: "Robotics",
    tags: ["Embedded", "Sensors", "C++"],
    featured: false,
    description: {
      en: "An autonomous robot that maps and solves physical mazes using sensor fusion and control loops.",
      ka: "ავტონომიური რობოტი, რომელიც სენსორების შერწყმითა და მართვის ციკლებით აგებს და ხსნის ფიზიკურ ლაბირინთებს.",
    },
  },
  {
    id: "p8",
    title: { en: "QueryLab — SQL Learning Playground", ka: "QueryLab — SQL სასწავლო სათამაშო მოედანი" },
    student: "Ines Costa",
    program: { en: "SQL & Databases", ka: "SQL და მონაცემთა ბაზები" },
    category: "Web App",
    tags: ["SQL", "React", "Education"],
    featured: false,
    description: {
      en: "An interactive playground for practising SQL against real datasets with instant feedback.",
      ka: "ინტერაქტიული მოედანი SQL-ის სავარჯიშოდ ნამდვილ მონაცემთა ნაკრებებზე მყისიერი უკუკავშირით.",
    },
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export const getFeaturedProjects = (count = 3) =>
  projects.filter((p) => p.featured).concat(projects.filter((p) => !p.featured)).slice(0, count);
