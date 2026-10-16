import type { Layer } from "./site";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  kind: string;
  team: "Solo" | "Team";
  role: string;
  layers: Layer[];
  repo?: string;
  live?: string;
  image: { src: string; alt: string };
  caseStudy: {
    problem: string;
    built: string[];
    decisions: { title: string; body: string }[];
    learned: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "edmin",
    title: "Edmin",
    tagline: "University administration platform for admins, faculty, HR and students.",
    summary:
      "Role-based dashboards for academics, exams, attendance, HR, payroll and finance in one system, built on a layered Express API, PostgreSQL and Redis-backed background jobs.",
    kind: "Final-year project",
    team: "Team",
    role: "I worked on the Next.js frontend and the Express API, and built the role-based access and the Redis and BullMQ background processing.",
    layers: [
      { layer: "Interface", tools: ["Next.js", "TypeScript", "React Query"] },
      { layer: "API", tools: ["Express", "Zod", "BullMQ"] },
      { layer: "Data", tools: ["PostgreSQL", "Prisma", "Redis"] },
    ],
    repo: "https://github.com/AreebElahi/Edmin",
    live: "https://edmin-system.vercel.app",
    image: { src: "/thumbnails/edmin.svg", alt: "Illustration of the Edmin admin dashboard layout" },
    caseStudy: {
      problem:
        "A university's academic, HR, finance and examination work touches the same people and records, but each role needs a different view of them and different permissions.",
      built: [
        "Accounts and access: JWT sign-in, permissions by role and an audit log.",
        "Academics: programmes, curricula, course offerings, enrolment requests and timetables.",
        "Assessment: assignments, a quiz bank, AI-generated quizzes, exam sessions and grade boundaries.",
        "Attendance for students and faculty, with correction requests.",
        "HR and payroll, plus finance: fee plans, invoices, instalments and scholarships.",
        "Communications: announcements, support tickets, complaints and an AI-assisted academic chat.",
      ],
      decisions: [
        {
          title: "Permissions stored as data",
          body: "Roles, permissions and the links between them live in database tables instead of a fixed list in code, so adding a role needs no code change.",
        },
        {
          title: "Outbox pattern for side effects",
          body: "Notifications and emails are written as outbox events and processed by BullMQ workers, and processed events are recorded so duplicates are skipped. A failed email never fails the user's request, and it is not lost.",
        },
        {
          title: "Layered API",
          body: "Requests pass through routes, controllers, services and models, with self-contained domains such as identity and notifications in their own modules.",
        },
        {
          title: "Feature-first frontend",
          body: "Each feature keeps its own API calls and React Query hooks, and each role gets its own dashboard area.",
        },
        {
          title: "Hardening and tests",
          body: "Helmet security headers, Redis-backed rate limiting, Zod request validation and Pino logging, with Jest and Supertest for the API and Playwright for end-to-end tests.",
        },
      ],
      learned: [
        "Modelling permissions as data takes more work up front, but it kept new roles out of the codebase.",
        "An outbox makes every side effect explicit, which made it clear what could be retried safely.",
      ],
    },
  },
  {
    slug: "aaa-green-rentals",
    title: "AAA Green Rentals",
    tagline: "Car rental booking site and staff operations dashboard.",
    summary:
      "Customers book and pay deposits online. Staff handle dispatch, returns, courtesy vehicles, inspections and invoicing from one dashboard on the same database.",
    kind: "Freelance client project",
    team: "Solo",
    role: "Sole developer. I built the booking site, the staff dashboard, both payment integrations and the AWS deployment.",
    layers: [
      { layer: "Interface", tools: ["PHP pages", "JavaScript", "PDF.js"] },
      { layer: "API", tools: ["PHP", "Google OAuth", "DOMPDF"] },
      { layer: "Data", tools: ["MySQL", "AWS S3"] },
      { layer: "Payments", tools: ["Stripe", "PayAdvantage"] },
    ],
    live: "http://13.127.13.150",
    image: {
      src: "/thumbnails/aaa-green-rentals.webp",
      alt: "Screenshot of the AAA Green Rentals booking page with the pick-up and return search form",
    },
    caseStudy: {
      problem:
        "The public booking site and the branch operations had to work from the same records, so an online booking reaches the staff who dispatch the car. Payments came in two shapes: one-off deposits and recurring rental instalments.",
      built: [
        "Customer site: sign-up with Google OAuth and an emailed one-time code, a booking flow with add-ons and protection packages, Stripe deposits, document upload and self-service booking changes.",
        "Dispatch and return with odometer and fuel capture, plus extra-kilometre billing.",
        "Terms and conditions signed digitally at dispatch and saved as a PDF contract.",
        "Courtesy and workshop vehicles, vehicle inspections with PDF reports, and vehicle document history.",
        "A payments console with receipts, payment reminders and a reconciliation job.",
        "Staff accounts with roles, in-app notifications and booking analytics.",
      ],
      decisions: [
        {
          title: "One gateway per payment type",
          body: "Stripe Payment Intents take one-time deposits, and the reservation is saved only after the payment succeeds. PayAdvantage runs recurring direct debits. Both gateways send signature-checked webhooks into one payment ledger.",
        },
        {
          title: "Courtesy-vehicle chain",
          body: "A replacement vehicle can itself be replaced, and every swap still links back to the original booking, so staff always see the full history.",
        },
        {
          title: "Documents are versioned, not overwritten",
          body: "Registration, insurance and licence files are kept on AWS S3 with their full history and viewed in the browser with PDF.js.",
        },
        {
          title: "Automatic insurer notice",
          body: "When a courtesy vehicle goes out, the insurer is emailed with the driver's licence attached, removing a manual step that was easy to forget.",
        },
        {
          title: "Polling instead of WebSockets",
          body: "The dashboard checks for new notifications every 30 seconds, which is enough for an internal tool and simpler to run.",
        },
      ],
      learned: [
        "Payment state has to come from the gateway, not the browser, so nothing is stored until Stripe confirms it.",
        "Matching each payment provider to one job kept both integrations simple.",
      ],
    },
  },
  {
    slug: "bigdata-edupredict",
    title: "BidData EduPredict",
    tagline: "University management system with three prediction services.",
    summary:
      "Admin, instructor and student portals for courses, attendance and marks, with Flask services that predict grades, dropout risk and course demand and explain each result.",
    kind: "Independent project",
    team: "Solo",
    role: "I built the three portals and the Express API, and integrated the three Flask prediction services.",
    layers: [
      { layer: "Interface", tools: ["React", "Material UI", "Recharts"] },
      { layer: "API", tools: ["Express", "Flask"] },
      { layer: "Data", tools: ["MongoDB"] },
      { layer: "Machine learning", tools: ["Python", "scikit-learn", "XGBoost"] },
    ],
    live: "https://big-data-edu-predict.vercel.app/",
    image: {
      src: "/thumbnails/bigdata-edupredict.svg",
      alt: "Illustration of the EduPredict dropout-risk prediction screen",
    },
    caseStudy: {
      problem:
        "Instructors usually learn that a student is struggling, or about to drop out, only after results are final.",
      built: [
        "Portals for admins, instructors and students, with courses, enrolment, attendance and marks.",
        "Instructors decide which marks and attendance records each student can see.",
        "A grade predictor: a gradient-boosting model estimates a final grade out of 20 from 26 inputs plus 4 values calculated inside the service.",
        "A dropout-risk predictor: a random-forest model gives the probability that a student drops out.",
        "A course-demand predictor: an XGBoost model suggests the most likely of 17 courses for a student profile.",
        "An admin page with charts showing which inputs matter most to each model.",
      ],
      decisions: [
        {
          title: "One service per model",
          body: "Each model runs as its own Flask service, so one can be updated or replaced without touching the others.",
        },
        {
          title: "Every prediction explains itself",
          body: "Each response includes the top factors, a confidence level and a recommended action, so instructors can see why a student was flagged.",
        },
        {
          title: "Public training data",
          body: "The models are trained on a public dataset of more than 4,400 student records (UCI, Predict Students' Dropout and Academic Success).",
        },
      ],
      learned: [
        "A prediction is only useful if people can see why it was made.",
        "Separate model services made the system easier to change than one large one.",
      ],
    },
  },
  {
    slug: "fitness-tracker",
    title: "FitnessTracker",
    tagline: "Workout and nutrition tracker with dashboards and PDF reports.",
    summary:
      "Log weekly workouts and meal plans in one account, follow calorie and nutrition trends by week, month and year, and export both as PDF.",
    kind: "Aptech diploma project",
    team: "Team",
    role: "I worked across the React frontend and the Express and MongoDB API.",
    layers: [
      { layer: "Interface", tools: ["React", "Chart.js", "jsPDF"] },
      { layer: "API", tools: ["Express", "JWT", "Nodemailer"] },
      { layer: "Data", tools: ["MongoDB", "Mongoose"] },
    ],
    repo: "https://github.com/AreebElahi/FitnessTracker",
    live: "https://fitness-tracker-plus.vercel.app",
    image: {
      src: "/thumbnails/fitness-tracker.svg",
      alt: "Illustration of the FitnessTracker dashboard with weekly charts",
    },
    caseStudy: {
      problem:
        "Workout logs and food logs usually live in separate apps, so there is no single view of calories burned against calories eaten, and the history is hard to share with a trainer.",
      built: [
        "A REST API of about 20 routes, protected by JWT.",
        "Sign-up and password reset with an emailed one-time code, plus profile photo upload.",
        "Workout routines with sets, reps, duration and weight.",
        "A meal catalogue with calories, protein, fat and carbs, assigned to days as meal plans.",
        "A dashboard with Chart.js charts by week, month and year.",
        "PDF export of both the workout and the nutrition tables.",
      ],
      decisions: [
        {
          title: "One account for both logs",
          body: "Workouts and meals belong to the same user, so the dashboard can compare them directly.",
        },
        {
          title: "Totals calculated by the API",
          body: "Weekly and yearly chart data comes from dedicated endpoints, so the browser does not have to add up raw logs.",
        },
      ],
      learned: [
        "Anything that must survive a restart belongs in the database. The sign-up codes live in server memory today, and that is the first thing I would move.",
        "I would also switch to the standard MongoDB connection string instead of hard-coded server addresses.",
      ],
    },
  },
];
