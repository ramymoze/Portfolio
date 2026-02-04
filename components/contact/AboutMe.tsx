"use client";

import { motion, useInView } from "framer-motion";
import { Mail, Github, Download, FileText } from "lucide-react";
import { personalInfo } from "@/data/personal-info";
import { siteConfig } from "@/data/site-config";
import { useRef } from "react";

export function AboutMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
       ref={ref}
       initial={{ opacity: 0, x: -50 }}
       animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
       className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8" />
      
      <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
      
      <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
        {personalInfo.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Soft Skills Chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        {personalInfo.softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white">
              <Icon size={16} className={skill.color} /> {skill.label}
            </div>
          );
        })}
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h4>
          <div className="flex gap-4">
            <a href={personalInfo.github} className="p-3 bg-white/5 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110">
              <Github size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white/5 rounded-xl border border-white/10 text-white hover:bg-white hover:text-black transition-all hover:scale-110">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <a 
          href={personalInfo.resumePath} 
          target="_blank"
          className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all flex items-center gap-2 group"
        >
          <FileText size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          <span>{siteConfig.cta.downloadResume}</span>
          <Download size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}
