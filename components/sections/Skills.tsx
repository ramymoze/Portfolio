"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";
import { MarqueeBand } from "@/components/skills/MarqueeBand";

interface SkillItem {
    name: string;
    icon: IconType | LucideIcon;
    color?: string;
}

interface SkillCategory {
    category: string;
    items: SkillItem[];
}

export function Skills() {
  const allSkills = (skills as SkillCategory[]).flatMap(category => category.items);
  const midpoint = Math.ceil(allSkills.length / 2);
  const topBand = allSkills.slice(0, midpoint);
  const bottomBand = allSkills.slice(midpoint);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
        {/* Background Decorative Blob */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            My <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             Constantly in motion.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col gap-16" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
          {/* We pass a fixed 'velocity' (pixels/sec approx) instead of duration */}
          {/* Velocity 50 means approx 50 "units" per second */}
          <MarqueeBand items={topBand} direction="left" velocity={2} />
          <MarqueeBand items={bottomBand} direction="right" velocity={2} />
      </motion.div>
    </section>
  );
}
