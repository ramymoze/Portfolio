"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Layers } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-[#050505] overflow-hidden">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
       
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wider uppercase mb-6">
            <Layers size={14} />
            <span>Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A diverse collection of my recent work, carefully crafted and designed.
          </p>
        </motion.div>

        {/* MODERN UNIFORM GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
