/**
 * Events, workshops & hackathons — static mock data.
 * `type` and `status` stay English (filtering + taxonomy); prose is bilingual.
 */
export const events = [
  {
    id: "e1",
    title: { en: "48-Hour Build Hackathon", ka: "48-საათიანი Build ჰაკათონი" },
    type: "Hackathon",
    date: "2026-07-12",
    time: "10:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "upcoming",
    featured: true,
    summary: {
      en: "Team up and ship a working product in a single weekend. Prizes, mentors on call, and a demo night to close it out.",
      ka: "გაერთიანდი გუნდად და გაუშვი მომუშავე პროდუქტი ერთ შაბათ-კვირაში. პრიზები, ხელმისაწვდომი მენტორები და დემო-საღამო დასასრულს.",
    },
    tags: [
      { en: "Teams", ka: "გუნდები" },
      { en: "Prizes", ka: "პრიზები" },
      { en: "Online", ka: "ონლაინ" },
    ],
  },
  {
    id: "e2",
    title: { en: "Intro to System Design Workshop", ka: "სისტემის დიზაინის შესავალი ვორქშოპი" },
    type: "Workshop",
    date: "2026-07-03",
    time: "18:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "upcoming",
    featured: false,
    summary: {
      en: "A practical, beginner-friendly walk through how real systems are designed — from a single server to scale.",
      ka: "პრაქტიკული, დამწყებთათვის მარტივი მიმოხილვა იმისა, თუ როგორ იქმნება ნამდვილი სისტემები — ერთი სერვერიდან მასშტაბამდე.",
    },
    tags: [
      { en: "Back-end", ka: "ბექ-ენდი" },
      { en: "Live", ka: "ცოცხალი" },
      { en: "Beginner", ka: "დამწყები" },
    ],
  },
  {
    id: "e3",
    title: { en: "Capture-the-Flag Security Night", ka: "Capture-the-Flag უსაფრთხოების საღამო" },
    type: "Hackathon",
    date: "2026-07-19",
    time: "19:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "upcoming",
    featured: false,
    summary: {
      en: "A guided CTF for all levels. Solve challenges, learn techniques, and compete on the live leaderboard.",
      ka: "მართვადი CTF ყველა დონისთვის. გადაჭერი გამოწვევები, ისწავლე ტექნიკები და იჯიბრე ცოცხალ ლიდერბორდზე.",
    },
    tags: [
      { en: "Security", ka: "უსაფრთხოება" },
      { en: "CTF", ka: "CTF" },
      { en: "Competitive", ka: "შეჯიბრებითი" },
    ],
  },
  {
    id: "e4",
    title: { en: "Design Portfolio Review", ka: "დიზაინის პორტფოლიოს მიმოხილვა" },
    type: "Workshop",
    date: "2026-06-28",
    time: "17:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "upcoming",
    featured: false,
    summary: {
      en: "Bring your work and get live, senior-level critique to push your portfolio to the next level.",
      ka: "მოიტანე შენი ნამუშევარი და მიიღე ცოცხალი, სენიორ დონის კრიტიკა, რომ პორტფოლიო შემდეგ საფეხურზე აიყვანო.",
    },
    tags: [
      { en: "Design", ka: "დიზაინი" },
      { en: "Critique", ka: "კრიტიკა" },
      { en: "Live", ka: "ცოცხალი" },
    ],
  },
  {
    id: "e5",
    title: { en: "Spring Demo Day 2026", ka: "საგაზაფხულო Demo Day 2026" },
    type: "Showcase",
    date: "2026-05-30",
    time: "16:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "past",
    featured: false,
    summary: {
      en: "Graduating students presented their capstone projects to mentors, alumni and hiring partners.",
      ka: "კურსდამთავრებულებმა თავიანთი ფინალური პროექტები წარუდგინეს მენტორებს, კურსდამთავრებულებსა და დამსაქმებელ პარტნიორებს.",
    },
    tags: [
      { en: "Showcase", ka: "ჩვენება" },
      { en: "Alumni", ka: "კურსდამთავრებულები" },
    ],
  },
  {
    id: "e6",
    title: { en: "Algorithms Mock-Interview Marathon", ka: "ალგორითმების საცდელი გასაუბრებების მარათონი" },
    type: "Workshop",
    date: "2026-05-15",
    time: "15:00",
    location: { en: "Online", ka: "ონლაინ" },
    status: "past",
    featured: false,
    summary: {
      en: "A full day of paired mock interviews with detailed feedback from senior engineers.",
      ka: "მთელი დღე წყვილებად საცდელ გასაუბრებებში სენიორ ინჟინრებისგან დეტალური უკუკავშირით.",
    },
    tags: [
      { en: "Algorithms", ka: "ალგორითმები" },
      { en: "Interview", ka: "გასაუბრება" },
    ],
  },
];

export const getUpcomingEvents = () => events.filter((e) => e.status === "upcoming");
export const getPastEvents = () => events.filter((e) => e.status === "past");
