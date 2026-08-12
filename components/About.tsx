"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
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
            About Me
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Engineering Quality, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Driving Sales</span>.
          </motion.h2>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg"
        >
          <p>
            I am a dedicated professional blending a robust technical foundation with high-impact sales leadership[cite: 1]. With over <strong className="text-white">7.5 years of comprehensive experience</strong> in quality assurance, I specialize in both manual and automation testing frameworks that ensure elite reliability across modern software systems[cite: 1].
          </p>
          <p>
            My career journey spans prominent enterprise ecosystems including <strong className="text-indigo-400">Amazon, BYJU&apos;S, Square Yards, and Webtel Electrosoft</strong>[cite: 1]. Beyond technical testing, I leverage my expertise as a Sales Development Representative to execute targeted sales strategies, cultivate critical client relationships, and consistently achieve aggressive growth milestones[cite: 1].
          </p>
          <p>
            This unique intersection of engineering rigor and commercial acumen allows me to bridge technical execution with business growth seamlessly[cite: 1].
          </p>
        </motion.div>

      </div>
    </section>
  );
}
