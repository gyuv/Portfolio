"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/resume";

const groupColors = ["neon-violet", "neon-cyan", "neon-amber", "neon-cyan"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="section-eyebrow">Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            What runs underneath.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="glass-panel p-7"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-5 pb-4 border-b border-white/10">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:border-${groupColors[gi % groupColors.length]}/60 hover:text-${groupColors[gi % groupColors.length]} transition-colors`}
                  >
                    {skill}
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
