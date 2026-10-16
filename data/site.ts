export type Layer = { layer: string; tools: string[] };

export const site = {
  name: "Areeb Elahi",
  role: "Full Stack Developer",
  location: "Pakistan",
  url: "https://areebelahi.dev",
  headline: "I build complete web applications, from database to deployment.",
  headlineMark: "database to deployment",
  intro:
    "Since January 2024 I've built business software end to end: booking and payment flows, role-based dashboards, REST APIs and the background jobs behind them.",
  description:
    "Full stack developer building web applications with Next.js, Node.js, PHP and PostgreSQL: payment integrations, role-based dashboards, REST APIs and machine-learning services.",
  email: "dev.areebelahi@gmail.com",
  phone: "+92 317 9943488",
  resume: "/AreebElahi_Resume.pdf",
  github: "https://github.com/AreebElahi",
  linkedin: "https://www.linkedin.com/in/areebelahi/",
  x: "https://x.com/areeb_elahi",
};

// Numbers follow the page order, so the header index and the section markers match.
export const sections = {
  about: { number: "01", title: "About" },
  projects: {
    number: "02",
    title: "Work",
    intro: "Four applications, each covering the interface, the API and the database.",
  },
  approach: {
    number: "03",
    title: "Approach",
    intro: "Habits that show up across these projects, each with the place it shows.",
  },
  skills: { number: "04", title: "Toolkit", intro: "Grouped by layer of the stack, with the projects that use them." },
  experience: {
    number: "05",
    title: "Experience",
    intro: "Freelance since January 2024, taking work from requirements to release on my own.",
  },
  contact: {
    number: "06",
    title: "Contact",
    intro: "Open to full-time Full Stack Developer roles and freelance projects. Email is the fastest way to reach me.",
  },
};

export const nav = [
  { ...sections.projects, href: "/#projects" },
  { ...sections.approach, href: "/#approach" },
  { ...sections.skills, href: "/#skills" },
  { ...sections.experience, href: "/#experience" },
  { ...sections.contact, href: "/#contact" },
];

export const spec = [
  { label: "Role", value: site.role },
  { label: "Based in", value: site.location },
  { label: "Availability", value: "Full-time roles and freelance projects" },
  { label: "Focus", value: "Full stack web applications" },
  { label: "Education", value: "BS Software Engineering, DHA Suffa University (2026)" },
];

export const stackLayers: Layer[] = [
  { layer: "Interface", tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { layer: "API", tools: ["Node.js", "Express", "PHP", "Flask"] },
  { layer: "Data", tools: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { layer: "Payments", tools: ["Stripe", "PayAdvantage"] },
  { layer: "Infrastructure", tools: ["AWS", "Docker Compose", "Vercel"] },
];

export const about = {
  paragraphs: [
    "I build business software: booking flows, payment handling, role-based dashboards, and the APIs and databases behind them.",
    "I start with the data model and the failure cases. What happens if a payment notification arrives twice, or the server restarts before an email goes out? Those questions led to verified webhooks in AAA Green Rentals and an outbox queue in Edmin.",
    "I've worked both ways: as the only developer on a client's car rental system, answering for requirements, fixes and releases, and as part of a team on Edmin and FitnessTracker.",
    "Next, I want to work on a product team where I can go deeper into system design, testing and observability.",
  ],
};

// Every step points at a decision documented in that project's case study.
export const approach = [
  {
    title: "Start from the people using it",
    body: "Work out who touches the records and what each of them needs to see.",
    project: "aaa-green-rentals",
    evidence:
      "Online bookings and branch dispatch share one database, so a paid booking reaches the staff who dispatch the car.",
  },
  {
    title: "Model the data and the failure cases",
    body: "Decide what happens when a request fails halfway, before writing the screen.",
    project: "edmin",
    evidence:
      "Emails go through an outbox and BullMQ workers, so a failed email never fails the request and is never lost.",
  },
  {
    title: "Pick the simplest thing that works",
    body: "Choose the option that is easiest to run, and upgrade only when it falls short.",
    project: "aaa-green-rentals",
    evidence: "The staff dashboard polls every 30 seconds instead of holding WebSockets open.",
  },
  {
    title: "Keep parts replaceable",
    body: "Draw boundaries so one piece can change without touching the rest.",
    project: "bigdata-edupredict",
    evidence: "Each prediction model runs as its own Flask service and can be updated or replaced on its own.",
  },
  {
    title: "Review what I'd change",
    body: "Look back at shipped work and write down its weak spots.",
    project: "fitness-tracker",
    evidence: "Sign-up codes live in server memory today. Moving them to the database is first on the list.",
  },
];
