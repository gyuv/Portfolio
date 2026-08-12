"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SkillsGaming() {
  const skills = [
    { category: "Quality Assurance", items: ["Automation Testing", "Manual Testing", "Selenium", "Bug Tracking"] },
    { category: "Sales Operations", items: ["Pipeline Management", "Client Retention", "B2B Strategy", "Target Execution"] },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ 05 // CORE STACK ]</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Technical Competencies.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 space-y-4 shadow-xl"
            >
              <h3 className="text-lg font-bold text-white font-mono">{group.category}</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {group.items.map((item, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800/80 text-cyan-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
