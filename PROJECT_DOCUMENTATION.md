# M. Vijay Balaji — MLA Erode East Official Website

> **Version:** 0.1.0 | **Stack:** Next.js 16.2.6 + React 19.2.4 + TypeScript + Tailwind CSS v4 + Framer Motion 12.40

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.2.6 (App Router, Turbopack) |
| **UI** | React 19.2.4, TypeScript, Tailwind CSS v4 |
| **Animations** | Framer Motion 12.40, Lenis 1.3 (smooth scroll) |
| **Fonts** | Teko (headings), Instrument Sans (body), Noto Sans Tamil |
| **Tooling** | ESLint (flat config), PostCSS |

---

## Project Structure

```
app/                          # Next.js App Router pages
├── globals.css               # Brand tokens, typography, utility classes, accessibility
├── layout.tsx                # Root layout — SEO metadata, JSON-LD, fonts, providers
├── page.tsx                  # Home — single-scroll landing with section dividers
├── loading.tsx               # Loading state with VB monogram
├── not-found.tsx             # 404 page with bilingual message
├── about/page.tsx            # /about — biography & philosophy
├── constituency/page.tsx     # /constituency — wards, map, works
├── contact/page.tsx          # /contact — grievance form & office info
├── gallery/page.tsx          # /gallery — media lightbox gallery
└── updates/page.tsx          # /updates — accordion news feed

components/
├── CardNav.tsx / CardNav.css # Framer Motion card-style navbar (replaces old GSAP Navbar)
├── SmoothScroll.tsx          # Lenis scroll engine provider
├── HeroSection.tsx           # Minimal text hero — no portrait, gold accents, bounce scroll
├── VictoryCard.tsx           # Animated election stats counter with pulsing gold ring
├── AboutSection.tsx          # 3 bio cards (Born, Education, Minister role)
├── Timeline.tsx              # Stepper-powered milestone timeline (auto-advance)
├── Stepper.tsx / Stepper.css # Reusable stepper component with animated step indicators
├── DistrictMap.tsx           # Tamil Nadu map + works tabs + concentric pulse rings
├── AnnouncementsList.tsx     # Filterable announcement cards
├── SocialFeed.tsx            # Social media follow cards (equal height columns)
├── JoinSection.tsx           # CTA + grievance form (no WhatsApp)
├── Icons.tsx                 # SVG icon set
└── Footer.tsx                # 4-column footer (no WhatsApp, dark maroon, noise overlay)

lib/
├── data.ts                   # All static content & site configuration
├── LanguageContext.tsx        # React context for EN/TA toggle
└── translations.ts           # Full bilingual translation map

public/                       # Static assets
├── logo.png, cm-vijay-and-mla.jpeg, balaji-and-vijay-bokeh.jpeg
├── background-video.mp4, background-get-in-touch.jpeg
├── tamilnadu-districts-tvk-style.png, tvk-flag.png, vijay.jpeg
├── robots.txt, sitemap.xml
```

---

## Routes & Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Server → Client children | Landing — sections: Hero → Victory → About → Timeline → DistrictMap → Announcements → SocialFeed → Join → Footer |
| `/about` | Client | Full biography, pull quote, philosophy cards, education & party role |
| `/constituency` | Client | Map, ward grid, filterable works list |
| `/gallery` | Client | Tab-filtered grid, custom lightbox |
| `/contact` | Client | Office info, grievance form with localStorage |
| `/updates` | Client | Tab filter + search, accordion cards, share, pagination |
| `/404` | Server | Custom 404 with bilingual message |

---

## Key Features

### 🌐 Bilingual (English + Tamil)
- Full Tamil translations via `LanguageContext` + `translations.ts`
- Language persisted to `localStorage` (`vijaybalaji_lang`)
- Dual font support: Noto Sans Tamil + Teko for Tamil, Instrument Sans for English
- Toggle button in navbar shows opposite language label

### 📋 Grievance Portal
- Homepage (simple) and `/contact` (full with ward/category dropdowns)
- Categories: Road, Water, Health, Education, Welfare, Other
- 6 Erode East wards
- Submissions stored in `localStorage` under `vijaybalaji_grievances`

### 🎨 Design System
- **Brand Colors:** Maroon (`oklch(44.32% 0.181862 29.2339)`), Gold/Manjal (`#ffca00`), Dark Footer (`#1a0a0a`)
- **Typography:** Teko (headings), Instrument Sans (body), Noto Sans Tamil (Tamil)
- **Utility classes:** `.btn-primary`, `.btn-gold`, `.card`, `.tab-button`, `.victory-stat`, `.profile-card`
- **Custom animations:** `pulse-gold`, `scroll-bounce`, smooth easing `[0.25, 0.46, 0.45, 0.94]`

### ✨ Animations (Framer Motion)
- Viewport-triggered reveals with `useInView` (`once: true`)
- Parallax scrolling on hero via `useScroll` + `useTransform`
- Animated vote counters via `useMotionValue` + `animate`
- `AnimatePresence` for CardNav menu
- Pulsing gold ring on victory margin counter
- Stepper with animated indicators and connecting lines
- Concentric pulse rings on constituency map marker

### 🗺️ SVG Maps
- Hand-crafted Tamil Nadu outline with Erode East highlighted
- Concentric ring animations on Erode marker
- Ward badges with type color coding

### 📊 Scroll Progress
- Thin gradient bar at top of viewport (maroon → manjal)
- Driven by `useScroll` from Framer Motion

---

## Recent Changes

| Change | Files |
|--------|-------|
| Removed WhatsApp | `data.ts`, `Footer.tsx`, `JoinSection.tsx`, `contact/page.tsx` |
| Removed family bio card | `data.ts`, `translations.ts`, `AboutSection.tsx` |
| New Hero (minimal, no portrait) | `HeroSection.tsx` |
| New Footer (dark 4-col, noise) | `Footer.tsx` |
| New CardNav (Framer Motion, no GSAP) | `CardNav.tsx`, `CardNav.css` |
| Stepper integration | `Stepper.tsx`, `Stepper.css`, `Timeline.tsx` |
| Titles updated to "Minister for Handlooms & Textiles" | `data.ts`, `translations.ts`, `HeroSection.tsx` |
| Fixed Erode Tamil spelling (எரோடு → ஈரோடு) | All TS/TSX files |
| SEO metadata + JSON-LD | `layout.tsx` |
| Vercel deployment config | `vercel.json`, `.env.example` |
| Performance: image sizes, lazy loading, cache headers | `next.config.ts`, `vercel.json` |

---

## Deployment

### Vercel
- Automatic deploys from `main` branch
- **Region:** Mumbai (`bom1`)
- **Security headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Cache:** 1 year immutable for static assets and images

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://vijaybalajimla.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=  # Google Search Console
```

---

## Performance

### Image Optimization
- AVIF + WebP formats
- Device sizes: 640, 750, 828, 1080, 1200, 1920
- 1 year cache TTL for optimized images
- Proper `sizes` props on all fill images

### Component Lazy Loading
- `Timeline`, `DistrictMap`, `SocialFeed`, `AnnouncementsList`, `JoinSection` via `next/dynamic`
- Skeleton loading placeholders (`animate-pulse bg-gray-100`)

### Bundle Optimization
- `optimizePackageImports: ['framer-motion']` in next.config
- Tree-shaken imports

---

## SEO

### Metadata
- Title template: `%s | M. Vijay Balaji — Erode East MLA`
- Description with keyword-rich content
- Open Graph with 1200×630 image
- Twitter Card (summary_large_image)
- Language alternates (en-IN, ta-IN)

### Structured Data (JSON-LD)
- Schema.org `Person` type
- Job title, party affiliation, address, sameAs profiles

### Technical
- `robots.txt` with sitemap reference
- `sitemap.xml` with 6 URLs
- Canonical URL
- Google site verification env var

---

## Accessibility

- `:focus-visible` gold outline on all interactive elements
- ARIA labels on navbar, timeline, map, forms
- Form inputs with proper `htmlFor` + `id` pairing
- `prefers-reduced-motion` disables all animations

---

## Getting Started

```bash
npm install
npm run dev        # Local development (port 3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

---

## QA Checklist

### LANGUAGE
- [x] Toggle switches ALL text strings — no English leaks in Tamil mode
- [x] localStorage persists language across page refresh
- [x] Tamil text renders in Noto Sans Tamil
- [x] All sub-pages read language from context

### VISUAL
- [x] Hero parallax works on desktop and mobile
- [x] Victory counters animate up from 0 on first scroll
- [x] Stepper timeline auto-advances every 3.5s
- [x] Map Erode marker pulses correctly
- [x] CardNav opens/closes with AnimatePresence
- [x] Footer 4-column grid aligns properly
- [x] No horizontal overflow on any page

### PERFORMANCE
- [x] Fonts loaded with `display: swap`
- [x] Below-fold sections lazy-loaded
- [x] Image formats optimized (AVIF, WebP)
- [x] Proper `sizes` props on all fill images
- [x] Cache headers configured for Vercel

### ACCESSIBILITY
- [x] Tab navigation works through entire page
- [x] Focus rings visible on all interactive elements
- [x] Form labels connected to inputs
- [x] Reduced motion media query respected
- [x] ARIA labels on interactive elements

### FUNCTIONALITY
- [x] Grievance form submits and shows success state
- [x] Updates search filters results in real-time
- [x] Gallery lightbox opens and closes
- [x] Language toggle works on every page
- [x] All internal links navigate correctly
- [x] Footer links work
