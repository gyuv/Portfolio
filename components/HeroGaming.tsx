"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroGaming() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-24 lg:pt-0 overflow-hidden bg-[#020617]">
      {/* Background Cyber Grid Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & Heavy Impact Metrics */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-cyan-400 font-mono tracking-wider uppercase shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ENTERPRISE ARCHITECTURE & SALES LEADERSHIP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
          >
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">PERFECTION</span> AT SCALE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            Combining <strong className="text-white font-semibold">7.5+ years of robust QA execution</strong> (automation & manual testing across Amazon, BYJU&apos;S, Square Yards) with high-impact <strong className="text-white font-semibold">enterprise sales strategy</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold hover:opacity-90 transition-all shadow-xl shadow-cyan-500/20 active:scale-95 font-mono text-xs tracking-wider uppercase"
            >
              Access Systems //
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 font-bold hover:bg-slate-800 hover:text-white transition-all active:scale-95 font-mono text-xs tracking-wider uppercase backdrop-blur-md"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>

        {/* Right Column: Holographic Cutout Container */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-sm p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-2xl relative group overflow-hidden"
          >
            {/* Glowing Corner Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/20 transition-all" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-slate-400">OPERATOR ID</span>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/40">ACTIVE SECURE</span>
              </div>

              {/* Cutout Placeholder Frame / Image integration zone */}
              <div className="relative w-full h-64 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
                <span className="text-xs font-mono text-slate-500 text-center px-4">
                  [ DROP CUTOUT PORTRAIT ASSET HERE // ALPHA LAYER SUPPORTED ]
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 block">EXPERIENCE</span>
                  <span className="text-sm font-bold text-slate-200 font-mono">7.5+ Years</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 block">SPECIALTY</span>
                  <span className="text-sm font-bold text-cyan-400 font-mono">QA & Sales</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
