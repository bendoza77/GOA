/**
 * Mentor / instructor roster — static mock data.
 * `name`, `initials` and `expertise` (tech keywords) stay English; prose is
 * bilingual and resolved by the deep localizer.
 */
export const mentors = [
  {
    id: "m1",
    name: "Ava Sharma",
    role: { en: "Senior Front-end Engineer", ka: "სენიორ ფრონტ-ენდ ინჟინერი" },
    initials: "AS",
    expertise: ["React", "TypeScript", "Design Systems"],
    specialization: { en: "Front-end Development", ka: "ფრონტ-ენდ დეველოპმენტი" },
    bio: {
      en: "10+ years building product UIs at scale. Obsessed with accessible, fast interfaces and clear mental models.",
      ka: "10+ წელი მასშტაბური პროდუქტის UI-ების შექმნაში. შეპყრობილია ხელმისაწვდომი, სწრაფი ინტერფეისებითა და ნათელი მენტალური მოდელებით.",
    },
    featured: true,
  },
  {
    id: "m2",
    name: "Marcus Olsen",
    role: { en: "Backend Architect", ka: "ბექ-ენდ არქიტექტორი" },
    initials: "MO",
    expertise: ["Node.js", "PostgreSQL", "System Design"],
    specialization: { en: "Back-end Development", ka: "ბექ-ენდ დეველოპმენტი" },
    bio: {
      en: "Designs reliable systems for high-traffic products. Believes the best code is the code you can delete.",
      ka: "აპროექტებს საიმედო სისტემებს მაღალდატვირთული პროდუქტებისთვის. სჯერა, რომ საუკეთესო კოდი ის კოდია, რომელიც შეგიძლია წაშალო.",
    },
    featured: true,
  },
  {
    id: "m3",
    name: "Lena Petrova",
    role: { en: "Security Engineer", ka: "უსაფრთხოების ინჟინერი" },
    initials: "LP",
    expertise: ["Web Security", "Linux", "Incident Response"],
    specialization: { en: "Cybersecurity", ka: "კიბერუსაფრთხოება" },
    bio: {
      en: "Former red-teamer turned educator. Teaches security with ethics and curiosity at the core.",
      ka: "ყოფილი red-teamer, რომელიც პედაგოგი გახდა. ასწავლის უსაფრთხოებას ეთიკისა და ცნობისმოყვარეობის საფუძველზე.",
    },
    featured: false,
  },
  {
    id: "m4",
    name: "Diego Ramos",
    role: { en: "Mobile Lead", ka: "მობაილ ლიდი" },
    initials: "DR",
    expertise: ["React Native", "Animation", "DX"],
    specialization: { en: "Mobile Development", ka: "მობაილ დეველოპმენტი" },
    bio: {
      en: "Shipped a dozen apps with millions of installs. Loves smooth, delightful mobile experiences.",
      ka: "გამოუშვია ათეულობით აპლიკაცია მილიონობით ჩამოტვირთვით. უყვარს გლუვი, სასიამოვნო მობილური გამოცდილება.",
    },
    featured: false,
  },
  {
    id: "m5",
    name: "Yuki Tanaka",
    role: { en: "Game Developer", ka: "თამაშების დეველოპერი" },
    initials: "YT",
    expertise: ["Unity", "Game Feel", "Physics"],
    specialization: { en: "Game Development", ka: "თამაშების შემუშავება" },
    bio: {
      en: "Indie game dev focused on tight mechanics and that hard-to-define sense of 'juice'.",
      ka: "ინდი თამაშების დეველოპერი, ფოკუსირებული ზუსტ მექანიკაზე და იმ ძნელად აღსაწერ „juice“-ის შეგრძნებაზე.",
    },
    featured: false,
  },
  {
    id: "m6",
    name: "Sofia Marino",
    role: { en: "Design Director", ka: "დიზაინის დირექტორი" },
    initials: "SM",
    expertise: ["Typography", "Branding", "UI"],
    specialization: { en: "Graphic Design", ka: "გრაფიკული დიზაინი" },
    bio: {
      en: "Builds brands and design systems. A firm believer in critique culture and craft.",
      ka: "ქმნის ბრენდებსა და დიზაინ-სისტემებს. მტკიცედ სჯერა კრიტიკის კულტურისა და ოსტატობის.",
    },
    featured: false,
  },
  {
    id: "m7",
    name: "Kwame Mensah",
    role: { en: "Robotics Engineer", ka: "რობოტიკის ინჟინერი" },
    initials: "KM",
    expertise: ["Embedded", "Control", "C/C++"],
    specialization: { en: "Robotics", ka: "რობოტიკა" },
    bio: {
      en: "Bridges hardware and software. Believes the best way to learn robotics is to break a few robots.",
      ka: "აკავშირებს ტექნიკასა და პროგრამულ უზრუნველყოფას. სჯერა, რომ რობოტიკის სწავლის საუკეთესო გზა რამდენიმე რობოტის გაფუჭებაა.",
    },
    featured: false,
  },
  {
    id: "m8",
    name: "Priya Nair",
    role: { en: "Data Engineer", ka: "მონაცემთა ინჟინერი" },
    initials: "PN",
    expertise: ["SQL", "Data Modelling", "Algorithms"],
    specialization: { en: "SQL & Algorithms", ka: "SQL და ალგორითმები" },
    bio: {
      en: "Turns messy data into clean models. Loves a well-indexed query and an elegant algorithm.",
      ka: "არეულ მონაცემებს სუფთა მოდელებად აქცევს. უყვარს კარგად ინდექსირებული მოთხოვნა და ელეგანტური ალგორითმი.",
    },
    featured: false,
  },
];

export const getFeaturedMentors = (count = 4) =>
  mentors.filter((m) => m.featured).concat(mentors.filter((m) => !m.featured)).slice(0, count);
