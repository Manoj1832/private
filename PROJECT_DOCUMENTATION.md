# M. Vijay Balaji — MLA Erode East Official Website

> **Version:** 0.1.0 | **Stack:** Next.js 16.2.6 + React 19 + TypeScript + Tailwind CSS v4

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.2.6 (App Router) |
| **UI** | React 19.2.4, TypeScript, Tailwind CSS v4 |
| **Animations** | Framer Motion 12.40, Lenis 1.3 (smooth scroll) |
| **Tooling** | ESLint (flat config), PostCSS |

---

## Project Structure

```
app/                          # Next.js App Router pages
├── globals.css               # Brand tokens, typography, utility classes, accessibility
├── layout.tsx                # Root layout — metadata, fonts, providers
├── page.tsx                  # Home — single-scroll landing page (with lazy loading)
├── loading.tsx               # Loading state with VB monogram
├── not-found.tsx             # 404 page with bilingual message
├── about/page.tsx            # /about — biography & philosophy
├── constituency/page.tsx     # /constituency — wards, map, works
├── contact/page.tsx          # /contact — grievance form & office info
├── gallery/page.tsx          # /gallery — media lightbox gallery
└── updates/page.tsx          # /updates — accordion news feed

components/                   # Reusable UI components
├── Navbar.tsx                # Fixed nav, full-screen mobile drawer, scroll progress, language toggle
├── SmoothScroll.tsx          # Lenis scroll engine provider
├── HeroSection.tsx           # Cinematic hero — noise, crowd silhouette, gold beam, parallax
├── VictoryCard.tsx           # Animated election stats counter with pulsing gold ring
├── AboutSection.tsx          # Homepage about snapshot
├── Timeline.tsx              # Interactive horizontal milestone timeline with gradient line
├── DistrictMap.tsx           # SVG Tamil Nadu map + works tabs + concentric pulse rings
├── AnnouncementsList.tsx     # Filterable announcement cards
├── SocialFeed.tsx            # Social media follow cards (equal height columns)
├── JoinSection.tsx           # CTA + home page contact form
└── Footer.tsx                # Multi-column footer

lib/                          # Application logic & data
├── data.ts                   # All static content & site configuration
├── LanguageContext.tsx        # React context for EN/TA toggle
└── translations.ts           # Full bilingual translation map

public/                       # Static assets (currently empty)
```

---

## Routes & Pages

| Route | Type | Description |
|-------|------|-------------|
| `/` | Server → Client children | Landing — sections: Hero → Victory → About → Timeline → DistrictMap → Announcements → SocialFeed → Join → Footer |
| `/about` | Client | Full biography, pull quote, philosophy cards, education & party role |
| `/constituency` | Client | Animated SVG map, ward grid, filterable works list, metric cards |
| `/gallery` | Client | Tab-filtered grid (All/Campaigns/Visits/Events/Party), custom lightbox |
| `/contact` | Client | Office info, WhatsApp link, grievance form with localStorage persistence |
| `/updates` | Client | Tab filter + text search, accordion cards, share-to-clipboard, pagination |
| `/404` | Server | Custom 404 page with bilingual "Page not found" message |
| `/loading` | Server | Loading state with animated VB monogram |

---

## Key Features

### 🌐 Bilingual (English + Tamil)
- Full Tamil translations via `LanguageContext` + `translations.ts`
- Language preference persisted to `localStorage` (`vijaybalaji_lang`)
- Dual font support: Noto Sans Tamil + Teko for Tamil, Instrument Sans for English
- Toggle button in navbar shows opposite language label

### 📋 Grievance Portal
- Two forms: homepage (simple) and `/contact` (full with ward/category dropdowns)
- Categories: Road, Water, Health, Education, Welfare, Other
- Wards mapped to 6 real Erode East wards
- Submissions stored in `localStorage` under `vijaybalaji_grievances`

### 🎨 Design System
- **Brand Colors:** Maroon (`oklch(44.32% 0.181862 29.2339)`), Gold/Manjal (`#ffca00`), Dodger Blue
- **Typography:** Teko (headings), Instrument Sans (body), Noto Sans Tamil (Tamil)
- **Utility classes:** `.btn-primary`, `.btn-gold`, `.card`, `.card-maroon`, `.tab-button`, `.text-maroon`, `.bg-manjal`, `.victory-stat`, `.profile-card`, `.timeline-dot`, `.section-divider`, `.scroll-progress`
- **Custom animations:** `pulse-gold`, `scroll-bounce`, `pulse-monogram`, custom smooth easing `[0.25, 0.46, 0.45, 0.94]`

### ✨ Animations (Framer Motion)
- Viewport-triggered reveals with `useInView` (`once: true`)
- Parallax scrolling on hero via `useScroll` + `useTransform`
- Animated vote counters via `useMotionValue` + `animate`
- Staggered delays, `AnimatePresence` for modals/accordions/menu
- Pulsing gold ring on victory margin counter
- Concentric pulse rings on constituency map marker
- Gradient timeline connecting line

### 🗺️ SVG Maps
- Hand-crafted Tamil Nadu outline with Erode East highlighted (animated pulsing gold marker)
- No external map library — raw SVG paths
- Concentric ring animations on Erode marker

### 📊 Scroll Progress
- Thin gradient bar at top of viewport (maroon → manjal)
- Driven by `useScroll` from Framer Motion
- Fixed position, z-index 9999

---

## Visual Polish (Phase 3)

### Hero Section — Cinematic Upgrade
- **Layer 1:** Deep maroon radial gradient (`#6b1a1a` → `#3d0a0a` → `#1a0404`)
- **Layer 2:** SVG noise texture overlay at 3% opacity
- **Layer 3:** Crowd silhouette SVG at bottom (120px, full width, rgba(0,0,0,0.25))
- **Layer 4:** Gold light beam from top-right (blurred, subtle spotlight)
- Portrait box: 280×380px with gold border frame, 4 corner accents, VB watermark, "Photo Coming Soon" placeholder

### Section Transitions
- `.section-divider` utility class with centered icon and gradient lines

### Victory Card
- Pulsing gold ring behind margin counter (scale 1→1.15, opacity 0.3→0.1, 2.5s loop)
- Aligned defeated badge with border, padding, and party label

### Timeline
- Gradient connecting line (maroon → manjal → maroon)
- Active dot with gold shadow and pulse animation

### Constituency Map
- Concentric pulse rings on Erode marker (3 staggered rings, 2s cycle)
- Ward badges with aligned color dots and labels

### Navbar
- Full-screen mobile drawer (slide from right, staggered link animations)
- Scroll progress indicator at top
- Close button (✕) in mobile drawer
- Language toggle at bottom of mobile drawer

---

## Performance

### Font Loading
- Teko via `next/font/google` with `display: swap`
- Instrument Sans via `next/font/google` with `display: swap`
- Noto Sans Tamil via Google Fonts link preload in `<head>`
- Font variables applied to `<body>` class

### Component Lazy Loading
- `Timeline`, `DistrictMap`, `SocialFeed`, `AnnouncementsList`, `JoinSection` loaded via `next/dynamic`
- Skeleton loading placeholders (`animate-pulse bg-gray-100`)

### Metadata (SEO)
- Full OpenGraph tags (title, description, URL, locale, alternateLocale)
- Twitter Card (summary_large_image)
- Robots: index, follow
- Canonical URL + language alternates
- Keywords in English and Tamil

### Next.js Config
- `output: 'standalone'` for Docker/container deployment
- `compress: true` for gzip/brotli
- `poweredByHeader: false`
- Image optimization (AVIF, WebP, device sizes)
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy

---

## Accessibility

### Focus Management
- `:focus-visible` — gold outline (2px, 3px offset) on all interactive elements
- Buttons and links have visible focus rings

### ARIA Labels
- Navbar hamburger: `aria-label="Open navigation menu"`
- Language toggle: `aria-label` with bilingual text
- Timeline dots: `aria-label="Go to year {year}"`, `role="button"`
- Map SVG: `aria-label="Tamil Nadu map with Erode East constituency highlighted"`, `role="img"`
- Form inputs: proper `htmlFor` + `id` pairing (JoinSection, ContactPage)
- Form submit: `aria-live="polite"` for success message

### Reduced Motion
- `@media (prefers-reduced-motion: reduce)` — disables all animations/transitions
- Respects user's OS-level motion preference

---

## Deployment

### Environment Variables
- `NEXT_PUBLIC_SITE_URL` — production domain
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp direct link number
- `NEXT_PUBLIC_CONTACT_EMAIL` — office email
- `NEXT_PUBLIC_GA_ID` — Google Analytics tracking ID

### 404 Page
- Maroon gradient background
- Large gold "404" in Teko
- Tamil: "இந்த பக்கம் கிடைக்கவில்லை"
- English: "Page not found"
- Gold "BACK TO HOME" CTA button

### Loading State
- Full page, white background
- Centered "VB" monogram in maroon with pulse animation
- "Loading..." in small Teko text

---

## Getting Started

```bash
npm install
npm run dev        # Local development
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

---

## Data Flow

All content originates from `lib/data.ts` — static site config, biography, election results, timeline milestones, constituency works, gallery items, updates, announcements, and contact info. Language translations live in `lib/translations.ts` and are consumed via `LanguageContext` in each component.

---

## QA Checklist

### LANGUAGE
- [x] Toggle switches ALL text strings — no English leaks in Tamil mode
- [x] localStorage persists language across page refresh
- [x] Tamil text renders in Noto Sans Tamil — no fallback squares
- [x] All sub-pages read language from context

### VISUAL
- [x] Scroll progress bar visible on all pages
- [x] Hero parallax works on desktop and mobile
- [x] Victory counters animate up from 0 on first scroll
- [x] Timeline active dot pulses in gold
- [x] Map Erode marker pulses correctly
- [x] Mobile drawer opens/closes with animation
- [x] Navbar goes transparent → white on scroll
- [x] No horizontal overflow on any page

### PERFORMANCE
- [x] Fonts loaded with display: swap
- [x] Below-fold sections lazy-loaded
- [x] Image formats optimized (AVIF, WebP)

### ACCESSIBILITY
- [x] Tab navigation works through entire page
- [x] Focus rings visible on all interactive elements
- [x] Form labels connected to inputs
- [x] Reduced motion media query respected

### FUNCTIONALITY
- [x] Grievance form submits and shows success state
- [x] Updates search filters results in real-time
- [x] Gallery lightbox opens and closes
- [x] Language toggle works on every page
- [x] WhatsApp button opens in new tab
- [x] All internal links navigate correctly
- [x] Footer links work
