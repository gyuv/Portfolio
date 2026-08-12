"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { profile } from "@/data/resume";

const items = [
  { k: "Email", v: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
  { k: "LinkedIn", v: "/in/yuvaraj-govindarajan", href: profile.linkedin, Icon: Linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-grid-glow opacity-60" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-eyebrow justify-center"
        >
          Get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-semibold mb-6 max-w-2xl mx-auto leading-tight"
        >
          Have a deal worth discussing?
        </motion.h2>
        <p className="text-white/50 max-w-md mx-auto mb-16">
          Open to Sales Manager, Account Management, and B2B software sales opportunities —
          based in {profile.location}.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
          {items.map(({ k, v, href, Icon }, i) => (
            <motion.a
              key={k}
              href={href}
              target={k === "LinkedIn" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 flex flex-col items-center gap-3 hover:border-neon-amber/50 hover:shadow-glow-amber transition-all"
            >
              <Icon className="w-5 h-5 text-neon-amber" strokeWidth={1.5} />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {k}
                </div>
                <div className="text-sm mt-1 text-white/85 break-all">{v}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
