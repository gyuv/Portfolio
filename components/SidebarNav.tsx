"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SidebarNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "01 // Command Center" },
    { href: "#about", label: "02 // Profile Matrix" },
    { href: "#experience", label: "03 // Experience Grid" },
    { href: "#projects", label: "04 // Deployments" },
    { href: "#skills", label: "05 // Core Stack" },
    { href: "#contact", label: "06 // Secure Channel" },
  ];

  return (
    <>
      {/* Desktop Left Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-72 bg-[#020617]/95 backdrop-blur-2xl border-r border-slate-800/80 z-50 hidden lg:flex flex-col justify-between p-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
            <span className="text-base font-black tracking-widest text-white uppercase font-mono">Yuvaraj<span className="text-cyan-400">.</span></span>
          </div>
          <p className="text-[11px] text-slate-500 font-mono tracking-tight uppercase">Enterprise QA & Sales Ops</p>
        </div>

        <nav className="space-y-1.5 my-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono text-slate-400 hover:text-cyan-400 hover:bg-slate-900/80 transition-all border border-transparent hover:border-slate-800"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono text-[10px]">SYSTEM STATUS</span>
            <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> ONLINE
            </span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">7.5+ Years Expertise</p>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-[#020617]/90 backdrop-blur-xl border-b border-slate-800 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-sm font-black tracking-wider uppercase font-mono text-white">Yuvaraj<span className="text-cyan-400">.</span></span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-mono text-xs"
        >
          {mobileMenuOpen ? "CLOSE [X]" : "MENU [≡]"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-[#020617]/98 backdrop-blur-2xl border-b border-slate-800 z-40 p-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-400 bg-slate-900/50 border border-slate-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
