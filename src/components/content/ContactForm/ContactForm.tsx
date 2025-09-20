"use client";
import { Section } from "@/components/shared/Section";

export const ContactForm: React.FC = () => (
  <Section className="max-w-md text-center">
    <h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border rounded bg-zinc-50 dark:bg-zinc-900"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border rounded bg-zinc-50 dark:bg-zinc-900"
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full px-4 py-2 border rounded bg-zinc-50 dark:bg-zinc-900"
      />
      <button type="submit" className="w-full py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition">
        Send Message
      </button>
    </form>
  </Section>
);
