"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Layers } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { cn } from "@/lib/utils";

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
    <section id="projects" className="py-32 relative bg-[#050505] overflow-hidden">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
       
       {/* Ambient Glow */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium tracking-wider uppercase mb-6 hover:bg-white/10 transition-colors">
            <Layers size={14} />
            <span>Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            A diverse collection of my recent work, carefully crafted and designed.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-4"
        >
          {projects.map((project, index) => {
             // Bento Grid Logic for 6 items
             let spanClass = "md:col-span-1 md:row-span-1";
             
             if (index === 0) spanClass = "md:col-span-2 md:row-span-2";
             else if (index === 1) spanClass = "md:col-span-1 md:row-span-2";
             else if (index === 2) spanClass = "md:col-span-2 md:row-span-1";
             else if (index === 3) spanClass = "md:col-span-1 md:row-span-1";
             else if (index === 4) spanClass = "md:col-span-1 md:row-span-1";
             else if (index === 5) spanClass = "md:col-span-2 md:row-span-1";

             return (
               <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index} 
                  className={spanClass}
               />
             );
          })}
        </motion.div>
      </div>
    </section>
  );
}
