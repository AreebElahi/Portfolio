"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { site } from "@/data/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please write at least 10 characters.").max(5000),
});

type Values = Partial<Record<"name" | "email" | "message", string>>;
export type ContactState = { ok: boolean; message: string; values?: Values } | null;

const fallback = `Please email me directly at ${site.email}.`;

export async function sendMessage(_: ContactState, formData: FormData): Promise<ContactState> {
  const values = Object.fromEntries(
    ["name", "email", "message"].map((key) => [key, String(formData.get(key) ?? "")]),
  ) as Values;

  // Hidden field that only bots fill in. Pretend success so they move on.
  if (formData.get("company")) return { ok: true, message: "Thanks, your message was sent." };

  const parsed = schema.safeParse(values);
  if (!parsed.success) return { ok: false, message: parsed.error.issues[0].message, values };

  const { SMTP_EMAIL: user, SMTP_PASSWORD: pass } = process.env;
  if (!user || !pass) return { ok: false, message: `The form is unavailable. ${fallback}`, values };

  const { name, email, message } = parsed.data;
  try {
    await nodemailer.createTransport({ service: "gmail", auth: { user, pass } }).sendMail({
      from: `Portfolio contact <${user}>`,
      to: site.email,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    });
    return { ok: true, message: "Thanks, your message was sent. I'll reply by email." };
  } catch {
    return { ok: false, message: `Sending failed. ${fallback}`, values };
  }
}
