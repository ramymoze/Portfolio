"use client";

import { motion, useInView } from "framer-motion";
import { AppWindow, Smartphone, Server, Monitor, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: AppWindow,
    title: "Web Development",
    description: "Building blazing fast, SEO-optimized web applications using Next.js and React. From landing pages to complex dashboards.",
    tags: ["Next.js", "React", "TailwindCSS"],
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android using React Native. Native performance with a single codebase.",
    tags: ["React Native", "Expo", "iOS & Android"],
    color: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/10",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable server-side solutions, RESTful APIs, and database architecture. Secure and efficient data handling.",
    tags: ["Node.js", "Supabase", "Python"],
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    bg: "group-hover:bg-emerald-500/10",
  },
  {
    icon: Monitor,
    title: "Desktop Apps",
    description: "Native desktop applications for Windows, macOS, and Linux using Electron. Powerful desktop experiences with web technologies.",
    tags: ["Electron", "Next.js", "Cross-platform"],
    color: "text-rose-400",
    border: "group-hover:border-rose-500/50",
    bg: "group-hover:bg-rose-500/10",
  },
];

export function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           ref={headerRef}
           initial={{ opacity: 0, y: 20 }}
           animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           className="text-center mb-16"
        >
          <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             I help businesses/startups built profitable web-apps & products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {services.map((service, index) => {
             const Icon = service.icon;
             return (
                <ServiceCard key={index} service={service} index={index} Icon={Icon} />
             );
           })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, Icon }: { service: typeof services[0], index: number, Icon: any }) {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-8 rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300"
    >
     {/* Hover Glow Background */}
      <div className={`absolute inset-0 opacity-0 ${service.bg} group-hover:opacity-100 transition-opacity duration-500`} />
     
     {/* Hover Border Gradient */}
     <div className={`absolute inset-0 border border-transparent ${service.border} rounded-3xl transition-colors duration-500`} />

     <div className="relative z-10 flex flex-col h-full">
         <div className="flex justify-between items-start mb-6">
             <motion.div 
               whileHover={{ scale: 1.1, rotate: 5 }}
               transition={{ type: "spring", stiffness: 300 }}
               className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${service.color}`}
             >
                 <Icon size={28} />
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.2, rotate: 45 }}
               transition={{ type: "spring", stiffness: 300 }}
               className="p-2 rounded-full bg-white/5 text-white/30 group-hover:text-white group-hover:bg-white/10 transition-all"
             >
                 <ArrowUpRight size={20} />
             </motion.div>
         </div>

         <motion.h3 
           whileHover={{ x: 5 }}
           transition={{ type: "spring", stiffness: 300 }}
           className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors"
         >
             {service.title}
         </motion.h3>
        
        <p className="text-gray-400 leading-relaxed mb-8 flex-1">
            {service.description}
        </p>

         <div className="flex flex-wrap gap-2 mt-auto">
             {service.tags.map((tag, i) => (
                 <motion.span 
                   key={i} 
                   whileHover={{ scale: 1.1, y: -2 }}
                   className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/50 border border-white/5 group-hover:border-white/10 transition-colors"
                 >
                     {tag}
                 </motion.span>
             ))}
         </div>
     </div>
   </motion.div>
  );
}
