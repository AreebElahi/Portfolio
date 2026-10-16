"use client";

import { useActionState } from "react";
import { sendMessage } from "@/lib/contact";

const field = "mt-1.5 w-full rounded-[2px] border border-line-strong bg-surface px-3 py-2.5 text-base text-ink";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, null);
  const values = state?.values;

  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name
          <input name="name" required minLength={2} autoComplete="name" defaultValue={values?.name} className={field} />
        </label>
        <label className="text-sm font-semibold">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={values?.email}
            className={field}
          />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Message
        <textarea name="message" required minLength={10} rows={5} defaultValue={values?.message} className={field} />
      </label>
      <label className="hidden">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 items-center rounded-[3px] bg-primary px-5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        <p role="status" className={`text-sm ${state?.ok ? "text-primary" : "text-error"}`}>
          {state?.message}
        </p>
      </div>
    </form>
  );
}
