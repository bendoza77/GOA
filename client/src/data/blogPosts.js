/**
 * Blog & resources — static mock data.
 * `slug`, `category` (taxonomy) and `author` stay English; prose is bilingual.
 */
export const blogPosts = [
  {
    slug: "how-to-learn-react-in-2026",
    title: {
      en: "How to Learn React in 2026 (Without Burning Out)",
      ka: "როგორ ვისწავლოთ React 2026-ში (გადაწვის გარეშე)",
    },
    category: "Guides",
    author: "Ava Sharma",
    date: "2026-05-20",
    readTime: { en: "8 min", ka: "8 წთ" },
    excerpt: {
      en: "A practical, no-hype roadmap from zero to a confident React developer — what to learn, in what order, and what to skip.",
      ka: "პრაქტიკული, ჰაიპის გარეშე roadmap ნულიდან თავდაჯერებულ React დეველოპერამდე — რა ვისწავლოთ, რა თანმიმდევრობით და რა გამოვტოვოთ.",
    },
    featured: true,
    content: [
      {
        en: "React is still the most in-demand front-end skill in 2026 — but the path to learning it has never been noisier. This guide cuts through that.",
        ka: "React კვლავ ყველაზე მოთხოვნადი ფრონტ-ენდ უნარია 2026-ში — თუმცა მისი სწავლის გზა არასდროს ყოფილა ასე ხმაურიანი. ეს გზამკვლევი ამ ხმაურს ჭრის.",
      },
      {
        en: "Start with the fundamentals. Before touching React, you need a solid grasp of HTML, CSS and modern JavaScript. Most people who 'struggle with React' are actually struggling with JavaScript.",
        ka: "დაიწყე საფუძვლებით. React-ის შეხებამდე გჭირდება HTML-ის, CSS-ისა და თანამედროვე JavaScript-ის მყარი ცოდნა. ადამიანების უმეტესობას, რომელთაც „React უჭირთ“, სინამდვილეში JavaScript უჭირთ.",
      },
      {
        en: "Learn components by building. The fastest way to internalise props, state and composition is to build small, complete projects — a todo app, a weather widget, a markdown previewer.",
        ka: "ისწავლე კომპონენტები აგებით. props-ის, state-ისა და კომპოზიციის ათვისების ყველაზე სწრაფი გზა პატარა, დასრულებული პროექტების აგებაა — todo აპი, ამინდის ვიჯეტი, markdown-ის გადმოსახედი.",
      },
      {
        en: "Don't chase every library. You do not need a state-management library on day one. Learn what React gives you first: useState, useEffect, context. Reach for more only when you feel real pain.",
        ka: "ნუ მისდევ ყველა ბიბლიოთეკას. პირველ დღეს state-მენეჯმენტის ბიბლიოთეკა არ გჭირდება. ჯერ ისწავლე, რას გაძლევს React: useState, useEffect, context. დანარჩენს მიმართე მხოლოდ მაშინ, როცა ნამდვილ სიძნელეს იგრძნობ.",
      },
      {
        en: "Ship in public. Deploy your projects, share them, get feedback. A small shipped project teaches you more than ten half-finished tutorials.",
        ka: "გამოაქვეყნე საჯაროდ. განათავსე შენი პროექტები, გააზიარე, მიიღე უკუკავშირი. ერთი პატარა გაშვებული პროექტი მეტს გასწავლის, ვიდრე ათი ნახევრად დასრულებული გაკვეთილი.",
      },
    ],
  },
  {
    slug: "from-beginner-to-job-ready",
    title: {
      en: "From Beginner to Job-Ready: What Actually Matters",
      ka: "დამწყებიდან სამუშაოსთვის მზამდე: რას აქვს რეალურად მნიშვნელობა",
    },
    category: "Career",
    author: "Marcus Olsen",
    date: "2026-05-08",
    readTime: { en: "10 min", ka: "10 წთ" },
    excerpt: {
      en: "Hiring managers don't care about your certificate count. Here's what they actually look for in junior candidates.",
      ka: "დამსაქმებლებს არ აინტერესებთ შენი სერტიფიკატების რაოდენობა. აი, რას ეძებენ ისინი რეალურად junior კანდიდატებში.",
    },
    featured: false,
    content: [
      {
        en: "After interviewing hundreds of junior developers, the patterns are clear. The candidates who get hired share a few traits — and none of them are about collecting certificates.",
        ka: "ასობით junior დეველოპერთან გასაუბრების შემდეგ პატერნები ნათელია. დასაქმებულ კანდიდატებს რამდენიმე საერთო თვისება აქვთ — და არცერთი მათგანი სერტიფიკატების შეგროვებას არ უკავშირდება.",
      },
      {
        en: "They can explain their projects. Being able to walk through a decision you made and why beats any line on a CV.",
        ka: "მათ შეუძლიათ თავიანთი პროექტების ახსნა. იმის ახსნა, თუ რა გადაწყვეტილება მიიღე და რატომ, CV-ის ნებისმიერ სტრიქონს სჯობს.",
      },
      {
        en: "They understand the fundamentals. Frameworks change; fundamentals don't. Strong basics signal that you can learn whatever the job needs.",
        ka: "მათ ესმით საფუძვლები. ფრეიმვორქები იცვლება; საფუძვლები — არა. ძლიერი ბაზისი იმის ნიშანია, რომ შეგიძლია ისწავლო ის, რაც სამუშაოს სჭირდება.",
      },
      {
        en: "They communicate clearly. Most of the job is communication. Clear writing and calm explanation go a very long way.",
        ka: "ისინი ნათლად ურთიერთობენ. სამუშაოს უმეტესი ნაწილი კომუნიკაციაა. ნათელი წერა და მშვიდი ახსნა ბევრს ნიშნავს.",
      },
    ],
  },
  {
    slug: "why-project-based-learning-wins",
    title: {
      en: "Why Project-Based Learning Beats Passive Tutorials",
      ka: "რატომ სჯობს პროექტებზე დაფუძნებული სწავლა პასიურ გაკვეთილებს",
    },
    category: "Guides",
    author: "Sofia Marino",
    date: "2026-04-25",
    readTime: { en: "6 min", ka: "6 წთ" },
    excerpt: {
      en: "Watching tutorials feels productive. Building things makes you productive. The difference matters more than you think.",
      ka: "გაკვეთილების ყურება პროდუქტიულობის შეგრძნებას ქმნის. რაღაცის აგება კი ნამდვილად პროდუქტიულს გხდის. ეს განსხვავება უფრო მნიშვნელოვანია, ვიდრე გგონია.",
    },
    featured: false,
    content: [
      {
        en: "There's a trap every learner falls into: tutorial hell. You watch, you nod, you feel like you're learning — but you can't build anything on your own.",
        ka: "არსებობს მახე, რომელშიც ყველა მსწავლელი ვარდება: „tutorial hell“. უყურებ, თანხმობით თავს აქნევ, გრძნობ, რომ სწავლობ — მაგრამ დამოუკიდებლად ვერაფერს აგებ.",
      },
      {
        en: "Projects force real decisions. When you build, you hit problems no tutorial covered. Solving those is where the actual learning happens.",
        ka: "პროექტები ნამდვილ გადაწყვეტილებებს გაიძულებს. როცა აგებ, აწყდები პრობლემებს, რომელთაც არცერთი გაკვეთილი არ ფარავდა. სწორედ მათი გადაჭრისას ხდება ნამდვილი სწავლა.",
      },
      {
        en: "At Goa, every program is built around shipping real projects with mentor feedback — because that's what turns knowledge into skill.",
        ka: "Goa-ში ყველა პროგრამა ნამდვილი პროექტების გაშვებასა და მენტორის უკუკავშირზეა აგებული — რადგან სწორედ ეს აქცევს ცოდნას უნარად.",
      },
    ],
  },
  {
    slug: "academy-news-spring-2026",
    title: {
      en: "Academy News: New Tracks & Spring Demo Day Recap",
      ka: "აკადემიის სიახლეები: ახალი მიმართულებები და საგაზაფხულო Demo Day-ის მიმოხილვა",
    },
    category: "News",
    author: "Goa Team",
    date: "2026-06-02",
    readTime: { en: "4 min", ka: "4 წთ" },
    excerpt: {
      en: "A look back at an incredible Demo Day, plus a preview of what's coming to the academy this season.",
      ka: "მოგონებები წარმოუდგენელ Demo Day-ზე, პლუს მიმოხილვა იმისა, რაც აკადემიას ამ სეზონზე ელის.",
    },
    featured: false,
    content: [
      {
        en: "Spring Demo Day 2026 was our biggest yet. Graduating students presented capstone projects to mentors, alumni and hiring partners.",
        ka: "საგაზაფხულო Demo Day 2026 ჩვენი ყველაზე მასშტაბური აღმოჩნდა. კურსდამთავრებულებმა ფინალური პროექტები წარუდგინეს მენტორებს, კურსდამთავრებულებსა და დამსაქმებელ პარტნიორებს.",
      },
      {
        en: "We're also expanding our Robotics and Algorithms tracks with new hands-on modules and more mentor hours.",
        ka: "ასევე ვაფართოებთ რობოტიკისა და ალგორითმების მიმართულებებს ახალი პრაქტიკული მოდულებითა და მენტორთან მეტი საათით.",
      },
      {
        en: "Thank you to everyone in the Goa community who makes this possible. The best is still ahead.",
        ka: "მადლობა Goa-ს საზოგადოების ყველა წევრს, ვინც ამას შესაძლებელს ხდის. საუკეთესო ჯერ კიდევ წინაა.",
      },
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((p) => p.category))),
];

export const getBlogPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
