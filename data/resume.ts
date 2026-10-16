export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Python", "SQL", "HTML/CSS"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "React Query", "Recharts"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express", "PHP", "Flask", "REST APIs", "JWT", "Webhooks", "Zod", "BullMQ"],
  },
  { group: "Payments", items: ["Stripe Payment Intents", "PayAdvantage direct debits"] },
  { group: "Databases", items: ["PostgreSQL", "Prisma", "MySQL", "MongoDB", "Mongoose", "Redis"] },
  {
    group: "Machine learning",
    items: ["scikit-learn", "XGBoost", "Random forest", "Gradient boosting"],
  },
  { group: "DevOps & cloud", items: ["AWS S3", "AWS Ubuntu server", "Docker Compose", "Vercel", "Render"] },
  { group: "Tools", items: ["Git", "GitHub", "Jest", "Supertest", "Playwright"] },
];

export const experience = [
  {
    role: "Freelance Full Stack Developer",
    org: "Independent",
    period: "Jan 2024 – Present",
    points: [
      "Built AAA Green Rentals for a car rental client: a PHP and MySQL booking site and staff dashboard for reservations, dispatch, returns, inspections and invoicing, deployed on AWS.",
      "Integrated Stripe Payment Intents with verified webhooks for deposits, and PayAdvantage direct debits for recurring rental payments, both reconciled into one payment ledger.",
      "Delivered features end to end, from interface and REST API to database schema, sign-in with Google OAuth and one-time codes, and S3 document storage, managing requirements, fixes and releases on my own.",
    ],
  },
];

export const education = [
  {
    title: "BS Software Engineering",
    org: "DHA Suffa University",
    period: "July 2026",
  },
  {
    title: "Advanced Diploma in Software Engineering",
    org: "Aptech Computer Education",
    period: "June 2025",
    note: "Distinction",
  },
];
