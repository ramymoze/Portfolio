"use client";

import { motion } from "framer-motion";

/* ---------- Code block data ---------- */
interface CodeLine {
  delay: number;
  indent?: boolean;
  tokens: { text: string; color: string }[];
}

const codeLines: CodeLine[] = [
  {
    delay: 0,
    tokens: [
      { text: "const", color: "text-pink-500" },
      { text: " dev", color: "text-blue-400" },
      { text: " = ", color: "text-white/40" },
      { text: "{", color: "text-yellow-300" },
    ],
  },
  {
    delay: 0.25,
    indent: true,
    tokens: [
      { text: "name", color: "text-white/80" },
      { text: ": ", color: "text-white/40" },
      { text: '"Ramy"', color: "text-green-400" },
      { text: ",", color: "text-white/20" },
    ],
  },
  {
    delay: 0.5,
    indent: true,
    tokens: [
      { text: "role", color: "text-white/80" },
      { text: ": ", color: "text-white/40" },
      { text: '"Full Stack"', color: "text-green-400" },
      { text: ",", color: "text-white/20" },
    ],
  },
  {
    delay: 0.75,
    indent: true,
    tokens: [
      { text: "passion", color: "text-white/80" },
      { text: ": ", color: "text-white/40" },
      { text: "true", color: "text-purple-400" },
      { text: ",", color: "text-white/20" },
    ],
  },
  {
    delay: 1.0,
    indent: true,
    tokens: [
      { text: "available", color: "text-white/80" },
      { text: ": ", color: "text-white/40" },
      { text: "true", color: "text-emerald-400" },
    ],
  },
  {
    delay: 1.25,
    tokens: [{ text: "};", color: "text-yellow-300" }],
  },
];

/* ---------- Floating badges ---------- */
const floatingBadges = [
  { label: "React",    dot: "#61DAFB", className: "top-0 left-2",    entranceDelay: 1.6, floatDuration: 3   },
  { label: "Next.js",  dot: "#ffffff", className: "top-4 right-0",   entranceDelay: 1.9, floatDuration: 3.5 },
  { label: "Node.js",  dot: "#339933", className: "bottom-4 left-0", entranceDelay: 2.2, floatDuration: 4   },
  { label: "TS",       dot: "#3178C6", className: "bottom-0 right-6",entranceDelay: 2.5, floatDuration: 3.2 },
];

/* ---------- Component ---------- */
export function MobileHeroVisual() {
  return (
    <div className="lg:hidden relative mt-10 py-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating tech badges */}
      {floatingBadges.map((badge) => (
        <motion.span
          key={badge.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.4, delay: badge.entranceDelay },
            scale:   { duration: 0.4, delay: badge.entranceDelay, type: "spring", stiffness: 200 },
            y:       { duration: badge.floatDuration, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] font-semibold text-white/60 backdrop-blur-md ${badge.className}`}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: badge.dot }}
          />
          {badge.label}
        </motion.span>
      ))}

      {/* Terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.2, type: "spring", stiffness: 100, damping: 15 }}
        className="relative z-10 mx-auto max-w-[280px]"
      >
        {/* Animated gradient border — glow layer */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent animate-gradient opacity-40 blur-[4px]" />
        {/* Animated gradient border — crisp layer */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent animate-gradient opacity-70" />

        {/* Card body */}
        <div className="relative p-5 rounded-2xl bg-[#0a0a0a]">
          {/* Terminal header */}
          <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-auto text-[10px] text-white/20 font-mono tracking-wider">
              profile.ts
            </span>
          </div>

          {/* Code lines — staggered entrance */}
          <div className="space-y-2 font-mono text-[13px] leading-relaxed">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 1.5 + line.delay }}
                className={line.indent ? "pl-5" : ""}
              >
                {line.tokens.map((token, j) => (
                  <span key={j} className={token.color}>
                    {token.text}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Blinking cursor */}
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: 2.9 }}
            className="mt-3 w-[7px] h-[18px] bg-primary/60 rounded-[1px]"
          />
        </div>
      </motion.div>
    </div>
  );
}
