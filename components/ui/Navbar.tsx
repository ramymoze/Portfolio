"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/data/personal-info";
import { siteConfig } from "@/data/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = siteConfig.navLinks;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform text-white">
          {personalInfo.logo}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a
             href={`mailto:${personalInfo.email}`}
             className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary/30 hover:to-secondary/30 text-white text-sm font-bold transition-all border border-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] shadow-lg"
          >
            {siteConfig.cta.getInTouch}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
