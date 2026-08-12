import React from "react";
import SidebarNav from "@/components/SidebarNav";
import HeroGaming from "@/components/HeroGaming";
import AboutSectionGaming from "@/components/AboutSectionGaming";
import ExperienceGaming from "@/components/ExperienceGaming";
import ProjectsGaming from "@/components/ProjectsGaming";
import SkillsGaming from "@/components/SkillsGaming";
import ContactGaming from "@/components/ContactGaming";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <SidebarNav />
      <main className="lg:pl-72 flex flex-col min-h-screen">
        <HeroGaming />
        <AboutSectionGaming />
        <ExperienceGaming />
        <ProjectsGaming />
        <SkillsGaming />
        <ContactGaming />
      </main>
    </div>
  );
}
