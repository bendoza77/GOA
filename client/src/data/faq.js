/**
 * FAQ content grouped by category — static mock data.
 * `category` stays English (filtering + taxonomy dictionary); Q&A is bilingual.
 */
export const faqCategories = [
  {
    category: "Admissions",
    items: [
      {
        q: { en: "Do I need prior experience to join?", ka: "მჭირდება წინარე გამოცდილება ჩასართავად?" },
        a: {
          en: "Most of our programs are beginner-friendly and start from the fundamentals. A few intermediate tracks recommend some coding comfort, which is noted on each program page.",
          ka: "ჩვენი პროგრამების უმეტესობა დამწყებთათვისაა და საფუძვლებიდან იწყება. რამდენიმე საშუალო დონის მიმართულება პროგრამირების გარკვეულ ცოდნას ურჩევს, რაც თითოეული პროგრამის გვერდზეა მითითებული.",
        },
      },
      {
        q: { en: "How do I apply?", ka: "როგორ გავაკეთო განაცხადი?" },
        a: {
          en: "Head to the Apply page, pick the program you're interested in, and fill out the short application. There's no entrance exam — we care about motivation and fit.",
          ka: "გადადი განაცხადის გვერდზე, აირჩიე პროგრამა, რომელიც გაინტერესებს, და შეავსე მოკლე განაცხადი. მისაღები გამოცდა არ არის — ჩვენთვის მნიშვნელოვანია მოტივაცია და შესაბამისობა.",
        },
      },
      {
        q: { en: "Is there an age requirement?", ka: "არსებობს ასაკობრივი მოთხოვნა?" },
        a: {
          en: "Our programs are designed for motivated learners of all ages. Younger applicants are welcome with guardian support.",
          ka: "ჩვენი პროგრამები ყველა ასაკის მოტივირებული მსწავლელისთვისაა გათვლილი. უმცროსი აპლიკანტები მისასალმებელნი არიან მეურვის მხარდაჭერით.",
        },
      },
    ],
  },
  {
    category: "Programs",
    items: [
      {
        q: { en: "Are the programs project-based?", ka: "პროგრამები პროექტებზეა დაფუძნებული?" },
        a: {
          en: "Yes. Every program is built around shipping real projects with mentor feedback. You graduate with a portfolio, not just notes.",
          ka: "დიახ. ყველა პროგრამა ნამდვილი პროექტების გაშვებასა და მენტორის უკუკავშირზეა აგებული. ამთავრებ პორტფოლიოთი და არა მხოლოდ ჩანაწერებით.",
        },
      },
      {
        q: { en: "How long do programs take?", ka: "რამდენ ხანს გრძელდება პროგრამები?" },
        a: {
          en: "Most programs run between 10 and 20 weeks depending on the track. Each program page lists its exact duration and format.",
          ka: "პროგრამების უმეტესობა 10-დან 20 კვირამდე გრძელდება მიმართულების მიხედვით. თითოეული პროგრამის გვერდზე მითითებულია ზუსტი ხანგრძლივობა და ფორმატი.",
        },
      },
      {
        q: { en: "Can I take more than one program?", ka: "შემიძლია ერთზე მეტი პროგრამის გავლა?" },
        a: {
          en: "Absolutely. Many students stack programs — for example Front-end followed by Algorithms — to build a stronger, broader skill set.",
          ka: "რა თქმა უნდა. ბევრი სტუდენტი პროგრამებს ალაგებს — მაგალითად ფრონტ-ენდი, შემდეგ ალგორითმები — უფრო ძლიერი და ფართო უნარების ასაგებად.",
        },
      },
    ],
  },
  {
    category: "Mentorship",
    items: [
      {
        q: { en: "Who are the mentors?", ka: "ვინ არიან მენტორები?" },
        a: {
          en: "Our mentors are working professionals — engineers, designers and security specialists — who bring real industry experience into every session.",
          ka: "ჩვენი მენტორები მოქმედი პროფესიონალები არიან — ინჟინრები, დიზაინერები და უსაფრთხოების სპეციალისტები — რომლებიც ნამდვილ ინდუსტრიულ გამოცდილებას ყოველ სესიაში მოაქვთ.",
        },
      },
      {
        q: { en: "How much mentor time do I get?", ka: "რამდენ დროს მომცემს მენტორი?" },
        a: {
          en: "You'll have regular feedback on your projects and access to mentor hours throughout your program. Mentorship is the core of how we teach.",
          ka: "მიიღებ რეგულარულ უკუკავშირს შენს პროექტებზე და მენტორთან საათების ხელმისაწვდომობას მთელი პროგრამის განმავლობაში. მენტორობა ჩვენი სწავლების გული და გულია.",
        },
      },
    ],
  },
  {
    category: "Pricing & Support",
    items: [
      {
        q: { en: "How much do programs cost?", ka: "რა ღირს პროგრამები?" },
        a: {
          en: "Pricing varies by program and plan. Visit the Pricing page for details. We also offer scholarships and financial support for eligible applicants.",
          ka: "ფასი იცვლება პროგრამისა და გეგმის მიხედვით. დეტალებისთვის ეწვიე ფასების გვერდს. ასევე გთავაზობთ სტიპენდიებსა და ფინანსურ მხარდაჭერას შესაბამისი აპლიკანტებისთვის.",
        },
      },
      {
        q: { en: "Do you offer scholarships?", ka: "გთავაზობთ სტიპენდიებს?" },
        a: {
          en: "Yes. We're committed to widening access to tech education. See the Scholarships page for options and eligibility.",
          ka: "დიახ. ჩვენ ვცდილობთ ტექნოლოგიური განათლების ხელმისაწვდომობის გაფართოებას. ვარიანტებისა და კრიტერიუმებისთვის იხილე სტიპენდიების გვერდი.",
        },
      },
    ],
  },
  {
    category: "Career",
    items: [
      {
        q: { en: "Will this help me get a job?", ka: "დამეხმარება ეს სამუშაოს შოვნაში?" },
        a: {
          en: "Our programs are designed to make you job-ready through real projects, portfolio work and interview-style practice. Many graduates go on to land roles in tech.",
          ka: "ჩვენი პროგრამები ისეა შექმნილი, რომ სამუშაოსთვის მზად გაგხადოს ნამდვილი პროექტების, პორტფოლიოსა და საგასაუბრო პრაქტიკის გავლით. ბევრი კურსდამთავრებული ტექნოლოგიურ პოზიციებზე საქმდება.",
        },
      },
      {
        q: { en: "Do you guarantee a job?", ka: "გარანტიას იძლევით სამუშაოზე?" },
        a: {
          en: "No honest academy can guarantee a job — but we give you the skills, portfolio and support to compete confidently for one.",
          ka: "ვერცერთი პატიოსანი აკადემია ვერ მოგცემს სამუშაოს გარანტიას — მაგრამ ჩვენ გაძლევთ უნარებს, პორტფოლიოსა და მხარდაჭერას, რომ თავდაჯერებულად იბრძოლო მისთვის.",
        },
      },
    ],
  },
];

/** Flat list of the first N items for compact previews. */
export const getFaqPreview = (count = 5) =>
  faqCategories.flatMap((c) => c.items).slice(0, count);
