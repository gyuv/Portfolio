"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="section-eyebrow">Foundation</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Education & recognition.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-panel overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={edu.image}
                  alt={edu.school}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-sm text-white/50">{edu.school}</p>
                <p className="font-mono text-xs text-neon-cyan/70 mt-3">{edu.dates}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
