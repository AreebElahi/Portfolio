import type { Metadata } from "next";
import { IBM_Plex_Mono, Schibsted_Grotesk, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/data/site";
import { education, skills } from "@/data/resume";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono" });

const title = `${site.name} | ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, url: "/", title, description: site.description },
  twitter: { card: "summary_large_image", title, description: site.description },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin, site.x],
  alumniOf: education.map(({ org }) => ({ "@type": "EducationalOrganization", name: org })),
  knowsAbout: skills.flatMap(({ items }) => items),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-surface focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
