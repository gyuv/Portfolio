"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/city-chennai.svg"
          alt="Chennai skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-neon-cyan/20 to-neon-violet/20 blur-2xl" />
          <div className="relative glass-panel p-2 rounded-3xl overflow-hidden">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                sizes="480px"
                className="object-cover grayscale-[15%]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="section-eyebrow">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-8 leading-tight">
            Based in Chennai.
            <br />
            <span className="text-white/50">Building client relationships that close.</span>
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed">
            {profile.summary.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="font-mono text-xs px-4 py-2 rounded-full glass-panel text-white/70">
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-xs px-4 py-2 rounded-full glass-panel text-white/70 hover:text-neon-cyan transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
