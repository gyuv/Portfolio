"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSectionGaming() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ 02 // PROFILE MATRIX ]</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Engineering Rigor Meets Business Execution.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed"
        >
          <p>
            I am a senior professional bridging elite technical testing frameworks with high-performance commercial sales operations. With over <strong className="text-white">7.5 years of experience</strong>, my career reflects deep competence in manual and automation quality assurance across industry leaders like <strong className="text-cyan-400">Amazon, BYJU&apos;S, Square Yards, and Webtel Electrosoft</strong>.
          </p>
          <p>
            By combining rigorous system validation with strategic sales pipeline management, I ensure digital products achieve zero-defect reliability while driving aggressive business revenue targets.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
