"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { AboutMe } from "@/components/contact/AboutMe";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{siteConfig.sections.contact.title.split(' ').slice(0, 3).join(' ')} <span className="text-primary">{siteConfig.sections.contact.title.split(' ').slice(3).join(' ')}</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {siteConfig.sections.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          
          {/* About Me Card */}
          <AboutMe />

          {/* User Image */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative h-[500px] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <img 
              src="/me.png" 
              alt="Zehar Mohamed Ramy" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
               <h3 className="text-2xl font-bold text-white mb-1">Zehar Mohamed Ramy</h3>
               <p className="text-primary font-medium">Full Stack Developer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
