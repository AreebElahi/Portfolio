import Link from "next/link";
import { nav, site } from "@/data/site";
import { Monogram } from "@/components/ui/icons";

const social = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "X", href: site.x },
  { label: "Email", href: `mailto:${site.email}` },
];

const link = "inline-block py-1 text-on-band underline-offset-4 hover:underline";

export function Footer() {
  return (
    <footer className="band border-t border-on-band/20 bg-band text-sm text-muted-band">
      <div className="container-page grid gap-8 py-10 md:grid-cols-[1fr_auto_auto] md:gap-14">
        <div>
          <p className="flex items-center gap-3 font-display text-base font-bold text-on-band">
            <Monogram size={24} />
            {site.name}
          </p>
          <p className="mt-2">
            {site.role} · {site.location}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="label mb-2">Sections</p>
          <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-1">
            {nav.map(({ title, href }) => (
              <li key={href}>
                <Link href={href} className={link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="label mb-2">Elsewhere</p>
          <ul className="grid grid-cols-2 gap-x-8 md:grid-cols-1">
            {social.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-wrap justify-between gap-4 border-t border-on-band/20 py-5">
        <p>
          © {new Date().getFullYear()} {site.name} · Built with Next.js and Tailwind CSS
        </p>
        <Link href="#main" className={link}>
          Back to top
        </Link>
      </div>
    </footer>
  );
}
