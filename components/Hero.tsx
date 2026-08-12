"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";

const SceneBackground = dynamic(() => import("./SceneBackground"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden noise"
    >
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 bg-grid-glow" />
      <SceneBackground variant="hero" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="section-eyebrow">Sales Manager · Webtel Electrosoft Ltd</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight mb-6">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-amber">
              Govindarajan
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed">
            {profile.summary[0]}
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full bg-white text-void font-semibold hover:shadow-glow-amber transition-shadow"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full glass-panel hover:border-neon-cyan/60 transition-colors"
            >
              View experience
            </a>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-xl">
            {profile.stats.map((s) => (
              <div key={s.label} className="glass-panel px-3 py-4 text-center">
                <div className="font-display text-2xl text-neon-amber">{s.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-wide text-white/50 mt-1 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-neon-violet/30 via-neon-cyan/20 to-neon-amber/20 blur-2xl animate-float" />
          <div className="relative glass-panel p-3 rounded-[2rem] w-[300px] md:w-[360px]">
            <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5]">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="360px"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
