"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="py-8 border-t border-white/10 text-center text-gray-500 text-sm"
    >
      <p> {siteConfig.footer.text}</p>
    </motion.footer>
  );
}
