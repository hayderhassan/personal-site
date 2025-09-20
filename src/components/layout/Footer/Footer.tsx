"use client";

export const Footer: React.FC = () => (
  <footer className="bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-700 mt-8">
    <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
      © {new Date().getFullYear()} Hayder Hassan. All rights reserved.
    </div>
  </footer>
);
