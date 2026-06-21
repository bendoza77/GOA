// English UI strings (source of truth). Georgian mirror lives in ka.js.
// Data-driven prose (programs, mentors, posts…) is bilingual in the data
// files and resolved by the deep localizer — it is NOT duplicated here.
const en = {
  common: {
    applyNow: "Apply Now",
    explorePrograms: "Explore Programs",
    viewProgram: "View program",
    viewAllPrograms: "View all programs",
    viewAll: "View all",
    compareAll: "Compare all programs",
    getStarted: "Get started",
    getRecommendation: "Get a recommendation",
    mostPopular: "Most popular",
    featured: "Featured",
    all: "All",
    upcoming: "Upcoming",
    past: "Past",
    by: "By",
    readArticle: "Read article",
    read: "read",
    allFaqs: "All FAQs",
    backHome: "Back to home",
    home: "Home",
    loading: "Loading…",
    search: "Search",
    filter: "Filter",
    submit: "Submit",
    sending: "Sending…",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    lessons: "lessons",
    meetAllMentors: "Meet all mentors",
    becomeMentor: "Become a mentor",
    demoFormNote: "We'll only use your details to get back to you.",
  },

  taxonomy: {
    // Program categories
    Development: "Development",
    Security: "Security",
    Design: "Design",
    Engineering: "Engineering",
    Data: "Data",
    "Computer Science": "Computer Science",
    // Project categories
    "Web App": "Web App",
    "Security Tool": "Security Tool",
    Game: "Game",
    API: "API",
    "Mobile App": "Mobile App",
    Branding: "Branding",
    Robotics: "Robotics",
    // Blog categories
    Guides: "Guides",
    Career: "Career",
    News: "News",
    // Event types
    Hackathon: "Hackathon",
    Workshop: "Workshop",
    Showcase: "Showcase",
    // FAQ categories
    Admissions: "Admissions",
    Programs: "Programs",
    Mentorship: "Mentorship",
    "Pricing & Support": "Pricing & Support",
  },

  footer: {
    tagline:
      "A premium, project-based technology academy. We turn curiosity into real, career-ready skills — one shipped project at a time.",
    rights: "All rights reserved.",
    builtBy: "> built_by_students",
  },

  cta: {
    kicker: "Ready when you are",
    title: "Start building real skills at Goa-Oriented Academy",
    description:
      "Join a community of learners turning curiosity into career-ready ability — one real project at a time.",
  },

  home: {
    hero: {
      badge: "Project-based · Mentor-led · Career-ready",
      titleLead: "Become a real developer at",
      titleHighlight: "Goa-Oriented Academy",
      subtitle:
        "A premium, dark-mode-native tech academy where you learn by building. Master development, security, design and more through structured roadmaps and real mentor feedback.",
      tProgramsAvailable: "9 programs available",
      tMentorFeedback: "mentor feedback: enabled",
      tRoadmap: "roadmap: beginner → job-ready",
      tShipping: "shipping real projects",
    },
    programsOverview: {
      kicker: "What you can learn",
      title: "Nine programs. One serious academy.",
      description:
        "From your first line of code to advanced, job-ready specializations — every program is built around real projects and mentor feedback.",
    },
    why: {
      kicker: "Why Goa-Oriented Academy",
      title: "Built like a product. Taught like a craft.",
      description:
        "The academy is designed around one belief: real skill comes from building real things with real guidance.",
      reasons: {
        projectTitle: "Project-based learning",
        projectBody:
          "You learn by building real things, not by passively watching. Every program ends with a portfolio you're proud of.",
        mentorTitle: "Real mentor culture",
        mentorBody:
          "Working engineers and designers review your work and answer your questions. Feedback is the heart of how we teach.",
        roadmapTitle: "Roadmap-based growth",
        roadmapBody:
          "Structured paths take the guesswork out of learning — clear steps from beginner to advanced, with no tutorial hell.",
        outcomesTitle: "Practical outcomes",
        outcomesBody:
          "Everything is oriented toward skills employers actually want — and the confidence to use them under pressure.",
        communityTitle: "A real community",
        communityBody:
          "Learn alongside motivated peers. Pair up, join events, and stay connected with an active alumni network.",
        depthTitle: "Technical depth",
        depthBody:
          "We go beyond surface-level. You'll understand the fundamentals that make frameworks and tools make sense.",
      },
    },
    journey: {
      kicker: "The learning journey",
      title: "A clear path from beginner to job-ready",
      description:
        "No guesswork, no tutorial hell. Every learner follows a structured roadmap with checkpoints, projects and mentor support.",
    },
    featured: {
      kicker: "Featured tracks",
      title: "Popular paths to get started",
      description:
        "Three of our most-loved programs — chosen by learners who want momentum from week one.",
    },
    mentors: {
      kicker: "Learn from practitioners",
      title: "Mentors who've shipped real work",
      description:
        "Our instructors are working professionals who bring industry experience and honest feedback into every session.",
      action: "Meet all mentors",
    },
    projects: {
      kicker: "Student showcase",
      title: "What students actually build",
      description:
        "Real projects shipped by real learners — the kind of work that fills a portfolio and starts a career.",
      action: "See the showcase",
    },
    testimonials: {
      kicker: "Success stories",
      title: "Outcomes that speak for themselves",
      description:
        "Graduates who turned structured learning into real roles, real projects and real confidence.",
      action: "Read all stories",
    },
    events: {
      kicker: "Always something happening",
      title: "Upcoming workshops & hackathons",
      description:
        "Live sessions, build weekends and competitions that keep the community sharp and connected.",
      action: "View all events",
    },
    faq: {
      kicker: "Questions, answered",
      title: "Everything you need to know before you start",
      description:
        "Can't find what you're looking for? Reach out — we're happy to help you find the right path.",
      action: "All FAQs",
    },
  },

  programsPage: {
    kicker: "Programs & Courses",
    title: "Choose your path into tech",
    subtitle:
      "Nine focused, project-based programs across development, security, design, robotics and computer science. Every track is built to take you from where you are to job-ready.",
    breadcrumb: "Programs",
    searchPlaceholder: "Search programs, e.g. React, security, SQL…",
    noResults: "No programs found",
    noResultsHint: "Try a different search or category.",
    resetFilters: "Reset filters",
    calloutKicker: "not sure where to start?",
    calloutTitle: "Which path fits you?",
    calloutBody:
      "Tell us your goals on the application and a mentor will help you pick the program — and the order — that fits your background.",
  },

  programDetail: {
    breadcrumb: "Programs",
    applyToProgram: "Apply to this program",
    overviewKicker: "Overview",
    overviewTitle: "What this program is about",
    overviewExtra:
      " You'll progress through structured modules, build real projects at every stage, and get regular feedback from mentors who do this work professionally.",
    whatYoullLearn: "What you'll learn",
    technologies: "Technologies & tools",
    curriculumKicker: "Curriculum",
    curriculumTitle: "A structured, module-by-module path",
    curriculumDescription:
      "Each module builds on the last and ends with hands-on work you can show off.",
    outcomesKicker: "Outcomes",
    outcomesTitle: "What you'll walk away with",
    mentorKicker: "Your mentor",
    mentorTitle: "Guidance from someone who's done it",
    faqKicker: "Program FAQ",
    faqTitle: "Common questions about this track",
    relatedKicker: "Keep exploring",
    relatedTitle: "Related programs",
    ctaTitle: "Ready to start {{title}}?",
    ctaDescription:
      "Apply today and a mentor will help you map out your first steps.",
  },

  aboutPage: {
    kicker: "About the academy",
    title: "We exist to turn curiosity into real capability",
    subtitle:
      "Goa-Oriented Academy is a modern, project-based technology school. We blend the discipline of a serious academy with the energy of a developer community — all wrapped in a dark, technical brand we're proud of.",
    breadcrumb: "About",
    storyKicker: "Our story",
    storyTitle: "Built by people who learned the hard way",
    storyParagraphs: [
      "Goa-Oriented Academy started from a simple frustration: too many people wanted to break into tech, but the path was noisy, expensive and full of dead ends. Tutorials taught syntax but not skill. Courses sold certificates but not confidence.",
      "So we built the academy we wished we'd had — one where you learn by shipping real projects, where mentors give honest feedback, and where a clear roadmap replaces endless guesswork.",
      "Today, learners use Goa to grow from their first line of code to their first real role — across development, security, design, robotics and computer science.",
    ],
    missionTitle: "Our mission",
    missionBody:
      "To make serious, practical tech education accessible — and to make sure every graduate leaves with real skills, a real portfolio, and the confidence to use both.",
    visionTitle: "Our vision",
    visionBody:
      "A world where anyone with curiosity and commitment can build a career in technology — guided by mentors, grounded in real work, and free from gatekeeping.",
    methodKicker: "Teaching philosophy",
    methodTitle: "How we teach: roadmap-based, project-first",
    methodDescription:
      "Our methodology rests on three pillars — structured roadmaps, real projects, and mentor feedback — applied across every stage of your growth.",
    valuesKicker: "What we stand for",
    valuesTitle: "Our values",
    teamKicker: "The people",
    teamTitle: "Mentors at the core",
    teamDescription:
      "Our team is made of working professionals who care about teaching.",
    values: [
      { title: "Learning by building", body: "We believe skill is built, not memorized. Everything we teach is anchored in real, hands-on work." },
      { title: "Honesty over hype", body: "No empty guarantees. We tell you what it really takes — and then we help you get there." },
      { title: "Structure with freedom", body: "Clear roadmaps remove the guesswork, while projects leave room for your own creativity." },
      { title: "Always job-relevant", body: "We teach what the industry actually uses, taught by people who use it every day." },
    ],
  },

  mentorsPage: {
    kicker: "Mentors & Instructors",
    title: "Learn from people who do the work",
    subtitle:
      "Every mentor at Goa is a practitioner first — engineers, designers and specialists who bring real, current experience and honest feedback into every session.",
    breadcrumb: "Mentors",
    featuredQuote:
      "The goal isn't to memorize a framework. It's to build the judgment that lets you pick up any framework. That's what real mentorship unlocks — and it's what we do at Goa every day.",
    specializesIn: "Specializes in {{field}}",
    rosterKicker: "The roster",
    rosterTitle: "Meet the mentors",
    rosterDescription:
      "Across every program, you'll learn from specialists who care about teaching as much as building.",
    cultureKicker: "Mentor culture",
    cultureTitle: "Feedback is the product",
    cultureBody1:
      "We don't believe in lectures that end at the screen. Our mentors review your code, critique your designs, and push your thinking — the way a senior colleague would on a great team.",
    cultureBody2:
      "That culture of honest, specific feedback is what turns knowledge into skill — and it's available to every learner, in every program.",
    culturePoints: [
      "Regular project reviews with specific, actionable notes",
      "Honest guidance on what to learn next — and what to skip",
      "Real-world context from people working in the field",
      "A culture of critique that respects your time and goals",
    ],
  },

  projectsPage: {
    kicker: "Student Showcase",
    title: "Real projects, built by real learners",
    subtitle:
      "Every program ends in shipped work. Browse what students have built — from full-stack apps to security tools, games and brand systems.",
    breadcrumb: "Projects",
    featuredLabel: "featured project",
    gridKicker: "The showcase",
    gridTitle: "What students build at Goa",
    gridDescription:
      "Filter by category to see the range of work across our programs.",
    ctaTitle: "Your project could be next",
    ctaDescription:
      "Join the academy and start building work worth showing off.",
  },

  testimonialsPage: {
    kicker: "Success Stories",
    title: "Outcomes worth talking about",
    subtitle:
      "Behind every stat is a person who started unsure and finished capable. These are some of their stories.",
    breadcrumb: "Success Stories",
    moreKicker: "More stories",
    moreTitle: "From learners across every program",
    ctaTitle: "Write your own success story",
    ctaDescription:
      "The next graduate outcome could be yours. Apply and get started.",
  },

  pricingPage: {
    kicker: "Pricing & Study Plans",
    title: "Simple plans for serious learners",
    subtitle:
      "Choose the level of support that fits you. Every plan is project-based and built to make you genuinely capable — not just certified.",
    breadcrumb: "Pricing",
    scholarshipTitle: "Need financial support?",
    scholarshipBody:
      "We're committed to access. Scholarships and flexible options are available for eligible learners.",
    viewScholarships: "View scholarships",
    faqKicker: "Pricing FAQ",
    faqTitle: "Questions about plans & payment",
    plans: [
      {
        name: "Self-Paced",
        tagline: "Learn on your own schedule",
        features: [
          "Access to one program track",
          "Structured roadmap & projects",
          "Community forum access",
          "Project submission portal",
          "Certificate of completion",
        ],
        cta: "Start self-paced",
      },
      {
        name: "Mentored",
        tagline: "The full Goa experience",
        features: [
          "Everything in Self-Paced",
          "1:1 mentor feedback on projects",
          "Live workshops & office hours",
          "Career & interview preparation",
          "Priority support",
        ],
        cta: "Apply for mentored",
      },
      {
        name: "Career Track",
        tagline: "Go all-in, get job-ready",
        features: [
          "Everything in Mentored",
          "Access to multiple programs",
          "Capstone project & portfolio review",
          "Mock interviews with engineers",
          "Alumni network & hiring events",
        ],
        cta: "Apply for career track",
      },
    ],
    faq: [
      { q: "Can I switch plans later?", a: "Yes — you can upgrade or change your plan at any time as your goals evolve." },
      { q: "Is there a free trial?", a: "You can explore program outlines and sample lessons for free before committing to a plan." },
      { q: "Do you offer financial support?", a: "Absolutely. We offer scholarships and flexible options — see the Scholarships page for details." },
      { q: "What's included in mentor feedback?", a: "Regular reviews of your projects with specific, actionable notes, plus access to live office hours." },
    ],
  },

  eventsPage: {
    kicker: "Events & Workshops",
    title: "Build, compete and learn together",
    subtitle:
      "Hackathons, live workshops and demo nights keep the Goa community sharp. Most events are online and open to all levels.",
    breadcrumb: "Events",
    featuredLabel: "Featured",
    reserveSpot: "Reserve your spot",
    upcomingKicker: "Upcoming",
    upcomingTitle: "What's next on the calendar",
    upcomingDescription: "Reserve your spot — most events fill up fast.",
    pastKicker: "Highlights",
    pastTitle: "Past events",
    ctaTitle: "Join the next build weekend",
    ctaDescription:
      "Become part of a community that ships, competes and learns together.",
  },

  blogPage: {
    kicker: "Blog & Resources",
    title: "Guides, news and resources for builders",
    subtitle:
      "Practical writing from our mentors and team — how to learn, what to focus on, and what's new at the academy.",
    breadcrumb: "Blog",
    allKicker: "All articles",
    allTitle: "Latest from the academy",
    newsletterTitle: "Get new resources in your inbox",
    newsletterBody:
      "Occasional, useful emails — guides, events and academy news. No spam.",
    emailPlaceholder: "you@example.com",
    subscribe: "Subscribe",
  },

  blogPost: {
    breadcrumb: "Blog",
    authorRole: "Mentor & writer at Goa-Oriented Academy",
    backToArticles: "Back to all articles",
    relatedReading: "Related reading",
  },

  faqPage: {
    kicker: "FAQ",
    title: "Frequently asked questions",
    subtitle:
      "Everything you need to know about applying, programs, mentorship, pricing and careers. Still stuck? Reach out any time.",
    breadcrumb: "FAQ",
    categories: "Categories",
    ctaTitle: "Still have questions?",
    ctaDescription:
      "Our team is happy to help you find the right program and plan.",
    ctaPrimary: "Contact us",
  },

  contactPage: {
    kicker: "Contact",
    title: "Let's talk",
    subtitle:
      "Questions about a program, your path, or anything else? Send us a message and a real human will get back to you.",
    breadcrumb: "Contact",
    sentTitle: "Message sent!",
    sentBody:
      "Thanks for reaching out. This is a demo form, but in a real build your message would be on its way to our team.",
    sendAnother: "Send another",
    fullName: "Full name",
    email: "Email",
    topic: "What's this about?",
    topicOptions: ["General question", "Programs", "Pricing & scholarships", "Partnerships", "Other"],
    message: "Message",
    messagePlaceholder: "Tell us how we can help…",
    sendMessage: "Send message",
    error: "Sorry, your message couldn't be sent. Please try again in a moment.",
    quickAnswers: "Quick answers",
    onlineNoteLabel: "Online-first · ",
    onlineNoteBody:
      "Goa-Oriented Academy is a fully remote academy. Learn from anywhere, on your schedule, with live mentor support during the week.",
    infoCards: [
      { title: "Email us", value: "hello@goa-academy.dev", hint: "We reply within 1–2 business days." },
      { title: "Community", value: "Join the Discord", hint: "Ask questions and meet other learners." },
      { title: "Office hours", value: "Mon–Fri, 9–18", hint: "Live mentor support during the week." },
    ],
    quickLinks: [
      { label: "How do I apply?", to: "/apply" },
      { label: "What does it cost?", to: "/pricing" },
      { label: "Are there scholarships?", to: "/scholarships" },
      { label: "Browse all FAQs", to: "/faq" },
    ],
  },

  applyPage: {
    kicker: "Apply / Join Now",
    title: "Start your journey at Goa-Oriented Academy",
    subtitle:
      "One short application stands between you and a structured, mentor-led path into tech. Let's find the right program for you.",
    breadcrumb: "Apply",
    expectKicker: "Why apply",
    expectTitle: "What to expect",
    processKicker: "The process",
    processTitle: "How applying works",
    formKicker: "Application",
    formTitle: "Tell us about you",
    sentTitle: "Application received!",
    sentBody:
      "This is a demo, so nothing was actually submitted — but in a real build, a mentor would reach out within a couple of days to talk through your goals.",
    startOver: "Start over",
    fullName: "Full name",
    email: "Email",
    programLabel: "Which program interests you?",
    programPlaceholder: "Not sure yet — help me choose",
    experienceLabel: "Your experience level",
    experienceOptions: ["Complete beginner", "Some self-taught experience", "Intermediate", "Switching careers"],
    motivationLabel: "What do you want to achieve?",
    motivationPlaceholder: "A sentence or two about your goals…",
    submitApplication: "Submit application",
    error: "Sorry, your application couldn't be sent. Please try again in a moment.",
    faqKicker: "Before you apply",
    faqTitle: "Common questions",
    expectations: [
      { title: "No entrance exam", body: "We care about motivation and fit, not gatekeeping. Beginners are genuinely welcome." },
      { title: "A real conversation", body: "You'll talk to a mentor who helps you choose the right program and pace." },
      { title: "A fast start", body: "Once you're in, you start building right away — no months of theory first." },
    ],
    steps: [
      { label: "Step 01", title: "Apply online", description: "Fill out the short application below — it takes about five minutes." },
      { label: "Step 02", title: "Chat with a mentor", description: "We'll reach out to understand your goals and recommend the right path." },
      { label: "Step 03", title: "Get your plan", description: "Receive a personalized roadmap and confirm your start date." },
      { label: "Step 04", title: "Start building", description: "Join your program, meet your cohort, and ship your first project." },
    ],
  },

  communityPage: {
    kicker: "Community",
    title: "You won't learn alone",
    subtitle:
      "Goa is more than programs — it's a network of motivated learners, working mentors and alumni who build, share and grow together.",
    breadcrumb: "Community",
    pillarsKicker: "What you get",
    pillarsTitle: "A community built around building",
    eventsKicker: "Join in",
    eventsTitle: "Upcoming community events",
    allEvents: "All events",
    ctaTitle: "Become part of the community",
    ctaDescription:
      "Apply today and join a network of people who build together.",
    pillars: [
      { title: "Peer learning", body: "Pair up, share progress, and get unstuck faster with people on the same path." },
      { title: "Live events", body: "Workshops, hackathons and demo nights keep the energy high all year round." },
      { title: "Real support", body: "Mentors and peers who actually answer your questions and cheer you on." },
      { title: "Alumni network", body: "Stay connected after you graduate — for jobs, collaboration and growth." },
    ],
  },

  careersPage: {
    kicker: "Careers · Become a Mentor",
    title: "Teach what you love at Goa",
    subtitle:
      "We're always looking for working professionals who care about teaching. Help the next generation of builders grow — and grow yourself along the way.",
    breadcrumb: "Careers",
    whyKicker: "Why teach with Goa",
    whyTitle: "More than a side gig",
    rolesKicker: "Open roles",
    rolesTitle: "Where you could fit",
    rolesDescription:
      "A few of the roles we're actively looking to fill. Don't see yours? We'd still love to hear from you.",
    ctaKicker: "Join the team",
    ctaTitle: "Want to mentor with us?",
    ctaDescription:
      "Tell us about yourself and how you'd like to contribute.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "About the academy",
    reasons: [
      { title: "Make real impact", body: "Help learners change their careers — and see the results in their projects and stories." },
      { title: "Flexible & remote", body: "Mentor on a schedule that works around your professional life. Fully online." },
      { title: "Stay sharp", body: "Teaching is the best way to deepen your own mastery. Our mentors grow too." },
      { title: "Great company", body: "Join a team of practitioners who care about craft, honesty and good teaching." },
    ],
    roles: [
      { title: "Program Mentor — Front-end", summary: "Review projects and run office hours for our front-end learners. Part-time, remote." },
      { title: "Program Mentor — Cybersecurity", summary: "Guide learners through labs and CTF challenges. Strong ethics and lab experience required." },
      { title: "Curriculum Designer", summary: "Help shape roadmaps and project briefs across our programs. Contract or part-time." },
      { title: "Community Lead", summary: "Grow and support our learner community, events and alumni network." },
    ],
  },

  scholarshipsPage: {
    kicker: "Scholarships & Financial Aid",
    title: "Talent shouldn't be limited by budget",
    subtitle:
      "We're committed to widening access to serious tech education. If cost is a barrier, we want to help you find a way in.",
    breadcrumb: "Scholarships",
    optionsKicker: "Support options",
    optionsTitle: "Ways we can help",
    howKicker: "How it works",
    howTitle: "Applying for support",
    faqKicker: "Eligibility",
    faqTitle: "Scholarship questions",
    ctaTitle: "Apply and ask about support",
    ctaDescription:
      "Start your application and let us know you'd like to be considered for a scholarship.",
    options: [
      { title: "Need-based support", body: "Reduced tuition for learners who'd otherwise be unable to join. Based on circumstance, not grades." },
      { title: "Merit scholarships", body: "Awards for exceptional motivation and potential, demonstrated through your application." },
      { title: "Access initiatives", body: "Dedicated spots for underrepresented groups in tech, as part of our commitment to access." },
    ],
    steps: [
      { title: "Apply to a program", description: "Submit your standard application and indicate that you'd like to be considered for support." },
      { title: "Share your context", description: "Tell us a little about your situation and goals — honestly and in your own words." },
      { title: "Get a decision", description: "We review every request individually and respond with available options." },
    ],
    faq: [
      { q: "Who can apply for a scholarship?", a: "Anyone applying to a Goa program can request consideration. We look at motivation, potential and circumstance." },
      { q: "Does requesting support affect my application?", a: "No. Your application is assessed on fit and motivation; financial need is considered separately." },
      { q: "How much support is available?", a: "It varies by program and circumstance, ranging from partial to substantial tuition reductions." },
    ],
  },

  privacyPage: {
    kicker: "Legal",
    title: "Privacy Policy",
    subtitle: "Last updated: June 2026 — placeholder content for demonstration purposes.",
    breadcrumb: "Privacy",
    sections: [
      { title: "1. Overview", body: "This is a placeholder privacy policy for the Goa-Oriented Academy demo website. It exists to illustrate page structure and is not a real legal document." },
      { title: "2. Information we collect", body: "In this demo, no personal data is collected, stored or transmitted. Forms on this site are UI-only and do not submit information anywhere." },
      { title: "3. How information would be used", body: "In a production build, information you provide would be used solely to process applications, respond to enquiries, and improve the learning experience." },
      { title: "4. Cookies & analytics", body: "A production site might use minimal analytics to understand usage. This demo does not set tracking cookies." },
      { title: "5. Your rights", body: "In a real deployment, you would have the right to access, correct or delete your personal data. Contact details would be provided here." },
    ],
  },

  termsPage: {
    kicker: "Legal",
    title: "Terms of Service",
    subtitle: "Last updated: June 2026 — placeholder content for demonstration purposes.",
    breadcrumb: "Terms",
    sections: [
      { title: "1. Acceptance of terms", body: "This is a placeholder terms-of-service page for the Goa-Oriented Academy demo website. It illustrates structure only and is not a binding agreement." },
      { title: "2. Use of the site", body: "This demo site is provided for illustration. You're welcome to explore it, but no real services, enrollment or transactions are offered here." },
      { title: "3. Intellectual property", body: "In a production build, course materials and brand assets would be the property of the academy and protected accordingly." },
      { title: "4. Disclaimers", body: "Content on this demo is fictional. Programs, mentors, testimonials and statistics are illustrative examples, not real offerings." },
      { title: "5. Changes to these terms", body: "A real academy would reserve the right to update its terms and would notify users of material changes." },
    ],
  },

  notFound: {
    route: "route not found: the page you requested doesn't exist",
    title: "This path leads nowhere",
    body: "The link may be broken or the page may have moved. Let's get you back to something useful.",
    backHome: "Back home",
    explorePrograms: "Explore programs",
  },
};

export default en;
