import React from "react";
import CyberBackground from "@/components/CyberBackground";
import SidebarNav from "@/components/SidebarNav";
import HeroGaming from "@/components/HeroGaming";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative selection:bg-cyan-500 selection:text-black font-sans">
      {/* 3D WebGL Particle Starfield Background */}
      <CyberBackground />

      {/* Fixed Left Sidebar Navigation */}
      <SidebarNav />

      {/* Main Container Offset for Sidebar */}
      <main className="lg:pl-80 flex flex-col min-h-screen relative z-10">
        <HeroGaming />
      </main>
    </div>
  );
}
