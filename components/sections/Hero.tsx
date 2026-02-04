"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, LayoutTemplate, Terminal, Cloud, Smartphone, Monitor } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import { siteConfig } from "@/data/site-config";
import { FloatingCard } from "@/components/hero/FloatingCard";
import { ProfileCodeBlock } from "@/components/hero/ProfileCodeBlock";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-grid-white">
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          {personalInfo.availableForHire && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-8"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              Available for hire
            </motion.div>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Architecting <br />
            <span className="text-primary">{personalInfo.tagline.split(' ').pop()}</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
          >
            {personalInfo.description}
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              {siteConfig.cta.viewProjects} <ArrowRight size={20} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all"
            >
              {siteConfig.cta.contactMe}
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Floating Tech Stack Visual */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative h-[600px] hidden lg:flex items-center justify-center perspective-1000"
        >
           {/* Decorative Orb */}
           <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

           {/* Floating Cards Stack */}
           <FloatingCard 
              icon={LayoutTemplate} 
              title="Frontend" 
              subtitle="Next.js / React" 
              delay={0} 
              x={-160} 
              y={-90} 
              color="border-primary/50"
           />
           <FloatingCard 
              icon={Database} 
              title="Backend" 
              subtitle="Node / Supabase" 
              delay={-1} 
              x={160} 
              y={-90} 
              color="border-secondary/50"
           />
           <FloatingCard 
              icon={Terminal} 
              title="DevOps" 
              subtitle="CI/CD / Docker" 
              delay={-2} 
              x={-140} 
              y={120} 
              color="border-accent/50"
           />
            <FloatingCard 
              icon={Smartphone} 
              title="Mobile" 
              subtitle="React Native / Expo" 
              delay={-1.5} 
              x={140} 
              y={120} 
              color="border-purple-500/50"
           />
           <FloatingCard 
              icon={Cloud} 
              title="Cloud" 
              subtitle="AWS / Firebase" 
              delay={-2.5} 
              x={-240} 
              y={10} 
              color="border-sky-500/50"
           />
            <FloatingCard 
              icon={Monitor} 
              title="Desktop Apps" 
              subtitle="Electron" 
              delay={-3} 
              x={280} 
              y={10} 
              color="border-emerald-500/50"
           />
           
           {/* Central Code Block */}
           <ProfileCodeBlock />
        </motion.div>
      </div>
    </section>
  );
}
