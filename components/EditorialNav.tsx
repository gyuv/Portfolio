"use client";

import React from "react";
import Link from "next/link";

export default function EditorialNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-16 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-mono tracking-widest text-white uppercase">
          Yuvaraj Rautela <span className="text-neutral-500">// Portfolio</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
        <Link href="#work" className="hover:text-white transition-colors">SELECTED WORK</Link>
        <Link href="#about" className="hover:text-white transition-colors">ABOUT</Link>
        <Link href="#experience" className="hover:text-white transition-colors">EXPERIENCE</Link>
        <Link href="#contact" className="hover:text-white transition-colors">CONTACT</Link>
      </nav>

      <a
        href="#contact"
        className="px-4 py-2 rounded-full bg-white text-black font-mono text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all font-medium"
      >
        Let&apos;s Talk
      </a>
    </header>
  );
}
