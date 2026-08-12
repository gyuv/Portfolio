"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ExperienceGaming() {
  const experiences = [
    {
      role: "Sales Development Representative & QA Specialist",
      company: "Enterprise Ecosystems",
      period: "2018 - Present",
      desc: "Driving high-impact enterprise sales pipelines while maintaining strict automated and manual testing standards across digital architectures.",
    },
    {
      role: "Quality Assurance & Technical Operations",
      company: "Amazon, BYJU'S, Square Yards & Webtel Electrosoft",
      period: "Prior Tenure",
      desc: "Executed comprehensive test cycles, bug lifecycle tracking, and release management to guarantee zero-downtime performance.",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ 03 // EXPERIENCE GRID ]</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Career Deployments.</h2>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 space-y-4 shadow-xl hover:border-cyan-500/40 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-xs font-mono text-cyan-400">{exp.company}</p>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 w-fit">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
