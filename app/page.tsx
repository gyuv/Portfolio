import React from "react";
import Navbar from "@/components/Navbar";
import SceneBackground from "@/components/SceneBackground";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import AIChatWidget from "@/components/AIChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative selection:bg-indigo-500 selection:text-white">
      {/* Immersive 3D Particle Background */}
      <SceneBackground />

      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Floating Interactive AI Assistant */}
      <AIChatWidget />
    </div>
  );
}
