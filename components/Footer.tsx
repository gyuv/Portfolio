import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40 uppercase tracking-widest">
        <span>{profile.name} — {profile.location}</span>
        <span>© {new Date().getFullYear()} · Built from CV</span>
      </div>
    </footer>
  );
}
