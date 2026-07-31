# GymFlow — Modern Gym Website

A competitive, modern fitness gym website built with **React (Vite)**, **JavaScript**, and **Tailwind CSS v4**.

## Design Direction

After researching leading gym & fitness sites (Equinox, Barry’s, CrossFit affiliates, modern dark-mode fitness UIs), GymFlow uses:

- **Dark theme** (zinc-950 base) — conveys intensity, premium feel, and reduces visual fatigue
- **Lime / electric green accent** (`#a3e635`) — energetic, fresh, associated with growth & “flow”
- **Bold display typography** (Outfit) + clean body (Inter)
- Strong social proof, clear CTAs, free-trial focused conversion path
- Real photography from Unsplash (replace with your own for production)
- Mobile-first, sticky nav, smooth scroll sections

## Features

- Sticky responsive navbar with mobile menu
- Full-viewport hero with dual CTAs + member avatars / ratings
- Stats bar
- Feature grid (24/7, coaches, equipment, recovery, app, community)
- Class cards with booking CTAs
- Trainer profiles
- 3-tier pricing with highlighted popular plan
- Testimonials
- Lead-capture contact / trial form
- Full footer

## Getting Started

```bash
cd gymflow
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Lucide React icons
- Google Fonts (Inter + Outfit)

## Customization

- Colors & fonts: edit `src/index.css` (`@theme` block)
- Content: update data arrays inside each component under `src/components/`
- Images: replace Unsplash URLs with your own assets in `/public` or a CDN

## Notes

This is a high-converting landing-style single page. For production you would typically add:

- Real class booking / membership backend
- Auth & member portal
- CMS for classes & trainers
- Analytics & A/B testing on CTAs

Built to compete with modern boutique & hybrid gym websites in 2025–2026.
