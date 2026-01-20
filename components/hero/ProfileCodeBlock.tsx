"use client";

import { motion } from "framer-motion";

export function ProfileCodeBlock() {
  return (
    <motion.div 
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="z-20 p-6 bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl w-80"
    >
       <div className="flex gap-2 mb-4">
         <div className="w-3 h-3 rounded-full bg-red-500" />
         <div className="w-3 h-3 rounded-full bg-yellow-500" />
         <div className="w-3 h-3 rounded-full bg-green-500" />
       </div>
       <div className="space-y-2 font-mono text-sm">
         <div className="flex gap-2">
            <span className="text-pink-500">const</span>
            <span className="text-blue-400">developer</span>
            <span className="text-white">=</span>
            <span className="text-yellow-300">{"{"}</span>
         </div>
         <div className="pl-4 flex gap-2">
            <span className="text-white">name:</span>
            <span className="text-green-400">&quot;Zehar Mohamed Ramy&quot;</span>,
         </div>
         <div className="pl-4 flex gap-2">
            <span className="text-white">role:</span>
            <span className="text-green-400">&quot;Full Stack&quot;</span>,
         </div>
         <div className="pl-4 flex gap-2">
            <span className="text-white">passion:</span>
            <span className="text-purple-400">true</span>
         </div>
         <div className="text-yellow-300">{"}"}</div>
       </div>
    </motion.div>
  );
}
