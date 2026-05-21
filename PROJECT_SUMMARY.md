# M. Vijay Balaji — MLA Website

## Project Summary

A production-ready, bilingual (English / Tamil) constituency website for **M. Vijay Balaji**, elected MLA of **Erode East**, built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Layer         | Technology                                  |
| ------------- | ------------------------------------------- |
| Framework     | Next.js 16 (App Router, Turbopack)          |
| Language      | TypeScript (strict)                         |
| Styling       | Tailwind CSS + CSS variables (globals.css)  |
| Animation     | Framer Motion (scroll reveals, transitions) |
| Smooth Scroll | Lenis (via SmoothScroll provider)           |
| Fonts         | Teko, Inter, Noto Sans Tamil (Google Fonts) |
| Deployment    | Static / Vercel-ready                       |

---

## Architecture

### Bilingual System (English / Tamil)

- **`lib/LanguageContext.tsx`** — React Context providing `{ lang, toggleLang }` with `localStorage` persistence. Default language: Tamil (`ta`).
- **`lib/translations.ts`** — Centralized dictionary with **228 keys per language** covering every UI string (nav, hero, victory, about, timeline, constituency, announcements, social, join, footer, and all 5 subpages).
- **`lib/data.ts`** — Constituency data, election stats, ward info, milestone timeline, announcements, social links, and footer link arrays.

### Component Architecture

All components are `"use client"` with Framer Motion `useInView` scroll-triggered reveals and a consistently typed `smoothEase: [number, number, number, number]` cubic-bezier curve.

---

## Files Created / Modified

### Core Infrastructure

| File                           | Purpose                                                    |
| ------------------------------ | ---------------------------------------------------------- |
| `lib/LanguageContext.tsx`       | Language state management with localStorage persistence    |
| `lib/translations.ts`          | Complete EN/TA translation dictionary (455 lines)          |
| `lib/data.ts`                  | All constituency data, election stats, social links        |
| `app/layout.tsx`               | Root layout with LanguageProvider + SmoothScroll wrapper    |
| `app/globals.css`              | Design system: CSS variables, button classes, typography   |
| `components/SmoothScroll.tsx`   | Lenis smooth scroll provider                               |

### Homepage Components

| Component                    | What it does                                                              |
| ---------------------------- | ------------------------------------------------------------------------- |
| `components/Navbar.tsx`       | Fixed navbar with language toggle (EN/தமிழ்), mobile slide-in drawer, scroll state |
| `components/HeroSection.tsx`  | Full-viewport hero with video background (desktop), image fallback (mobile), portrait frame with gold corner accents, parallax scroll |
| `components/VictoryCard.tsx`  | Animated counters (votes, margin), election badge, opponent info          |
| `components/AboutSection.tsx` | Sticky portrait column + bilingual bio text + 4 info cards grid          |
| `components/Timeline.tsx`     | Horizontal timeline with interactive year dots + content accordion       |
| `components/DistrictMap.tsx`  | Tamil Nadu SVG map with Erode highlight + ward tags + work tabs          |
| `components/AnnouncementsList.tsx` | Tabbed announcement feed with date badges and hover arrows          |
| `components/SocialFeed.tsx`   | Two-column social handles layout (MLA + Party) with equal-height cards   |
| `components/JoinSection.tsx`  | CTA section with WhatsApp button + grievance contact form                |
| `components/Footer.tsx`       | Footer with `background-footer.jpeg` image, dark bold text for contrast, 5-column grid with social icons |

### Subpages (Full Pages)

| Page                          | Route            | Features                                                                 |
| ----------------------------- | ---------------- | ------------------------------------------------------------------------ |
| `app/about/page.tsx`          | `/about`         | Full biography, pull quote, political philosophy cards, education section, TVK party role |
| `app/constituency/page.tsx`   | `/constituency`  | SVG TN map hero, 6 ward cards, development project filter tabs, statistics grid |
| `app/updates/page.tsx`        | `/updates`       | Search input, accordion expand/collapse list (10 items), share-to-clipboard, load more pagination |
| `app/gallery/page.tsx`        | `/gallery`       | Category filter tabs, masonry grid with VB watermarks, custom lightbox modal with prev/next navigation |
| `app/contact/page.tsx`        | `/contact`       | Office info panel, grievance form with ward/category dropdowns, 200-char textarea, localStorage logging, success animation |

### Static Assets (`public/`)

| File                        | Usage                          |
| --------------------------- | ------------------------------ |
| `background-video.mp4`     | Hero section (desktop)         |
| `cm-vijay-and-mla.jpeg`    | Hero section (mobile fallback) |
| `balaji-alone.jpeg`         | Hero portrait frame            |
| `balaji-and-vijay-bokeh.jpeg` | Available for gallery/about  |
| `vijay.jpeg`                | Available for gallery/about    |
| `background-footer.jpeg`   | Footer background image        |

---

## Design System

### Color Palette (CSS Variables)

| Variable          | Value          | Usage                  |
| ----------------- | -------------- | ---------------------- |
| `--maroon`        | `#5c1a1b`      | Primary brand color    |
| `--marlot`        | `#3d1112`      | Darker maroon variant  |
| `--manjal`        | `#ffca00`      | Gold accent / CTA      |
| `--pale-manjal`   | `#ffe066`      | Light gold highlights  |
| `--black`         | `#1a1a1a`      | Body text              |
| `--white`         | `#fafafa`      | Section backgrounds    |
| `--gray`          | `#888`         | Muted labels           |

### Typography

| Font             | Variable              | Usage                     |
| ---------------- | --------------------- | ------------------------- |
| Teko             | `--font-teko`         | Headings, labels, badges  |
| Inter            | `--font-ins-sans`     | Body text (English)       |
| Noto Sans Tamil  | `--font-tamil`        | Body text (Tamil)         |

### Button Classes

- **`.btn-gold`** — Gold background, dark text, uppercase Teko font
- **`.btn-primary`** — Maroon background, white text
- **`.tab-button`** — Underline-style tab with active gold indicator

---

## Key Features Implemented

1. **Bilingual Toggle** — EN/தமிழ் button in navbar switches all content site-wide instantly with localStorage persistence
2. **Video Hero** — Desktop gets MP4 background video; mobile gets optimized JPEG fallback via `next/image`
3. **Portrait Frame** — Gold-cornered frame with `balaji-alone.jpeg` portrait in hero section
4. **Animated Counters** — Victory section counters animate from 0 to target with Indian locale formatting
5. **Interactive Timeline** — Click-through year milestones with animated content transitions
6. **Constituency Map** — SVG Tamil Nadu outline with pulsing Erode East highlight marker
7. **Accordion Updates** — Expand/collapse news items with AnimatePresence height transitions
8. **Gallery Lightbox** — Custom modal with prev/next navigation and keyboard-friendly close
9. **Grievance Form** — Contact page logs submissions to `localStorage` with category/ward dropdowns
10. **Footer Background** — Light-toned `background-footer.jpeg` with semi-transparent overlay and bold dark text for readability
11. **Smooth Scroll** — Lenis-powered global smooth scrolling
12. **Framer Motion Reveals** — Every section uses `useInView` triggered staggered entrance animations

---

## Build Status

- **TypeScript**: ✅ Zero errors (`npx tsc --noEmit` passes clean)
- **Dev Server**: ✅ Running on `localhost:3001` (Turbopack)
- **All Pages**: ✅ Home, About, Constituency, Updates, Gallery, Contact — all rendering correctly

---

## What's Next (Phase 3)

- [ ] Replace VB watermark placeholders with real photographs in Gallery
- [ ] Add real Google Maps embed to Contact page
- [ ] Integrate actual social media embed widgets (Twitter/X timeline)
- [ ] SEO meta tags per page (`generateMetadata`)
- [ ] PWA manifest + service worker for offline access
- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] Production deployment to Vercel with custom domain
