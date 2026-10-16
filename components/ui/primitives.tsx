import Link from "next/link";
import type { ComponentProps } from "react";

const buttonBase =
  "inline-flex h-11 items-center gap-2 rounded-[3px] px-5 text-[0.9375rem] font-semibold transition-colors";
const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "border border-ink text-ink hover:bg-ink hover:text-paper",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof buttonVariants };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={`${buttonBase} ${buttonVariants[variant]} ${className}`} {...props} />;
}

export function ChipList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap content-start items-start gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="rounded-[2px] border border-line bg-surface px-2 py-0.5 font-mono text-[0.8125rem]">
          {item}
        </li>
      ))}
    </ul>
  );
}
