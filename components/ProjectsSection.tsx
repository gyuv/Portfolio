"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  metrics: string;
}

const projectsData: Project[] = [
  {
    id: "1",
    title: "Enterprise QA Automation Framework",
    category: "Quality Assurance",
    description: "Designed and scaled comprehensive automation testing pipelines across enterprise digital ecosystems, ensuring high resilience and stability.",
    techStack: ["Automation", "Selenium", "CI/CD", "Python"],
    metrics: "99.9% Test Reliability",
  },
  {
    id: "2",
    title: "Sales Strategy & Target Execution",
    category: "Sales Development",
    description: "Spearheaded strategic sales initiatives and customer relationship management to consistently achieve aggressive regional targets.",
    techStack: ["CRM", "Sales Strategy", "B2B Lead Gen"],
    metrics: "High Conversion Growth",
  },
  {
    id: "3",
    title: "E-Commerce Workflow Optimization",
    category: "Enterprise Systems",
    description: "Streamlined complex client onboarding and verification processes, optimizing performance benchmarks across major retail platforms.",
    techStack: ["Process Optimization", "Analytics", "Workflow Automation"],
    metrics: "40% Faster Turnaround",
  },
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Quality Assurance", "Sales Development", "Enterprise Systems"];

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 px-6 lg:px-12 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide uppercase"
          >
            Featured Work & Milestones
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Showcasing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Impactful Execution</span>.
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 flex flex-col justify-between hover:border-indigo-500/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-indigo-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2.5 py-1 rounded-lg border border-cyan-800/30">
                    {project.metrics}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tech}
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
