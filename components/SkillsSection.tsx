"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; tag: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Quality Assurance & Testing",
    description: "7.5+ years of extensive technical expertise in manual and automated testing frameworks.",
    skills: [
      { name: "Automation Testing", level: "Expert", tag: "Core" },
      { name: "Manual Testing", level: "Expert", tag: "Core" },
      { name: "Selenium & Frameworks", level: "Advanced", tag: "Tools" },
      { name: "Bug Lifecycle Management", level: "Advanced", tag: "Process" },
    ],
  },
  {
    title: "Sales Strategy & Operations",
    description: "Driving pipeline growth, target execution, and high-impact B2B client relationships.",
    skills: [
      { name: "Sales Development", level: "Advanced", tag: "Strategy" },
      { name: "CRM Management", level: "Advanced", tag: "Tools" },
      { name: "Client Relationship Management", level: "Expert", tag: "Operations" },
      { name: "Target Execution", level: "Expert", tag: "Business" },
    ],
  },
  {
    title: "Enterprise Ecosystems",
    description: "Proven cross-functional experience across major industry-leading organizations.",
    skills: [
      { name: "Cross-functional Collaboration", level: "Expert", tag: "Leadership" },
      { name: "Workflow Optimization", level: "Advanced", tag: "Operations" },
      { name: "Process Engineering", level: "Advanced", tag: "Systems" },
      { name: "Release Management", level: "Advanced", tag: "QA/Dev" },
    ],
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 lg:px-12 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide uppercase"
          >
            Technical & Professional Matrix
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Capabilities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Core Stack</span>.
          </motion.h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base">
            Hover over any cluster node to review proficiency levels across technical quality assurance and sales leadership.
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 space-y-6 hover:border-indigo-500/50 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-100">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between transition-colors hover:border-indigo-500/40"
                  >
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 block">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-indigo-400">
                        {skill.tag}
                      </span>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
