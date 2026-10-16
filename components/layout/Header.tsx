import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/data/site";
import { Monogram } from "@/components/ui/icons";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-page relative flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 font-display text-lg font-bold tracking-tight">
          <Monogram size={30} />
          {site.name}
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.map(({ title, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-[0.9375rem] font-semibold underline-offset-[6px] hover:underline"
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 border-l border-line py-2 pl-7 text-[0.9375rem] font-semibold text-primary hover:text-primary-hover"
              >
                Resume
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </Link>
            </li>
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
