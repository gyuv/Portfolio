"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProjectsGaming() {
  const projects = [
    { title: "Enterprise Automation Suite", tag: "QA Engineering", desc: "Advanced test automation framework reducing deployment regression risks by 45%." },
    { title: "B2B Sales Pipeline CRM", tag: "Sales Strategy", desc: "Optimized enterprise client acquisition workflows handling multi-million tier targets." },
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ 04 // DEPLOYMENTS ]</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Key System Modules.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400">
                  {proj.tag}
                </span>
                <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
