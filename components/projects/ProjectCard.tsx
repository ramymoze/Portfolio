"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    index: number;
    className?: string;
}

export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Spotlight Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const hasImages = project.images && project.images.length > 0;
  const hasMultipleImages = project.images && project.images.length > 1;

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

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        className={cn(
            "group relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10",
            className
        )}
        onMouseMove={handleMouseMove}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Spotlight Border */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
        style={{
            background: useMotionTemplate`
            radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(139, 92, 246, 0.3),
                transparent 80%
            )
            `,
        }}
       />

      {/* FULL BLEED IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
         {hasImages ? (
             <>
                <motion.img 
                    key={currentImageIndex}
                    src={project.images![currentImageIndex]} 
                    alt={project.title}
                    initial={{ scale: 1, filter: "blur(0px)" }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    className={cn(
                        "w-full h-full transition-transform duration-700",
                        project.id === "droply-app" 
                            ? "object-cover" 
                            : "object-contain p-6 bg-[#0a0a0a]"
                    )}
                />
                
                {/* Image Navigation REMOVED from here */
                /* Navigation moved to root for z-index fixing */ }
             </>
         ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                 <Github className="text-white/10 w-20 h-20" />
            </div>
         )}
         
         {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
      </div>

      {/* CONTENT - Positioned at bottom */}
      <div className="relative z-20 mt-auto p-6 flex flex-col h-full justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        
        {/* Top-Right Link (Always visible but subtle) */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
             <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-black transition-all"
             >
                <ExternalLink size={18} />
             </a>
        </div>

        <div className="space-y-3">
             {/* Title */}
             <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-md">
                {project.title}
             </h3>

             {/* Description - Slides up and fades in */}
             <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                 <div className="overflow-hidden">
                     <p className="text-zinc-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                     </p>
                     
                     {/* Tags */}
                     <div className="flex flex-wrap gap-2 pb-1">
                        {project.tags.slice(0, 3).map((tag, i) => (
                            <span 
                            key={i} 
                            className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[11px] font-medium text-white/90 border border-white/5"
                            >
                            {tag}
                            </span>
                        ))}
                    </div>
                 </div>
             </div>
             
             {/* Brief Subtitle (Visible when not hovering/collapsed) */}
             <div className="group-hover:opacity-0 transition-opacity duration-300 absolute bottom-6 left-6">
                <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">
                    {project.tags[0]} • {project.tags[1]}
                </p>
             </div>
        </div>
      </div>

      {/* Image Navigation (Moved here for z-index stacking) */}
      {hasMultipleImages && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
            <button 
                    onClick={prevImage}
                    className="p-2 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all pointer-events-auto"
            >
                    <ArrowLeft size={16} />
            </button>
            <button 
                    onClick={nextImage}
                    className="p-2 rounded-full bg-black/50 border border-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all pointer-events-auto"
            >
                    <ArrowRight size={16} />
            </button>
        </div>
      )}
    </motion.div>
  );
}
