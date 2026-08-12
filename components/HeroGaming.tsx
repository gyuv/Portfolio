"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroGaming() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 lg:px-16 pt-24 lg:pt-0 z-10">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs text-cyan-400 font-mono tracking-widest uppercase shadow-xl backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            ELITE QA ARCHITECTURE & SALES LEADERSHIP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white"
          >
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400">PERFECTION</span> AT SCALE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light"
          >
            Merging <strong className="text-cyan-300 font-semibold">7.5+ years of rigorous QA execution</strong> (automation & manual testing across Amazon, BYJU&apos;S, Square Yards) with high-octane <strong className="text-cyan-300 font-semibold">enterprise sales strategy</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-bold font-mono text-xs tracking-widest uppercase shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all border border-cyan-400/30"
            >
              Access Deployments //
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 text-slate-200 font-bold font-mono text-xs tracking-widest uppercase backdrop-blur-2xl hover:bg-slate-800 hover:text-white hover:border-cyan-500/50 transition-all"
            >
              Initiate Contact
            </a>
          </motion.div>
        </div>

        {/* Right Column: Holographic Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md p-8 rounded-3xl bg-slate-900/50 backdrop-blur-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-mono text-slate-400">OPERATOR MATRIX</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60 animate-pulse">SECURE MASK</span>
              </div>

              {/* Cutout Portrait Placeholder Box */}
              <div className="relative w-full h-80 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/50 transition-all">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
                <span className="text-xs font-mono text-slate-500 text-center px-6 leading-relaxed">
                  [ DROP YOUR CUTOUT PORTRAIT PNG HERE // TRANSPARENT ALPHA SUPPORTED ]
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 block">EXPERIENCE</span>
                  <span className="text-sm font-bold text-white font-mono">7.5+ Years</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-500 block">SPECIALTY</span>
                  <span className="text-sm font-bold text-cyan-400 font-mono">QA & Sales Ops</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
