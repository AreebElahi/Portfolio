# Areeb Elahi — Full Stack Developer

I build complete web applications, from database to deployment: booking and payment flows, role-based dashboards, REST APIs and the background jobs behind them.

**[areebelahi.dev](https://areebelahi.dev)** · [Resume (PDF)](public/AreebElahi_Resume.pdf) · [LinkedIn](https://www.linkedin.com/in/areebelahi/) · dev.areebelahi@gmail.com

This repository is the source of my portfolio site. The site is small, so the code is meant to be read: it shows how I structure a Next.js project, where I draw boundaries and what I leave out.

## The work it presents

| Project                                                                  | What it is                                                              | My part                                                       | Stack                                   |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------- |
| [Edmin](https://areebelahi.dev/projects/edmin)                           | University administration platform for admins, faculty, HR and students | Frontend, API, role-based access, Redis and BullMQ jobs, team | Next.js, Express, PostgreSQL, Prisma    |
| [AAA Green Rentals](https://areebelahi.dev/projects/aaa-green-rentals)   | Car rental booking site and staff operations dashboard for a client     | Sole developer, including both payment integrations           | PHP, MySQL, Stripe, PayAdvantage, AWS   |
| [BidData EduPredict](https://areebelahi.dev/projects/bigdata-edupredict) | University portals with three prediction services                       | Portals, Express API, Flask model integration, solo           | React, Express, MongoDB, Flask, XGBoost |
| [FitnessTracker](https://areebelahi.dev/projects/fitness-tracker)        | Workout and nutrition tracker with dashboards and PDF reports           | Frontend and API, team                                        | React, Express, MongoDB, Chart.js       |

Each project has a case study on the site covering the problem, what I built, the key decisions and what I would change.

## How the site is built, and why

- **Content is data.** Every word on the site lives in `data/` (`site.ts`, `projects.ts`, `resume.ts`). Components never hard-code copy, so updating the site never means touching markup. One project entry produces its card, its case-study page and its sitemap entry.
- **Server-first.** Every page is statically generated. Only three small components run in the browser: the mobile menu, the contact form and the scroll reveal. There is no CMS, no database and no state library, because a portfolio needs none of them.
- **Few dependencies.** Next.js, React, Tailwind CSS, Zod, Nodemailer and lucide-react icons. Motion is plain CSS, and the scroll reveal is one small IntersectionObserver.
- **Honest content.** Nothing is invented: no skill percentages, no made-up metrics, and every approach step links to the project that shows it.
- **The contact form fails safely.** It is a React server action with Zod validation and a honeypot field. If SMTP is not configured or sending fails, the visitor keeps what they typed and is shown my email address instead.
- **Accessible by default.** Semantic landmarks and headings, a skip link, visible focus states, keyboard-operable menus and disclosures, `prefers-reduced-motion` respected, and colour pairs checked against WCAG AA (table below).
- **SEO from the Metadata API.** Per-page titles, descriptions and canonical URLs, generated Open Graph and Twitter images, `sitemap.xml`, `robots.txt` and JSON-LD `Person` data.

A Lighthouse run on the home page (mobile, October 2026) scored 100 for Accessibility and 100 for SEO.

## Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4, design tokens in `app/globals.css` (`@theme`)
- Schibsted Grotesk (headings), Source Sans 3 (body) and IBM Plex Mono (labels) through `next/font`
- Zod and Nodemailer for the contact form
- ESLint 9 (flat config) and Prettier
- Deployed on Vercel, with Vercel Speed Insights

## Design tokens

Defined once in `app/globals.css`. Contrast ratios were calculated with the WCAG 2 formula.

| Token               | Hex                   | Use                          | Contrast                                                       |
| ------------------- | --------------------- | ---------------------------- | -------------------------------------------------------------- |
| `paper` / `surface` | `#F5F0E6` / `#FFFCF5` | Page and band backgrounds    |                                                                |
| `ink`               | `#1B1915`             | Text                         | 15.45:1 on paper, 17.13:1 on surface                           |
| `muted`             | `#585246`             | Secondary text               | 6.82:1 on paper                                                |
| `primary`           | `#2B3A8F`             | Links, buttons, markers      | 8.79:1 on paper; white on it 9.98:1                            |
| `highlight`         | `#D2451E`             | Small marks only, never text | 4.01:1 on paper                                                |
| `band`              | `#1A1E3A`             | Contact and footer band      | paper text 14.32:1, `muted-band` 8.06:1, `primary-band` 8.15:1 |
| `line-strong`       | `#8C8273`             | Input borders                | 3.69:1 on surface                                              |

Earlier versions of the design are kept in [`docs/screenshots/`](docs/screenshots/).

## Project structure

```
app/                 routes, layout, metadata files (icon, OG image, sitemap, robots)
  projects/[slug]/   case-study pages, generated from data/projects.ts
components/
  layout/            header, mobile menu, footer
  sections/          home page sections: hero, about, work, approach, toolkit, experience, contact
  shared/            project card, layer strip, section marker, contact form, scroll reveal
  ui/                buttons, chips, icons, monogram
data/                all site content (site.ts, projects.ts, resume.ts)
lib/contact.ts       contact form server action
public/              resume PDF and project thumbnails
```

## Run it locally

Requires Node.js 20.9 or later.

```bash
npm install
cp .env.example .env.local   # optional: fill in to enable the contact form
npm run dev                  # http://localhost:3000
```

| Variable        | Purpose                                      |
| --------------- | -------------------------------------------- |
| `SMTP_EMAIL`    | Gmail address that sends contact form emails |
| `SMTP_PASSWORD` | Gmail App Password for that address          |

Without them the site still works, and the form asks visitors to email directly.

| Command                           | What it does               |
| --------------------------------- | -------------------------- |
| `npm run dev`                     | Development server         |
| `npm run build`                   | Production build           |
| `npm run start`                   | Serve the production build |
| `npm run lint`                    | ESLint                     |
| `npm run typecheck`               | TypeScript, no emit        |
| `npm run format` / `format:check` | Prettier write / check     |

## Updating content

- **Add a project:** add an entry to `data/projects.ts` (array order is display order, and the first entry is the featured card), then add a 16:10 thumbnail to `public/thumbnails/` as a WebP screenshot or an SVG.
- **Edit the approach steps:** `approach` in `data/site.ts`. Each step links to the case study that shows it.
- **Replace the resume:** overwrite `public/AreebElahi_Resume.pdf` with the same file name so every link keeps working.

## Deploy (Vercel)

1. Import the GitHub repository in Vercel. The Next.js preset needs no changes.
2. Add `SMTP_EMAIL` and `SMTP_PASSWORD` under Project → Settings → Environment Variables.
3. Deploy, then add the `areebelahi.dev` domain under Project → Settings → Domains.

## Contact

Open to full-time Full Stack Developer roles and freelance projects. Email **dev.areebelahi@gmail.com** or message me on [LinkedIn](https://www.linkedin.com/in/areebelahi/).
