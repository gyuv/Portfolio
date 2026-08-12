"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 mt-4">
        <div className="glass-panel flex items-center justify-between px-6 py-3">
          <a href="#hero" className="font-display text-lg font-semibold tracking-wide">
            YG<span className="text-neon-amber">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-widest text-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-neon-amber transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs uppercase tracking-widest border border-glass-border rounded-full px-4 py-2 hover:border-neon-amber hover:text-neon-amber transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
