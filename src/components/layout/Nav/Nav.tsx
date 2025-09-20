"use client";

import Link from "next/link";

export const Nav: React.FC = () => (
  <header className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-700">
    <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        Hayder Hassan
      </Link>
      <div className="space-x-4">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  </header>
);
