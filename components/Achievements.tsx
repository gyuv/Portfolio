"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="section-eyebrow">Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Moments that mattered.</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass-panel p-6 flex items-start gap-4"
            >
              <span className="font-display text-2xl text-neon-amber leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-white/75 leading-relaxed pt-1">{a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
