import Link from "next/link";
import { sections, site } from "@/data/site";
import { SectionMarker } from "@/components/shared/SectionMarker";
import { ContactForm } from "@/components/shared/ContactForm";

const links = [
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "in/areebelahi", href: site.linkedin },
  { label: "GitHub", value: "AreebElahi", href: site.github },
  { label: "X", value: "@areeb_elahi", href: site.x },
  { label: "Resume", value: "Download PDF", href: site.resume },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="band section-y-lg bg-band text-on-band">
      <div className="container-page">
        <SectionMarker id="contact-title" {...sections.contact} onBand />
        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="max-w-[28ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-semibold tracking-[-0.02em]">
              {sections.contact.intro}
            </p>
            <Link
              href={`mailto:${site.email}`}
              className="mt-8 inline-block font-display text-[clamp(1.375rem,3.5vw,2.5rem)] leading-tight font-extrabold tracking-[-0.03em] text-primary-band underline decoration-2 underline-offset-8 hover:text-on-band"
            >
              {site.email.split("@")[0]}
              <wbr />@{site.email.split("@")[1]}
            </Link>
            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-on-band/20 pt-6 sm:grid-cols-3">
              {links.map(({ label, value, href }) => (
                <li key={label}>
                  <p className="label text-muted-band">{label}</p>
                  <Link href={href} className="inline-block py-1 font-semibold underline-offset-4 hover:underline">
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[3px] bg-surface p-6 text-ink sm:p-8 lg:col-span-5 [&_:focus-visible]:outline-primary">
            <h3 className="label mb-5 text-muted">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
