import React from "react";
import EditorialNav from "@/components/EditorialNav";
import EditorialHero from "@/components/EditorialHero";
import EditorialProjects from "@/components/EditorialProjects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-white selection:text-black">
      <EditorialNav />
      <main className="flex flex-col">
        <EditorialHero />
        <EditorialProjects />
      </main>
    </div>
  );
}
