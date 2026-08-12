"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { experience } from "@/data/resume";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray<HTMLElement>(".stage-item");
      stages.forEach((stage) => {
        gsap.fromTo(
          stage,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: stage,
              start: "top 85%",
            },
          }
        );
      });

      gsap.fromTo(
        ".track-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: trackRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1,
          },
        }
      );
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="section-eyebrow">Career Pipeline</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold">Stage by stage.</h2>
        </div>

        <div ref={trackRef} className="relative pl-10">
          <div className="track-line absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-neon-amber via-neon-cyan to-neon-violet" />

          {experience.map((role, i) => (
            <div key={role.role} className="stage-item relative pb-16 last:pb-0">
              <span
                className={`absolute -left-[42px] top-1 w-3.5 h-3.5 rounded-full border-2 ${
                  i === 0
                    ? "bg-neon-amber border-neon-amber shadow-glow-amber"
                    : "bg-void border-white/30"
                }`}
              />
              <div className="glass-panel p-7">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neon-amber/80">
                    {role.tag}
                  </span>
                  <span className="font-mono text-xs text-white/40">{role.dates}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">{role.role}</h3>
                <p className="text-sm text-white/50 mb-5">{role.company}</p>
                <ul className="space-y-2.5">
                  {role.bullets.map((b, bi) => (
                    <li key={bi} className="text-sm text-white/70 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-neon-cyan/70">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
