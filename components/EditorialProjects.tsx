"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialProjects() {
  const projects = [
    {
      number: "01",
      title: "Enterprise Test Automation Framework",
      category: "QA Engineering // Core Architecture",
      desc: "Designed and scaled end-to-end test frameworks, minimizing regression risks across high-traffic consumer platforms.",
    },
    {
      number: "02",
      title: "B2B Sales Pipeline & Revenue Operations",
      category: "Sales Strategy // Growth",
      desc: "Managed multi-product portfolios, driving structured customer outreach, pipeline optimization, and revenue targets.",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">// SELECTED WORK</span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mt-1">Featured Deployments</h2>
        </div>
        <span className="text-xs font-mono text-neutral-400">2018 — Present</span>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 sm:p-12 rounded-3xl bg-[#121216] border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between space-y-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-500">{project.number}</span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                {project.category}
              </span>
            </div>

            <div className="space-y-3 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-medium text-white group-hover:text-neutral-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                {project.desc}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-white group-hover:translate-x-1 transition-transform cursor-pointer">
              <span>EXPLORE CASE STUDY</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
