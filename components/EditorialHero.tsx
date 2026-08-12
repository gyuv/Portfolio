"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EditorialHero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-16 flex flex-col justify-between max-w-6xl mx-auto">
      <div className="space-y-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300"
        >
          <span>Based in India</span>
          <span className="w-1 h-1 rounded-full bg-neutral-500" />
          <span>7.5+ Years Experience</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.08]"
        >
          Code is my logic. <br />
          <span className="text-neutral-500 font-normal">Quality is how I speak it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed"
        >
          Senior QA Architect and Enterprise Sales Strategist. I bridge deep automated/manual testing infrastructure with high-growth commercial scaling across ecosystems like Amazon, BYJU&apos;S, and Square Yards.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-12 border-t border-white/10 font-mono text-xs text-neutral-400"
      >
        <div>
          <span className="block text-white font-bold text-sm">7.5+ Years</span>
          <span>Enterprise Experience</span>
        </div>
        <div>
          <span className="block text-white font-bold text-sm">Amazon & BYJU&apos;S</span>
          <span>Previous Ecosystems</span>
        </div>
        <div>
          <span className="block text-white font-bold text-sm">QA & Sales Ops</span>
          <span>Core Domain</span>
        </div>
        <div>
          <span className="block text-emerald-400 font-bold text-sm flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Available</span>
          <span>For New Projects</span>
        </div>
      </motion.div>
    </section>
  );
}
