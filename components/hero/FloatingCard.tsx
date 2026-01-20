"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FloatingCardProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    delay: number;
    x: number;
    y: number;
    color: string;
}

export function FloatingCard({ icon: Icon, title, subtitle, delay, x, y, color }: FloatingCardProps) {
  return (
    <motion.div
      animate={{ y: [y, y - 15, y] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-10 p-4 bg-[#1a1a1a]/80 backdrop-blur-md border ${color} rounded-xl shadow-xl flex items-center gap-4 w-60`}
      style={{ translateX: x, translateY: y }}
    >
      <div className="p-3 bg-white/5 rounded-lg">
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <h3 className="font-bold text-white text-sm">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}
