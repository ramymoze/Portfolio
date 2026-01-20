"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillItem {
    name: string;
    icon: IconType | LucideIcon;
    color?: string;
}

interface MarqueeBandProps {
    items: SkillItem[];
    direction: "left" | "right";
    velocity?: number;
}

export function MarqueeBand({ items, direction, velocity = 15 }: MarqueeBandProps) {
  
  // Calculate total "weight" (visual width) of the content
  // We assume each character is ~1 unit + 4 units for padding/icon
  const totalWeight = items.reduce((acc, item) => acc + item.name.length + 4, 0);
  
  // Duration = Distance / Speed
  // Distance is proportional to totalWeight
  // We multiply by a constant to get seconds
  const duration = totalWeight / velocity;

  return (
    <div className="relative flex overflow-hidden group py-4">
      
      <motion.div 
        className="flex gap-8 shrink-0"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{ 
          ease: "linear", 
          duration: duration, 
          repeat: Infinity,
        }}
      >
        {/* Triple the items to ensure seamless loop on wide screens */}
        {[...items, ...items, ...items].map((item, i) => (
          <div 
            key={`${item.name}-${i}`}
            className="relative flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 backdrop-blur-sm overflow-hidden group/card hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
          >
             <item.icon 
               className="relative z-10 transition-colors duration-300" 
               size={32} 
               style={{ color: item.color || '#9ca3af' }}
             />
             <span className="relative z-10 text-xl font-bold text-gray-300 group-hover/card:text-white transition-colors">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
