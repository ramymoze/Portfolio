"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { Briefcase, Code, Award, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    value: "2+",
    label: "Years of Experience",
    icon: Briefcase,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    value: "15+",
    label: "Projects Completed",
    icon: Code,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: Award,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
];

function Counter({ value, inView }: { value: string; inView: boolean }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isPercentage = value.includes("%");
  const hasPlus = value.includes("+");
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!inView || !ref.current) return;

    const controls = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          const displayValue = isDecimal ? value.toFixed(1) : Math.floor(value);
          ref.current.textContent = `${displayValue}${hasPlus ? "+" : ""}${isPercentage ? "%" : ""}`;
        }
      },
    });

    return () => controls.stop();
  }, [inView, numericValue, hasPlus, isPercentage, isDecimal]);

  return (
    <h3 ref={ref} className="text-5xl font-bold text-white mb-2 tracking-tighter">
      {value}
    </h3>
  );
}

export function Experience() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={containerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0], index: number, inView: boolean }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative group p-8 rounded-3xl bg-zinc-900/50 border ${stat.border} hover:bg-zinc-900/80 transition-all duration-300`}
    >
       {/* Glow Effect */}
       <div className={`absolute top-0 right-0 w-24 h-24 ${stat.bg} blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
       
       <div className="relative z-10 flex flex-col items-center text-center">
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className={`p-4 rounded-full ${stat.bg} mb-4`}
          >
              <Icon size={24} className={stat.color} />
          </motion.div>
          
          <Counter value={stat.value} inView={inView} />
          
          <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
              {stat.label}
          </p>
       </div>
    </motion.div>
  );
}
