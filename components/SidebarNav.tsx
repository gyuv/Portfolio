"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SidebarNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "01 // COMMAND CENTER" },
    { href: "#about", label: "02 // PROFILE MATRIX" },
    { href: "#experience", label: "03 // EXPERIENCE GRID" },
    { href: "#projects", label: "04 // DEPLOYMENTS" },
    { href: "#skills", label: "05 // CORE STACK" },
    { href: "#contact", label: "06 // SECURE CHANNEL" },
  ];

  return (
    <>
      {/* Desktop Left Fixed Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-80 bg-slate-950/80 backdrop-blur-3xl border-r border-slate-800/80 z-50 hidden lg:flex flex-col justify-between p-10 shadow-2xl shadow-cyan-950/20">
        <div className="space-y-4">
          <div className="flex items-center gap-3.5">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/80" />
            <span className="text-lg font-black tracking-widest text-white font-mono uppercase">YUVARAJ<span className="text-cyan-400">.</span></span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase border-l-2 border-cyan-500/50 pl-3">
            Enterprise QA Architect & Sales Strategy Leader
          </p>
        </div>

        <nav className="space-y-2 my-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between px-4 py-3 rounded-xl text-[11px] font-mono text-slate-400 hover:text-cyan-300 hover:bg-slate-900/80 transition-all border border-transparent hover:border-cyan-500/30 shadow-sm"
            >
              <span>{link.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-400 transition-colors" />
            </Link>
          ))}
        </nav>

        <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2.5 backdrop-blur-md">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono">CORE STATUS</span>
            <span className="text-emerald-400 font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> OPTIMAL
            </span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">7.5+ Years Enterprise Tier</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-slate-950/90 backdrop-blur-2xl border-b border-slate-800 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-black font-mono text-white">YUVARAJ<span className="text-cyan-400">.</span></span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs"
        >
          {mobileMenuOpen ? "CLOSE [X]" : "MENU [≡]"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-slate-950/98 backdrop-blur-3xl border-b border-slate-800 z-40 p-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-400 bg-slate-900/60 border border-slate-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
