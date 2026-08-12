"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactGaming() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 relative">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">[ 06 // SECURE CHANNEL ]</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Initialize Transmission.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-6"
        >
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="OPERATOR NAME" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500" />
              <input type="email" placeholder="SECURE EMAIL" className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500" />
            </div>
            <textarea rows={4} placeholder="TRANSMISSION MESSAGE..." className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500" />
            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold font-mono text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/20 active:scale-95 transition-all">
              Transmit Data //
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
