"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

const links = [...nav, { title: "Resume", href: site.resume }];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(!open)}
        className="grid size-11 place-items-center rounded-[3px] border border-ink"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="absolute inset-x-0 top-16 border-b border-ink bg-paper"
      >
        <ul className="px-5 py-2">
          {links.map(({ title, href }) => (
            <li key={href} className="border-b border-line last:border-0">
              <Link href={href} onClick={() => setOpen(false)} className="block py-3.5 font-display text-xl font-bold">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
