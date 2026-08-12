"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-12 bg-slate-950 text-white">
      {/* Background Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-indigo-400 font-medium tracking-wide uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Enterprise Sales & Technical Expertise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Technology</span> & Strategic Sales.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            Leveraging 7.5+ years of quality assurance expertise paired with high-impact sales strategies. Showcasing proven leadership across enterprise ecosystems like Amazon and BYJU&apos;s.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 active:scale-95"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-all active:scale-95"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Core Disciplines Card */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full max-w-md p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800 shadow-2xl relative"
          >
            <div className="absolute -top-3 -right-3 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs rounded-full font-mono">
              Core Focus
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-4">Professional Matrix</h3>
            
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Sales Development</h4>
                  <p className="text-xs text-slate-400">Target execution & strategy</p>
                </div>
                <span className="text-xs font-mono text-cyan-400">Active</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Quality Assurance</h4>
                  <p className="text-xs text-slate-400">7.5+ Years Automation & Manual</p>
                </div>
                <span className="text-xs font-mono text-indigo-400">Expert</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Enterprise Experience</h4>
                  <p className="text-xs text-slate-400">Amazon, BYJU&apos;s & more</p>
                </div>
                <span className="text-xs font-mono text-emerald-400">Proven</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
