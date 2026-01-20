"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

  // Mobile Detection logic
  const isMobile = project.tags.some(tag => tag === "React Native" || tag === "Mobile App" || tag === "iOS");
  
  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  // Helper indices for 3-up view
  const prevIndex = project.images ? (currentImageIndex - 1 + project.images.length) % project.images.length : 0;
  const nextIndexFn = project.images ? (currentImageIndex + 1) % project.images.length : 0;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col h-full bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 hover:bg-zinc-900/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Image Container */}
      <div className="relative w-full aspect-[16/10] bg-black/50 overflow-hidden border-b border-white/5">
         
         {/* Background Styling */}
         {isMobile ? (
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
         ) : (
             <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]" />
         )}

        {hasImages ? (
          <div className="w-full h-full flex items-center justify-center p-6 relative overflow-hidden">
            
            {/* 3-UP VIEW FOR MOBILE (if multiple images) */}
            {isMobile && hasMultipleImages ? (
                <div className="flex items-center justify-center gap-4 w-full h-full">
                    {/* Previous Image - Blurred & Smaller */}
                    <div className="relative w-[30%] h-[80%] opacity-40 grayscale blur-[1px] transform scale-0 cursor-pointer md:scale-95 transition-all duration-500" onClick={prevImage}>
                         <img 
                            src={project.images![prevIndex]} 
                            className="w-full h-full object-cover rounded-[1.5rem] border-[2px] border-[#1a1a1a]"
                         />
                    </div>
                    
                    {/* Current Image - Center Stage */}
                    <div className="relative w-[45%] h-full z-10 transition-transform duration-500 group-hover:scale-105">
                         <img 
                            key={currentImageIndex}
                            src={project.images![currentImageIndex]} 
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[2rem] border-[4px] border-[#1a1a1a] shadow-2xl"
                            style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.7))" }}
                         />
                    </div>
                    
                    {/* Next Image - Blurred & Smaller */}
                    <div className="relative w-[30%] h-[80%] opacity-40 grayscale blur-[1px] transform scale-0 cursor-pointer md:scale-95 transition-all duration-500" onClick={nextImage}>
                         <img 
                            src={project.images![nextIndexFn]} 
                            className="w-full h-full object-cover rounded-[1.5rem] border-[2px] border-[#1a1a1a]"
                         />
                    </div>
                </div>
            ) : (
                /* STANDARD SINGLE VIEW (Desktop or Mobile with 1 image) */
                <img 
                   key={currentImageIndex}
                   src={project.images![currentImageIndex]} 
                   alt={project.title}
                   className={cn(
                       "w-full h-full object-contain animate-fadeIn transition-transform duration-500 group-hover:scale-105",
                       isMobile 
                         ? "scale-95 rounded-[2rem] border-[4px] border-[#1a1a1a] shadow-xl drop-shadow-2xl" 
                         : "drop-shadow-2xl"
                   )}
                   style={{ 
                       filter: isMobile 
                         ? "drop-shadow(0 20px 40px rgba(0,0,0,0.6))" 
                         : "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
                   }}
                />
            )}

            {/* CONTROL BAR - Bottom Right */}
            {hasMultipleImages && (
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1 p-1 pl-2 bg-black/80 border border-white/10 backdrop-blur-md rounded-full shadow-lg">
                    {/* Counter */}
                    <span className="text-[10px] font-mono text-white/50 mr-1 select-none">
                        {currentImageIndex + 1}/{project.images!.length}
                    </span>
                    
                    {/* Divider */}
                    <div className="w-[1px] h-3 bg-white/10" />

                    {/* Buttons */}
                    <button 
                         onClick={prevImage}
                         className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors active:scale-90"
                         title="Previous"
                    >
                         <ArrowLeft size={12} />
                    </button>
                    <button 
                         onClick={nextImage}
                         className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors active:scale-90"
                         title="Next"
                    >
                         <ArrowRight size={12} />
                    </button>
                </div>
            )}
            
            {/* Mobile Tap Areas (Backup for easy touch) */}
            <div className="md:hidden absolute inset-0 flex z-10">
                <div className="w-1/3 h-full" onClick={prevImage} />
                <div className="w-1/3 h-full" />
                <div className="w-1/3 h-full" onClick={nextImage} />
            </div>

          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white/10 gap-2">
            <Github size={40} />
             <span className="text-[10px] uppercase font-mono tracking-widest">No Preview</span>
          </div>
        )}
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, i) => (
            <span 
              key={i} 
              className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-medium text-white/60 border border-white/5 group-hover:border-primary/20 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
