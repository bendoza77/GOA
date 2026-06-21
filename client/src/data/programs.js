/**
 * Program catalog — static mock data.
 * `icon` values map to lucide-react icon names (resolved in components).
 *
 * Human-readable prose is bilingual: each `{ en, ka }` leaf is resolved to the
 * active language by the deep localizer (see i18n/localize.js). Stable keys —
 * `slug`, `icon`, `category`, `tags` — stay English because routing, filtering
 * and the taxonomy dictionary depend on them.
 */
export const programs = [
  {
    slug: "front-end-development",
    title: { en: "Front-end Development", ka: "ფრონტ-ენდ დეველოპმენტი" },
    icon: "Code2",
    category: "Development",
    level: { en: "Beginner → Advanced", ka: "დამწყები → მოწინავე" },
    duration: { en: "16 weeks", ka: "16 კვირა" },
    format: { en: "Project-based", ka: "პროექტებზე დაფუძნებული" },
    featured: true,
    summary: {
      en: "Build modern, accessible, high-performance interfaces with HTML, CSS, JavaScript and React.",
      ka: "ააგე თანამედროვე, ხელმისაწვდომი და მაღალწარმადობიანი ინტერფეისები HTML-ით, CSS-ით, JavaScript-ითა და React-ით.",
    },
    description: {
      en: "Go from your first HTML tag to shipping production-grade React applications. You'll master semantic markup, responsive layout, modern JavaScript, component architecture and state management — building a real portfolio along the way.",
      ka: "პირველი HTML ტეგიდან საწარმოო დონის React აპლიკაციების გაშვებამდე. დაეუფლები სემანტიკურ მარკაპს, რესპონსიულ განლაგებას, თანამედროვე JavaScript-ს, კომპონენტების არქიტექტურასა და მდგომარეობის მართვას — და გზადაგზა ნამდვილ პორტფოლიოს ააწყობ.",
    },
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Vite"],
    learn: [
      { en: "Semantic, accessible HTML & responsive CSS", ka: "სემანტიკური, ხელმისაწვდომი HTML და რესპონსიული CSS" },
      { en: "Modern JavaScript (ES2023+) and the DOM", ka: "თანამედროვე JavaScript (ES2023+) და DOM" },
      { en: "Component-driven UIs with React", ka: "კომპონენტებზე დაფუძნებული UI React-ით" },
      { en: "State management and data fetching patterns", ka: "მდგომარეობის მართვა და მონაცემთა მიღების პატერნები" },
      { en: "Performance, accessibility and testing fundamentals", ka: "წარმადობის, ხელმისაწვდომობისა და ტესტირების საფუძვლები" },
      { en: "Deploying real apps to the web", ka: "ნამდვილი აპლიკაციების ვებზე განთავსება" },
    ],
    modules: [
      { title: { en: "Web Foundations", ka: "ვების საფუძვლები" }, lessons: 8, summary: { en: "HTML, CSS, the box model, flex & grid.", ka: "HTML, CSS, box model, flex და grid." } },
      { title: { en: "JavaScript Deep Dive", ka: "JavaScript სიღრმისეულად" }, lessons: 12, summary: { en: "Types, async, modules, the DOM.", ka: "ტიპები, async, მოდულები, DOM." } },
      { title: { en: "React & Components", ka: "React და კომპონენტები" }, lessons: 10, summary: { en: "JSX, props, hooks, composition.", ka: "JSX, props, hooks, კომპოზიცია." } },
      { title: { en: "State & Data", ka: "მდგომარეობა და მონაცემები" }, lessons: 8, summary: { en: "Context, reducers, fetching, caching.", ka: "Context, reducers, fetching, caching." } },
      { title: { en: "Ship It", ka: "გაუშვი" }, lessons: 6, summary: { en: "Routing, performance, deploy.", ka: "Routing, წარმადობა, deploy." } },
    ],
    outcomes: [
      { label: { en: "Projects shipped", ka: "გაშვებული პროექტები" }, value: "6+" },
      { label: { en: "Avg. completion", ka: "საშ. დასრულება" }, value: { en: "16 wks", ka: "16 კვ." } },
      { label: { en: "Job-ready portfolio", ka: "სამუშაოსთვის მზა პორტფოლიო" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "None — beginner friendly. A laptop and curiosity are enough.",
      ka: "არცერთი — დამწყებთათვის. საკმარისია ლეპტოპი და ცნობისმოყვარეობა.",
    },
  },
  {
    slug: "back-end-development",
    title: { en: "Back-end Development", ka: "ბექ-ენდ დეველოპმენტი" },
    icon: "Server",
    category: "Development",
    level: { en: "Intermediate", ka: "საშუალო დონე" },
    duration: { en: "18 weeks", ka: "18 კვირა" },
    format: { en: "Project-based", ka: "პროექტებზე დაფუძნებული" },
    featured: true,
    summary: {
      en: "Design APIs, model data and build reliable server-side systems with Node.js and databases.",
      ka: "დააპროექტე API-ები, დაამოდელირე მონაცემები და ააგე საიმედო სერვერული სისტემები Node.js-ითა და მონაცემთა ბაზებით.",
    },
    description: {
      en: "Learn to architect and build the systems that power modern apps — REST APIs, authentication patterns, data modelling, and scalable service design with Node.js.",
      ka: "ისწავლე იმ სისტემების დაპროექტება და აგება, რომლებიც თანამედროვე აპლიკაციებს ამუშავებს — REST API-ები, ავთენტიფიკაციის პატერნები, მონაცემთა მოდელირება და მასშტაბირებადი სერვისების დიზაინი Node.js-ით.",
    },
    tags: ["Node.js", "Express", "REST", "PostgreSQL", "Auth", "Docker"],
    learn: [
      { en: "HTTP, REST and API design", ka: "HTTP, REST და API-ის დიზაინი" },
      { en: "Server-side JavaScript with Node & Express", ka: "სერვერული JavaScript Node-ითა და Express-ით" },
      { en: "Relational data modelling", ka: "რელაციური მონაცემების მოდელირება" },
      { en: "Authentication & authorization patterns", ka: "ავთენტიფიკაციისა და ავტორიზაციის პატერნები" },
      { en: "Caching, queues and background jobs", ka: "ქეშირება, რიგები და ფონური დავალებები" },
      { en: "Containerization basics with Docker", ka: "კონტეინერიზაციის საფუძვლები Docker-ით" },
    ],
    modules: [
      { title: { en: "Servers & HTTP", ka: "სერვერები და HTTP" }, lessons: 7, summary: { en: "Requests, responses, routing.", ka: "მოთხოვნები, პასუხები, routing." } },
      { title: { en: "APIs with Express", ka: "API-ები Express-ით" }, lessons: 10, summary: { en: "REST, middleware, validation.", ka: "REST, middleware, ვალიდაცია." } },
      { title: { en: "Data Layer", ka: "მონაცემთა ფენა" }, lessons: 9, summary: { en: "SQL, schemas, relations, migrations.", ka: "SQL, სქემები, კავშირები, მიგრაციები." } },
      { title: { en: "Auth & Security", ka: "ავთენტიფიკაცია და უსაფრთხოება" }, lessons: 8, summary: { en: "Sessions, tokens, hashing, OWASP.", ka: "სესიები, ტოკენები, ჰეშირება, OWASP." } },
      { title: { en: "Scale & Deploy", ka: "მასშტაბირება და გაშვება" }, lessons: 6, summary: { en: "Caching, queues, containers.", ka: "ქეშირება, რიგები, კონტეინერები." } },
    ],
    outcomes: [
      { label: { en: "APIs built", ka: "აგებული API-ები" }, value: "5+" },
      { label: { en: "Avg. completion", ka: "საშ. დასრულება" }, value: { en: "18 wks", ka: "18 კვ." } },
      { label: { en: "Production patterns", ka: "საწარმოო პატერნები" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "Comfortable with JavaScript fundamentals.",
      ka: "JavaScript-ის საფუძვლების თავისუფლად ცოდნა.",
    },
  },
  {
    slug: "mobile-development",
    title: { en: "Mobile Development", ka: "მობაილ დეველოპმენტი" },
    icon: "Smartphone",
    category: "Development",
    level: { en: "Intermediate", ka: "საშუალო დონე" },
    duration: { en: "16 weeks", ka: "16 კვირა" },
    format: { en: "Project-based", ka: "პროექტებზე დაფუძნებული" },
    featured: false,
    summary: {
      en: "Build cross-platform mobile apps that feel native using React Native and modern tooling.",
      ka: "ააგე კროს-პლატფორმული მობილური აპლიკაციები, რომლებიც ნატიურად აღიქმება, React Native-ითა და თანამედროვე ხელსაწყოებით.",
    },
    description: {
      en: "Ship real apps to iOS and Android from a single codebase. Learn navigation, native modules, gestures, offline storage and the app-store release process.",
      ka: "გაუშვი ნამდვილი აპლიკაციები iOS-სა და Android-ზე ერთი კოდის ბაზიდან. ისწავლე ნავიგაცია, ნატიური მოდულები, ჟესტები, ოფლაინ მეხსიერება და აპლიკაციის მაღაზიაში გამოქვეყნების პროცესი.",
    },
    tags: ["React Native", "Expo", "Navigation", "Native APIs"],
    learn: [
      { en: "React Native fundamentals & Expo", ka: "React Native-ის საფუძვლები და Expo" },
      { en: "Navigation and screen architecture", ka: "ნავიგაცია და ეკრანების არქიტექტურა" },
      { en: "Device APIs: camera, location, storage", ka: "მოწყობილობის API-ები: კამერა, მდებარეობა, მეხსიერება" },
      { en: "Gestures and smooth animation", ka: "ჟესტები და გლუვი ანიმაცია" },
      { en: "Offline-first data patterns", ka: "ოფლაინ-პრიორიტეტული მონაცემთა პატერნები" },
      { en: "Building and releasing app binaries", ka: "აპლიკაციის ბილდების აგება და გამოშვება" },
    ],
    modules: [
      { title: { en: "RN Foundations", ka: "RN-ის საფუძვლები" }, lessons: 8, summary: { en: "Components, styling, layout.", ka: "კომპონენტები, სტილიზაცია, განლაგება." } },
      { title: { en: "Navigation & State", ka: "ნავიგაცია და მდგომარეობა" }, lessons: 8, summary: { en: "Stacks, tabs, shared state.", ka: "Stack-ები, ტაბები, საზიარო მდგომარეობა." } },
      { title: { en: "Native Capabilities", ka: "ნატიური შესაძლებლობები" }, lessons: 9, summary: { en: "Camera, location, storage.", ka: "კამერა, მდებარეობა, მეხსიერება." } },
      { title: { en: "Polish & Release", ka: "გაპრიალება და გამოშვება" }, lessons: 7, summary: { en: "Animation, builds, stores.", ka: "ანიმაცია, ბილდები, მაღაზიები." } },
    ],
    outcomes: [
      { label: { en: "Apps built", ka: "აგებული აპლიკაციები" }, value: "3+" },
      { label: { en: "Platforms", ka: "პლატფორმები" }, value: "iOS + Android" },
      { label: { en: "Store-ready", ka: "მაღაზიისთვის მზა" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "React basics recommended.",
      ka: "სასურველია React-ის საფუძვლების ცოდნა.",
    },
  },
  {
    slug: "cybersecurity",
    title: { en: "Cybersecurity", ka: "კიბერუსაფრთხოება" },
    icon: "ShieldCheck",
    category: "Security",
    level: { en: "Beginner → Advanced", ka: "დამწყები → მოწინავე" },
    duration: { en: "20 weeks", ka: "20 კვირა" },
    format: { en: "Lab-based", ka: "ლაბორატორიაზე დაფუძნებული" },
    featured: true,
    summary: {
      en: "Think like an attacker, defend like a pro. Hands-on offensive and defensive security.",
      ka: "იფიქრე როგორც თავდამსხმელი, დაიცავი როგორც პროფესიონალი. პრაქტიკული შემტევი და თავდაცვითი უსაფრთხოება.",
    },
    description: {
      en: "Develop real security skills in a safe lab environment — networking, web exploitation, hardening, incident response and the ethics of security work.",
      ka: "განივითარე ნამდვილი უსაფრთხოების უნარები უსაფრთხო ლაბორატორიულ გარემოში — ქსელები, ვებ ექსპლუატაცია, გამყარება, ინციდენტებზე რეაგირება და უსაფრთხოების მუშაობის ეთიკა.",
    },
    tags: ["Networking", "Linux", "Web Exploitation", "Defense", "OSINT"],
    learn: [
      { en: "Networking & the Linux command line", ka: "ქსელები და Linux-ის ბრძანების ხაზი" },
      { en: "Common web vulnerabilities (OWASP Top 10)", ka: "ვების გავრცელებული მოწყვლადობები (OWASP Top 10)" },
      { en: "Reconnaissance and ethical hacking basics", ka: "დაზვერვა და ეთიკური ჰაკინგის საფუძვლები" },
      { en: "System hardening and defense", ka: "სისტემის გამყარება და თავდაცვა" },
      { en: "Incident response fundamentals", ka: "ინციდენტებზე რეაგირების საფუძვლები" },
      { en: "Security ethics and responsible disclosure", ka: "უსაფრთხოების ეთიკა და პასუხისმგებლიანი გამჟღავნება" },
    ],
    modules: [
      { title: { en: "Security Foundations", ka: "უსაფრთხოების საფუძვლები" }, lessons: 9, summary: { en: "Networking, Linux, crypto basics.", ka: "ქსელები, Linux, კრიპტოგრაფიის საფუძვლები." } },
      { title: { en: "Offensive Basics", ka: "შემტევი საფუძვლები" }, lessons: 10, summary: { en: "Recon, web exploitation, labs.", ka: "დაზვერვა, ვებ ექსპლუატაცია, ლაბორატორიები." } },
      { title: { en: "Defensive Basics", ka: "თავდაცვითი საფუძვლები" }, lessons: 9, summary: { en: "Hardening, monitoring, response.", ka: "გამყარება, მონიტორინგი, რეაგირება." } },
      { title: { en: "Capstone Labs", ka: "ფინალური ლაბორატორიები" }, lessons: 6, summary: { en: "Guided capture-the-flag challenges.", ka: "მართვადი capture-the-flag გამოწვევები." } },
    ],
    outcomes: [
      { label: { en: "Hands-on labs", ka: "პრაქტიკული ლაბორატორიები" }, value: "30+" },
      { label: { en: "CTF challenges", ka: "CTF გამოწვევები" }, value: { en: "Included", ka: "შედის" } },
      { label: { en: "Ethics-first", ka: "ეთიკა უპირველესად" }, value: { en: "Always", ka: "ყოველთვის" } },
    ],
    prerequisites: {
      en: "Basic computer literacy. No prior security experience needed.",
      ka: "კომპიუტერის საბაზისო ცოდნა. უსაფრთხოების წინარე გამოცდილება საჭირო არ არის.",
    },
  },
  {
    slug: "game-development",
    title: { en: "Game Development", ka: "თამაშების შემუშავება" },
    icon: "Gamepad2",
    category: "Development",
    level: { en: "Beginner → Advanced", ka: "დამწყები → მოწინავე" },
    duration: { en: "18 weeks", ka: "18 კვირა" },
    format: { en: "Project-based", ka: "პროექტებზე დაფუძნებული" },
    featured: false,
    summary: {
      en: "Design and build playable games — mechanics, physics, art pipelines and polish.",
      ka: "დააპროექტე და ააგე სათამაშო თამაშები — მექანიკა, ფიზიკა, არტ-პაიპლაინები და გაპრიალება.",
    },
    description: {
      en: "Turn ideas into playable games. Learn game loops, physics, input, scenes and juice — and ship two complete games to your portfolio.",
      ka: "აქციე იდეები სათამაშო თამაშებად. ისწავლე თამაშის ციკლები, ფიზიკა, შემავალი მონაცემები, სცენები და „juice“ — და დაამატე ორი დასრულებული თამაში პორტფოლიოში.",
    },
    tags: ["Game Loop", "Physics", "Unity", "2D/3D", "Design"],
    learn: [
      { en: "Core game loop and architecture", ka: "თამაშის ძირითადი ციკლი და არქიტექტურა" },
      { en: "Input, physics and collision", ka: "შემავალი მონაცემები, ფიზიკა და კოლიზია" },
      { en: "Scenes, levels and progression", ka: "სცენები, დონეები და პროგრესია" },
      { en: "Game feel: animation, sound, 'juice'", ka: "თამაშის შეგრძნება: ანიმაცია, ხმა, „juice“" },
      { en: "Asset pipelines and optimization", ka: "ასეტების პაიპლაინები და ოპტიმიზაცია" },
      { en: "Shipping a playable build", ka: "სათამაშო ბილდის გამოშვება" },
    ],
    modules: [
      { title: { en: "Game Foundations", ka: "თამაშის საფუძვლები" }, lessons: 8, summary: { en: "Loops, scenes, input.", ka: "ციკლები, სცენები, შემავალი მონაცემები." } },
      { title: { en: "Mechanics & Physics", ka: "მექანიკა და ფიზიკა" }, lessons: 9, summary: { en: "Movement, collision, systems.", ka: "მოძრაობა, კოლიზია, სისტემები." } },
      { title: { en: "Content & Levels", ka: "კონტენტი და დონეები" }, lessons: 8, summary: { en: "Design, balance, progression.", ka: "დიზაინი, ბალანსი, პროგრესია." } },
      { title: { en: "Polish & Ship", ka: "გაპრიალება და გაშვება" }, lessons: 6, summary: { en: "Feel, sound, builds.", ka: "შეგრძნება, ხმა, ბილდები." } },
    ],
    outcomes: [
      { label: { en: "Games shipped", ka: "გაშვებული თამაშები" }, value: "2+" },
      { label: { en: "Playable builds", ka: "სათამაშო ბილდები" }, value: { en: "Yes", ka: "კი" } },
      { label: { en: "Portfolio-ready", ka: "პორტფოლიოსთვის მზა" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "Basic programming logic helps but isn't required.",
      ka: "პროგრამირების საბაზისო ლოგიკა დაგეხმარება, თუმცა სავალდებულო არ არის.",
    },
  },
  {
    slug: "graphic-design",
    title: { en: "Graphic Design", ka: "გრაფიკული დიზაინი" },
    icon: "PenTool",
    category: "Design",
    level: { en: "Beginner → Advanced", ka: "დამწყები → მოწინავე" },
    duration: { en: "14 weeks", ka: "14 კვირა" },
    format: { en: "Studio-based", ka: "სტუდიაზე დაფუძნებული" },
    featured: false,
    summary: {
      en: "Master visual hierarchy, typography, color and brand to design with confidence.",
      ka: "დაეუფლე ვიზუალურ იერარქიას, ტიპოგრაფიას, ფერსა და ბრენდს, რათა თავდაჯერებულად ქმნიდე დიზაინს.",
    },
    description: {
      en: "Develop a designer's eye and a real portfolio. Learn the principles of layout, type and color, then apply them to branding, UI and digital products.",
      ka: "განივითარე დიზაინერის თვალი და ნამდვილი პორტფოლიო. ისწავლე განლაგების, ტიპოგრაფიისა და ფერის პრინციპები, შემდეგ კი გამოიყენე ისინი ბრენდინგში, UI-სა და ციფრულ პროდუქტებში.",
    },
    tags: ["Typography", "Color", "Layout", "Branding", "Figma"],
    learn: [
      { en: "Visual hierarchy and composition", ka: "ვიზუალური იერარქია და კომპოზიცია" },
      { en: "Typography and type systems", ka: "ტიპოგრაფია და შრიფტის სისტემები" },
      { en: "Color theory and palettes", ka: "ფერის თეორია და პალიტრები" },
      { en: "Brand identity fundamentals", ka: "ბრენდის იდენტობის საფუძვლები" },
      { en: "Digital & UI design in Figma", ka: "ციფრული და UI დიზაინი Figma-ში" },
      { en: "Building a design portfolio", ka: "დიზაინის პორტფოლიოს აგება" },
    ],
    modules: [
      { title: { en: "Design Principles", ka: "დიზაინის პრინციპები" }, lessons: 8, summary: { en: "Hierarchy, grid, balance.", ka: "იერარქია, ბადე, ბალანსი." } },
      { title: { en: "Type & Color", ka: "ტიპოგრაფია და ფერი" }, lessons: 8, summary: { en: "Typography, palettes, contrast.", ka: "ტიპოგრაფია, პალიტრები, კონტრასტი." } },
      { title: { en: "Brand & Identity", ka: "ბრენდი და იდენტობა" }, lessons: 7, summary: { en: "Logos, systems, voice.", ka: "ლოგოები, სისტემები, ხმა." } },
      { title: { en: "Portfolio Studio", ka: "პორტფოლიოს სტუდია" }, lessons: 6, summary: { en: "Real briefs, critique, polish.", ka: "ნამდვილი ბრიფები, კრიტიკა, გაპრიალება." } },
    ],
    outcomes: [
      { label: { en: "Portfolio pieces", ka: "პორტფოლიოს ნამუშევრები" }, value: "8+" },
      { label: { en: "Real briefs", ka: "ნამდვილი ბრიფები" }, value: { en: "Yes", ka: "კი" } },
      { label: { en: "Critique culture", ka: "კრიტიკის კულტურა" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "No experience required. Bring your taste.",
      ka: "გამოცდილება საჭირო არ არის. მოიტანე შენი გემოვნება.",
    },
  },
  {
    slug: "robotics",
    title: { en: "Robotics", ka: "რობოტიკა" },
    icon: "Bot",
    category: "Engineering",
    level: { en: "Intermediate", ka: "საშუალო დონე" },
    duration: { en: "20 weeks", ka: "20 კვირა" },
    format: { en: "Hardware + Code", ka: "ტექნიკა + კოდი" },
    featured: false,
    summary: {
      en: "Bridge software and the physical world — sensors, actuators and embedded control.",
      ka: "დააკავშირე პროგრამული უზრუნველყოფა და ფიზიკური სამყარო — სენსორები, აქტუატორები და ჩაშენებული მართვა.",
    },
    description: {
      en: "Program machines that sense and act. Learn embedded programming, sensor fusion, motor control and autonomous behaviour with hands-on hardware.",
      ka: "დააპროგრამე მანქანები, რომლებიც აღიქვამენ და მოქმედებენ. ისწავლე ჩაშენებული პროგრამირება, სენსორების შერწყმა, ძრავის მართვა და ავტონომიური ქცევა რეალურ ტექნიკაზე.",
    },
    tags: ["Embedded", "Sensors", "Microcontrollers", "Control", "C/C++"],
    learn: [
      { en: "Microcontrollers and embedded basics", ka: "მიკროკონტროლერები და ჩაშენებული სისტემების საფუძვლები" },
      { en: "Reading sensors and signals", ka: "სენსორებისა და სიგნალების წაკითხვა" },
      { en: "Motor and actuator control", ka: "ძრავისა და აქტუატორის მართვა" },
      { en: "Control loops and automation", ka: "მართვის ციკლები და ავტომატიზაცია" },
      { en: "Wiring real-world inputs to logic", ka: "რეალური სამყაროს შემავალი მონაცემების ლოგიკასთან დაკავშირება" },
      { en: "Building an autonomous robot", ka: "ავტონომიური რობოტის აგება" },
    ],
    modules: [
      { title: { en: "Embedded Basics", ka: "ჩაშენებული საფუძვლები" }, lessons: 9, summary: { en: "Microcontrollers, I/O, timing.", ka: "მიკროკონტროლერები, I/O, ტაიმინგი." } },
      { title: { en: "Sensing the World", ka: "სამყაროს აღქმა" }, lessons: 8, summary: { en: "Sensors, signals, filtering.", ka: "სენსორები, სიგნალები, ფილტრაცია." } },
      { title: { en: "Motion & Control", ka: "მოძრაობა და მართვა" }, lessons: 9, summary: { en: "Motors, PID, automation.", ka: "ძრავები, PID, ავტომატიზაცია." } },
      { title: { en: "Autonomy Project", ka: "ავტონომიის პროექტი" }, lessons: 6, summary: { en: "Build a sensing robot.", ka: "ააგე აღმქმელი რობოტი." } },
    ],
    outcomes: [
      { label: { en: "Hardware builds", ka: "ტექნიკის ბილდები" }, value: "3+" },
      { label: { en: "Real sensors", ka: "ნამდვილი სენსორები" }, value: { en: "Yes", ka: "კი" } },
      { label: { en: "Autonomy project", ka: "ავტონომიის პროექტი" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "Comfort with basic programming logic.",
      ka: "პროგრამირების საბაზისო ლოგიკის თავისუფლად ცოდნა.",
    },
  },
  {
    slug: "sql",
    title: { en: "SQL & Databases", ka: "SQL და მონაცემთა ბაზები" },
    icon: "Database",
    category: "Data",
    level: { en: "Beginner → Intermediate", ka: "დამწყები → საშუალო" },
    duration: { en: "10 weeks", ka: "10 კვირა" },
    format: { en: "Hands-on", ka: "პრაქტიკული" },
    featured: false,
    summary: {
      en: "Query, model and reason about data with SQL — the language every developer needs.",
      ka: "გააანალიზე, დაამოდელირე და იაზროვნე მონაცემებზე SQL-ით — ენა, რომელიც ყველა დეველოპერს სჭირდება.",
    },
    description: {
      en: "Master the language of data. From your first SELECT to complex joins, indexing and schema design, you'll learn to work with relational databases confidently.",
      ka: "დაეუფლე მონაცემთა ენას. პირველი SELECT-იდან რთულ join-ებამდე, ინდექსირებამდე და სქემის დიზაინამდე — ისწავლი რელაციურ მონაცემთა ბაზებთან თავდაჯერებულად მუშაობას.",
    },
    tags: ["SQL", "PostgreSQL", "Joins", "Indexing", "Modelling"],
    learn: [
      { en: "SELECT, filtering and sorting", ka: "SELECT, ფილტრაცია და დახარისხება" },
      { en: "Joins across multiple tables", ka: "Join-ები რამდენიმე ცხრილს შორის" },
      { en: "Aggregation and grouping", ka: "აგრეგაცია და დაჯგუფება" },
      { en: "Schema design and normalization", ka: "სქემის დიზაინი და ნორმალიზაცია" },
      { en: "Indexes and query performance", ka: "ინდექსები და მოთხოვნის წარმადობა" },
      { en: "Transactions and data integrity", ka: "ტრანზაქციები და მონაცემთა მთლიანობა" },
    ],
    modules: [
      { title: { en: "Query Foundations", ka: "მოთხოვნების საფუძვლები" }, lessons: 7, summary: { en: "SELECT, WHERE, ORDER, LIMIT.", ka: "SELECT, WHERE, ORDER, LIMIT." } },
      { title: { en: "Relating Data", ka: "მონაცემთა დაკავშირება" }, lessons: 8, summary: { en: "Joins, subqueries, sets.", ka: "Join-ები, ქვემოთხოვნები, სიმრავლეები." } },
      { title: { en: "Design & Integrity", ka: "დიზაინი და მთლიანობა" }, lessons: 6, summary: { en: "Schemas, keys, normalization.", ka: "სქემები, გასაღებები, ნორმალიზაცია." } },
      { title: { en: "Performance", ka: "წარმადობა" }, lessons: 5, summary: { en: "Indexes, plans, tuning.", ka: "ინდექსები, გეგმები, ოპტიმიზაცია." } },
    ],
    outcomes: [
      { label: { en: "Queries written", ka: "დაწერილი მოთხოვნები" }, value: "200+" },
      { label: { en: "Real datasets", ka: "ნამდვილი მონაცემთა ნაკრებები" }, value: { en: "Yes", ka: "კი" } },
      { label: { en: "Job-relevant", ka: "სამუშაოსთვის რელევანტური" }, value: { en: "Always", ka: "ყოველთვის" } },
    ],
    prerequisites: {
      en: "None. A great first technical skill.",
      ka: "არცერთი. შესანიშნავი პირველი ტექნიკური უნარი.",
    },
  },
  {
    slug: "algorithms",
    title: { en: "Algorithms & Data Structures", ka: "ალგორითმები და მონაცემთა სტრუქტურები" },
    icon: "Binary",
    category: "Computer Science",
    level: { en: "Intermediate → Advanced", ka: "საშუალო → მოწინავე" },
    duration: { en: "14 weeks", ka: "14 კვირა" },
    format: { en: "Problem-based", ka: "ამოცანებზე დაფუძნებული" },
    featured: true,
    summary: {
      en: "Build the problem-solving foundation that powers great engineers and interviews.",
      ka: "ააგე ამოცანების გადაჭრის საფუძველი, რომელიც კარგ ინჟინრებსა და გასაუბრებებს კვებავს.",
    },
    description: {
      en: "Train the way strong engineers think. Learn the core data structures and algorithmic patterns, complexity analysis, and how to break down hard problems methodically.",
      ka: "ივარჯიშე ისე, როგორც ძლიერი ინჟინრები აზროვნებენ. ისწავლე ძირითადი მონაცემთა სტრუქტურები და ალგორითმული პატერნები, სირთულის ანალიზი და რთული ამოცანების მეთოდურად დაშლა.",
    },
    tags: ["Data Structures", "Complexity", "Patterns", "Interview Prep"],
    learn: [
      { en: "Big-O and complexity analysis", ka: "Big-O და სირთულის ანალიზი" },
      { en: "Arrays, hashing, stacks, queues", ka: "მასივები, ჰეშირება, სტეკები, რიგები" },
      { en: "Trees, graphs and traversal", ka: "ხეები, გრაფები და გადავლა" },
      { en: "Sorting and searching", ka: "დახარისხება და ძიება" },
      { en: "Dynamic programming patterns", ka: "დინამიური პროგრამირების პატერნები" },
      { en: "Structured problem-solving", ka: "სტრუქტურირებული ამოცანების გადაჭრა" },
    ],
    modules: [
      { title: { en: "Foundations", ka: "საფუძვლები" }, lessons: 8, summary: { en: "Complexity, arrays, hashing.", ka: "სირთულე, მასივები, ჰეშირება." } },
      { title: { en: "Linear Structures", ka: "წრფივი სტრუქტურები" }, lessons: 8, summary: { en: "Stacks, queues, linked lists.", ka: "სტეკები, რიგები, დაკავშირებული სიები." } },
      { title: { en: "Trees & Graphs", ka: "ხეები და გრაფები" }, lessons: 9, summary: { en: "Traversal, BFS/DFS, paths.", ka: "გადავლა, BFS/DFS, გზები." } },
      { title: { en: "Patterns & Practice", ka: "პატერნები და პრაქტიკა" }, lessons: 8, summary: { en: "DP, greedy, interview sets.", ka: "DP, greedy, საგასაუბრო ნაკრებები." } },
    ],
    outcomes: [
      { label: { en: "Problems solved", ka: "გადაჭრილი ამოცანები" }, value: "150+" },
      { label: { en: "Patterns mastered", ka: "ათვისებული პატერნები" }, value: "12+" },
      { label: { en: "Interview-ready", ka: "გასაუბრებისთვის მზა" }, value: { en: "Yes", ka: "კი" } },
    ],
    prerequisites: {
      en: "Comfortable writing code in any language.",
      ka: "კოდის თავისუფლად წერა ნებისმიერ ენაზე.",
    },
  },
];

export const getProgramBySlug = (slug) =>
  programs.find((p) => p.slug === slug);

export const programCategories = [
  "All",
  ...Array.from(new Set(programs.map((p) => p.category))),
];
