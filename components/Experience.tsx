"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    id: "1",
    role: "Sales Development Representative & QA Specialist",
    company: "Enterprise Ecosystems",
    period: "2018 - Present",
    description: "Driving enterprise sales strategies while leveraging extensive quality assurance expertise to ensure high-performance delivery across digital systems.",
    highlights: [
      "Over 7.5 years of comprehensive experience spanning manual and automation testing.",
      "Successfully managed enterprise sales pipelines, client relationships, and target execution.",
      "Contributed to high-growth milestones across prominent platforms like Amazon and BYJU'S."
    ],
  },
  {
    id: "2",
    role: "Quality Assurance & Technical Operations",
    company: "Amazon, BYJU'S, Square Yards & Webtel Electrosoft",
    period: "Prior Experience",
    description: "Spearheaded rigorous testing frameworks, release cycles, and quality engineering initiatives to maintain elite system standards.",
    highlights: [
      "Implemented automated test suites that drastically reduced bug leakage and deployment friction.",
      "Collaborated with cross-functional product and engineering teams to streamline user flows.",
      "Optimized operational workflows to improve overall platform stability and turnaround time."
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide uppercase"
          >
            Professional Journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            A Track Record of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Excellence</span>.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-4 hover:border-indigo-500/50 transition-all shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
                    <p className="text-sm font-medium text-indigo-400">{item.company}</p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400 w-fit">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
