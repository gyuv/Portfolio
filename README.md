# Yuvaraj Govindarajan — Portfolio

Premium dark-mode portfolio built with Next.js 14 (App Router), Tailwind CSS,
Three.js / React Three Fiber, GSAP, and Framer Motion.

All content is sourced from the CV only — see `data/resume.ts` as the single
source of truth. Edit that file to update copy anywhere on the site.

## What's real vs. placeholder

- **Hero + About photo**: your uploaded photo (`public/images/profile.jpg`) — real.
- **College images**: `public/images/college-1.svg` / `college-2.svg` — abstract
  generated placeholders (no real campus photos were provided). Swap these for
  real photos of Rajalakshmi Engineering College and Panimalar Polytechnic
  College by replacing the files at the same paths (jpg/png work too — just
  update the `image` path in `data/resume.ts`).
- **City visual**: `public/images/city-chennai.svg` — an abstract skyline
  silhouette used as a subtle background layer in the About section, not a
  real photo of Chennai. Replace with a real cityscape photo the same way.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & deploy

```bash
npm run build
npm run start
```

Deploys cleanly to Vercel (recommended — zero config) or any Node host.
For Vercel: push this repo to GitHub, then "Import Project" on vercel.com.

## Structure

```
app/            Next.js App Router entry (layout, page, global styles)
components/     All UI sections (Hero, About, Skills, Projects, Experience,
                Education, Achievements, Contact, Footer, Navbar,
                SceneBackground = Three.js scene)
data/resume.ts  All CV content — edit here, not in components
public/images/  Photo + generated placeholder visuals
```

## Notes for the developer

- `SceneBackground.tsx` is loaded via `next/dynamic` with `ssr: false` since
  Three.js requires the browser canvas.
- Tailwind theme tokens (colors, glass utilities, glow shadows) are defined in
  `tailwind.config.ts` and `app/globals.css` (`.glass-panel`, `.neon-text-*`,
  `.section-eyebrow`).
- GSAP + ScrollTrigger drive the Experience timeline reveal; Framer Motion
  drives per-section fade/slide-in on scroll.
- Reduced-motion is respected globally via a `prefers-reduced-motion` media
  query in `globals.css`.
- Update `metadataBase` and OG info in `app/layout.tsx` once the site has a
  real domain.
