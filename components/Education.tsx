"use client";

import React from "react";
import { motion } from "framer-motion";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  badge: string;
}

const educationData: EducationItem[] = [
  {
    id: "1",
    degree: "Professional Academic Foundation",
    institution: "Accredited Institution",
    period: "Completed",
    description: "Built a robust analytical and technical foundation supporting complex problem-solving and quality assurance methodologies.",
    badge: "Academics",
  },
  {
    id: "2",
    degree: "Enterprise Certifications & Training",
    institution: "Industry Standards",
    period: "Continuous",
    description: "Ongoing professional upskilling in automation testing frameworks, sales strategy optimization, and enterprise operations.",
    badge: "Certifications",
  },
];

export default function EducationSection() {
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
            Credentials & Background
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Continuous Learning</span>.
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-4 hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-indigo-400">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
                <p className="text-xs font-semibold text-indigo-300">{item.institution}</p>

                <p className="text-sm text-slate-400 leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
