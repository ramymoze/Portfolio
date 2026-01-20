"use client";

import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
      <p> {siteConfig.footer.text}</p>
    </footer>
  );
}
