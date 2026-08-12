"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="section-eyebrow">Key Initiatives</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Work that moved numbers.
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs">
            Concrete initiatives pulled from each role — CRM systems, dashboards, and campaigns
            actually shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative glass-panel p-7 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-neon-violet/20 to-neon-cyan/10 blur-2xl group-hover:scale-125 transition-transform duration-500" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-neon-amber/80">
                {p.org}
              </span>
              <h3 className="font-display text-xl font-semibold mt-3 mb-3">{p.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
