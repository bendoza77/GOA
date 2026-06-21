/** Student success stories — static mock data. */
export const testimonials = [
  {
    id: "t1",
    name: "Sara Müller",
    initials: "SM",
    outcome: { en: "Hired as Junior Front-end Developer", ka: "დასაქმდა Junior ფრონტ-ენდ დეველოპერად" },
    program: { en: "Front-end Development", ka: "ფრონტ-ენდ დეველოპმენტი" },
    rating: 5,
    featured: true,
    quote: {
      en: "The roadmap and mentors made everything click. I went from copy-pasting CSS to shipping real React apps — and landed a job three weeks after graduating.",
      ka: "Roadmap-მა და მენტორებმა ყველაფერი ერთ მთლიანობად აქცია. CSS-ის კოპირება-ჩასმიდან ნამდვილი React აპლიკაციების გაშვებამდე მივედი — და დამთავრებიდან სამ კვირაში დავსაქმდი.",
    },
  },
  {
    id: "t2",
    name: "James Okoro",
    initials: "JO",
    outcome: { en: "Backend Engineer at a fintech startup", ka: "ბექ-ენდ ინჟინერი ფინტექ სტარტაპში" },
    program: { en: "Back-end Development", ka: "ბექ-ენდ დეველოპმენტი" },
    rating: 5,
    featured: true,
    quote: {
      en: "Project-based learning is the real deal. By the end I had built APIs I was actually proud to put on my CV. The mentor feedback was worth every minute.",
      ka: "პროექტებზე დაფუძნებული სწავლა ნამდვილად მუშაობს. ბოლოს ისეთი API-ები მქონდა აგებული, რომელთა CV-ში მითითებაც სიამაყით შემეძლო. მენტორის უკუკავშირი ყოველ წუთად ღირდა.",
    },
  },
  {
    id: "t3",
    name: "Aisha Rahman",
    initials: "AR",
    outcome: { en: "Security Analyst", ka: "უსაფრთხოების ანალიტიკოსი" },
    program: { en: "Cybersecurity", ka: "კიბერუსაფრთხოება" },
    rating: 5,
    featured: false,
    quote: {
      en: "The labs felt like real work, not toy exercises. I learned to think like an attacker and defend like a pro — and it got me my first security role.",
      ka: "ლაბორატორიები ნამდვილ სამუშაოს ჰგავდა და არა სათამაშო სავარჯიშოებს. ვისწავლე თავდამსხმელივით ფიქრი და პროფესიონალივით თავდაცვა — და ამან პირველი სამუშაო მომიტანა უსაფრთხოებაში.",
    },
  },
  {
    id: "t4",
    name: "Tomás Silva",
    initials: "TS",
    outcome: { en: "Freelance Mobile Developer", ka: "ფრილანს მობაილ დეველოპერი" },
    program: { en: "Mobile Development", ka: "მობაილ დეველოპმენტი" },
    rating: 5,
    featured: false,
    quote: {
      en: "I shipped two apps to the store before I even finished. Goa gave me the confidence and the portfolio to start freelancing immediately.",
      ka: "ჯერ კურსი არც დამემთავრებინა, რომ ორი აპლიკაცია უკვე მაღაზიაში მქონდა გამოშვებული. Goa-მ თავდაჯერებულობა და პორტფოლიო მომცა, რომ მაშინვე დამეწყო ფრილანსი.",
    },
  },
  {
    id: "t5",
    name: "Nina Kovač",
    initials: "NK",
    outcome: { en: "Product Designer", ka: "პროდუქტის დიზაინერი" },
    program: { en: "Graphic Design", ka: "გრაფიკული დიზაინი" },
    rating: 5,
    featured: false,
    quote: {
      en: "The critique culture changed how I see design. I came in with raw taste and left with a real process and a portfolio that gets interviews.",
      ka: "კრიტიკის კულტურამ შემიცვალა დიზაინის აღქმა. დაუხვეწავი გემოვნებით მოვედი და წავედი ნამდვილი პროცესითა და პორტფოლიოთი, რომელიც გასაუბრებებს მაძლევს.",
    },
  },
  {
    id: "t6",
    name: "Daniel Weiss",
    initials: "DW",
    outcome: { en: "Passed FAANG-level interviews", ka: "გაიარა FAANG დონის გასაუბრებები" },
    program: { en: "Algorithms & Data Structures", ka: "ალგორითმები და მონაცემთა სტრუქტურები" },
    rating: 5,
    featured: false,
    quote: {
      en: "Algorithms used to terrify me. The pattern-based approach made hard problems feel solvable. I walked into interviews calm and prepared.",
      ka: "ალგორითმები ადრე მაშინებდა. პატერნებზე დაფუძნებულმა მიდგომამ რთული ამოცანები გადასაჭრელად აქცია. გასაუბრებებზე მშვიდად და მომზადებული მივდიოდი.",
    },
  },
];

export const outcomeStats = [
  { label: { en: "Graduates", ka: "კურსდამთავრებულები" }, value: "2,400+" },
  { label: { en: "Hire rate", ka: "დასაქმების მაჩვენებელი" }, value: "87%" },
  { label: { en: "Projects shipped", ka: "გაშვებული პროექტები" }, value: "9,000+" },
  { label: { en: "Mentor rating", ka: "მენტორების შეფასება" }, value: "4.9/5" },
];

export const getFeaturedTestimonials = (count = 3) =>
  testimonials
    .filter((t) => t.featured)
    .concat(testimonials.filter((t) => !t.featured))
    .slice(0, count);
