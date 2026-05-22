# M. Vijay Balaji — MLA Erode East Official Website

> **Version:** 0.2.0 | **Stack:** Next.js 16.2.6 + React 19.2.4 + TypeScript + Tailwind CSS v4 + Framer Motion 12.40 + GSAP 3.12 + SplitType

---

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Routes & Pages](#routes--pages)
- [Component Reference](#component-reference)
- [Typography System](#typography-system)
- [Design Tokens & Brand](#design-tokens--brand)
- [Animation Reference](#animation-reference)
- [Scenes (Sections) Breakdown](#scenes-sections-breakdown)
- [Data Flow & State Management](#data-flow--state-management)
- [Performance Optimizations](#performance-optimizations)
- [SEO & Metadata](#seo--metadata)
- [Accessibility](#accessibility)
- [Deployment](#deployment)
- [Recent Changes](#recent-changes)
- [QA Checklist](#qa-checklist)

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16.2.6 (App Router, Turbopack) |
| **Language** | TypeScript 5.x |
| **UI Library** | React 19.2.4 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion 12.40 + GSAP 3.12 (ScrollTrigger, SplitType) |
| **Smooth Scroll** | Lenis 1.3.23 |
| **Text Splitting** | SplitType |
| **Icons** | lucide-react (icons), custom SVG (Icons.tsx) |
| **Fonts** | Google Fonts via `next/font` + external link |
| **Linting** | ESLint 9.x (flat config) |
| **Build** | Next.js built-in (Turbopack dev, Webpack prod) |

---

## Project Structure

```
app/
├── globals.css                 # Root styles: brand tokens, typography, utilities, animations (cinematic v2)
├── layout.tsx                  # Root layout: SEO metadata, JSON-LD structured data, fonts, providers
├── page.tsx                    # Home landing page (IntroLoader, grain/vignette overlays, cinematic dividers)
├── loading.tsx                 # Full-page loading state (VB monogram pulse)
├── not-found.tsx               # 404 page (bilingual)
├── about/page.tsx              # Full biography page (cinematic overlays + dividers)
├── constituency/page.tsx       # Constituency detail page (cinematic overlays + dividers)
├── contact/page.tsx            # Contact + grievance form page (cinematic overlays + dividers)
├── gallery/page.tsx            # Media gallery with lightbox (cinematic overlays + dividers)
└── updates/page.tsx            # News/updates feed with search (cinematic overlays + dividers)

components/
├── CardNav.tsx                 # Framer Motion card-style navigation bar (replaces old Navbar)
├── CardNav.css                 # CardNav styles (rounded, shadow, hover/collapse)
├── SmoothScroll.tsx            # Lenis smooth scroll provider
├── IntroLoader.tsx             # Cinematic intro: VB monogram, gold flare sweep, loading bar, ambient glow
├── HeroSection.tsx             # Hero scene: SplitType char-reveal, mouse-reactive radial glow, outlined title
├── VictoryCard.tsx             # Election results: GSAP interactive glow overlay, animated counters
├── AboutSection.tsx            # Home about: portrait, bio text, 3 info cards (born, edu, role)
├── ScrollStorytelling.tsx      # 4-scene pinned GSAP SplitType scroll story with gradient backgrounds
├── Timeline.tsx                # Journey timeline: Stepper component with auto-advance
├── Stepper.tsx                 # Reusable stepper: animated step dots, connecting lines, prev/next
├── Stepper.css                 # Stepper layout + responsive styles
├── DistrictMap.tsx             # Constituency: map image with pulse marker, area tags, works tabs
├── AnnouncementsList.tsx       # Announcements: tab filter, date badges, hover reveal
├── SocialFeed.tsx              # Social media: leader + party columns, follow links
├── JoinSection.tsx             # CTA + contact form: dark bg, email card, form inputs
├── Footer.tsx                  # Site footer: GSAP link animations, brand, links, socials, office hours, ambient glows
├── Navbar.tsx                  # Re-exports CardNav (kept for backward compatibility)
└── Icons.tsx                   # SVG icon set: birthday, graduation, building, document, etc.

lib/
├── data.ts                     # All static content: site config, election data, timeline, works, etc.
├── LanguageContext.tsx          # React context + localStorage for EN/TA toggle
├── translations.ts             # Complete bilingual translation map (EN + TA)
└── animation.tsx               # GSAP hooks (ScrollTrigger), MagneticButton, GlowCard, AnimatedSection, SectionHeader, animation constants

lib/
├── data.ts                     # All static content: site config, election data, timeline, works, etc.
├── LanguageContext.tsx          # React context + localStorage for EN/TA toggle
└── translations.ts             # Complete bilingual translation map (EN + TA)

public/
├── logo.png                    # TVK party logo
├── cm-vijay-and-mla.jpeg       # Victory portrait (Hero mobile + VictoryCard)
├── balaji-and-vijay-bokeh.jpeg # About section portrait
├── background-video.mp4        # Hero background video (desktop)
├── background-get-in-touch.jpeg# JoinSection background image
├── tamilnadu-districts-tvk-style.png # Map illustration
├── tvk-flag.png                # Party flag graphic
├── vijay.jpeg                  # Additional portrait
├── robots.txt                  # SEO: allow all, sitemap reference
└── sitemap.xml                 # 6 URLs with priorities and change frequencies

config/
├── next.config.ts              # Next.js config: images, experimental, compression
├── vercel.json                 # Vercel: region, headers, redirects, cache rules
├── tailwind.config.ts          # Tailwind (if customized)
├── tsconfig.json               # TypeScript config
├── postcss.config.mjs          # PostCSS with Tailwind
└── .gitignore                  # Ignore patterns
```

---

## Routes & Pages

| Route | Render | Description |
|-------|--------|-------------|
| `/` | Server → Client Children | Single-scroll landing: 9 sections in order |
| `/about` | Client | Full biography, pull quote, philosophy cards, education, party role |
| `/constituency` | Client | Animated SVG map, ward grid, filterable works list, metric cards |
| `/gallery` | Client | Tab-filtered grid (All/Campaigns/Visits/Events/Party), lightbox modal |
| `/contact` | Client | Office info, grievance form with localStorage persistence |
| `/updates` | Client | Tab filter + text search, accordion cards, share-to-clipboard, pagination |
| `/404` | Server | Custom 404 with bilingual message and home button |
| `/_not-found` | Server | Next.js internal not-found boundary |

---

## Component Reference

### CardNav.tsx (`"use client"`)
The primary navigation bar. Replaces the old GSAP-based Navbar.

**Features:**
- Fixed position, centered card-style container (`pointer-events: none` wrapper, `pointer-events: auto` inner)
- Logo (Image with `sizes="32px"`) + site name
- Hamburger toggle (animated open/close lines via CSS classes)
- `AnimatePresence`-powered expandable menu with 4 nav cards (About, Constituency, Updates, Contact)
- Each card: unique background tint, colored label, clickable links
- Language toggle card with `lang-toggle-btn`
- Scroll lock when menu open (`document.body.style.overflow = "hidden"`)
- Auto-closes on route change (pathname effect)

**States:**
- Collapsed: logo + hamburger + CTA button visible
- Expanded: 4 cards + language toggle animate in (staggered 0.06s delay)
- Mobile: cards stack vertically, CTA button hidden

**Animations:**
- Content wrapper: opacity fade (0.2s)
- Cards: opacity + y translate (0.3s, staggered, custom ease `[0.25, 0.46, 0.45, 0.94]`)
- Hamburger: CSS transform rotation (0.25s ease)

---

### HeroSection.tsx (`"use client"`)
Full-screen hero with parallax, video/image background, and minimal text.

**Features:**
- 100vh with `minHeight: 600`
- Parallax via `useScroll` + `useTransform` (bgY 0→30%, textY 0→15%, opacity 0→0.6)
- Desktop: video background (`background-video.mp4`, brightness 0.35)
- Mobile: image background (`cm-vijay-and-mla.jpeg`, brightness 0.35, md:hidden)
- Gradient overlay: `rgba(26,5,6,0.7) → rgba(44,10,10,0.5) → rgba(26,5,6,0.85)`
- Gold top line (1px gradient)
- Animated gold rule (scaleX 0→1, 0.6s, delay 0.2s)
- Outlined "ERODE EAST" title (text-transparent, WebkitTextStroke, clamp 3rem→10rem)
- Two-line animated reveal (y 50→0, staggered 0.5s each)
- Name block with gold dashes and centered name
- Minister title in gold, "Tamil Nadu" subtitle
- Italic tagline: "Serving Erode East. Shaping Tamil Nadu."
- Bouncing scroll indicator (SVG arrow + text, animate y 0→6→0, 1.8s loop)

**Text Values (bilingual):**
- `hero_place_line1`: "ERODE" / "ஈரோடு"
- `hero_name`: "M. Vijay Balaji" / "ம. விஜய் பாலாஜி"
- `hero_role`: "Handlooms & Textiles Minister" / "கைத்தறி மற்றும் ஜவுளித்துறை அமைச்சர்"
- `hero_scroll`: "SCROLL" / "கீழே"

**Animations:**
- Gold rule: scaleX 0→1 (0.6s, delay 0.2)
- Place line 1: y 50→0 (0.5s, delay 0.3)
- Place line 2: y 50→0 (0.5s, delay 0.45)
- Name block: y 30→0 (0.6s, delay 0.65)
- Tagline: y 20→0 (0.6s, delay 0.85)
- Scroll indicator: opacity (delay 1.5s)
- SVG arrow: y bounce [0, 6, 0] (1.8s, infinite)
- Parallax: useScroll → useTransform on bgY, textY, opacity

---

### VictoryCard.tsx (`"use client"`)
Election results section with animated counters.

**Features:**
- Gradient background: `marlot → maroon → marlot` (135deg)
- Gold top/bottom decorative lines (gradient, transparent 10% → gold 50% → transparent 90%)
- Election badge: gold text on gold-tinted background
- Two-column layout: image left, stats right (reversed on mobile)
- Image: `cm-vijay-and-mla.jpeg` with gold border + 4 corner accents (3px gold, 24px)
- Stats grid: 3 columns (votes, margin with pulse, won)

**AnimatedCounter sub-component:**
- `useMotionValue(0)` + `animate()` to target (2.2–2.5s, smoothEase)
- `useInView` trigger (once, -100px margin)
- `toLocaleString("en-IN")` formatting
- Optional pulse: pulsing border ring (scale 1→1.15, opacity 0.3→0.1, 2.5s loop)

**Opponent Info:**
- Defeated badge: inline-flex with opponent name + party label (INC)
- `rgba(255,255,255,0.12)` background, gold border

**Data Sources:**
- `electionData.votes` — total votes
- `electionData.margin` — winning margin
- `t.victory_won` — "WON" text
- `t.victory_defeated` — "DEFEATED" prefix

**Animations:**
- Badge: y 30→0 (0.6s)
- Image: opacity + scale 0.9→1 (0.8s, delay 0.4)
- Stats: y 40→0 (0.7s, delay 0.2)
- Opponent: opacity (0.6s, delay 0.6)
- Counters: motionValue animation (2.2–2.5s)
- Pulse ring: scale loop (1→1.15→1, 2.5s, infinite)

---

### AboutSection.tsx (`"use client"`)
Homepage about snapshot with portrait and bio cards.

**Features:**
- White background with gold section divider
- Section header: label + name + gold rule (16px, 3px)
- Two-column layout (stacks on mobile)
- Left: portrait image (`balaji-and-vijay-bokeh.jpeg`) in 3:4 aspect, max 380px
  - Sticky on desktop (`lg:sticky lg:top-[100px]`)
  - Gradient overlay at bottom (`transparent → rgba(40,10,12,0.95)`)
  - Name + role text overlay
  - Gold corner accents (top-left, top-right)
- Right: biography text + info cards grid (2 columns)
- 3 info cards, each with:
  - 3px maroon left border
  - Icon from Icons component
  - Title (gray, teko, uppercase)
  - Value (maroon, bold)
  - Detail text

**Bio Cards:**
1. Birthday — born in Karungalpalayam, Erode
2. Education — B.Com (Computer Science), Dr. G.R. Damodaran College
3. Minister Role — Handlooms & Textiles, Govt of Tamil Nadu

**Animations:**
- Header: y 40→0 (0.7s)
- Portrait: x -40→0 (0.7s, delay 0.2)
- Bio text: y 30→0 (0.7s, delay 0.3)
- Info cards: y 20→0 (0.5s, staggered 0.1s, delay 0.4)

---

### Timeline.tsx + Stepper.tsx (`"use client"`)
Interactive journey timeline with auto-advancing stepper.

**Features:**
- White background with large "TVK" watermark (30vw, 2% opacity)
- Section header: label + "JOURNEY" + gold rule
- Stepper component with 5 milestones

**Milestones:**
1. 1986 — Born in Karungalpalayam
2. 2006 — Commerce Graduate
3. 2020 — Joined the Movement
4. 2024 — District Secretary
5. 2026 — Elected MLA — Erode East

**Stepper Component:**
- Step indicators: numbered circles (inactive: gray, active: maroon bg + gold text, complete: gold bg + maroon text)
- Connecting lines: animated width (0→100%) with `rgba(255,202,0,0.15)` → `var(--manjal)` transition
- Auto-advance: `setInterval` every 3.5s, loops back to step 1
- Manual navigation: click step indicators or prev/next buttons
- Content shows year badge (maroon bg), title, Tamil title, description

**Animations:**
- Step indicator dots: variant-based (inactive/active/complete) with backgroundColor, scale (0.3s)
- Connecting lines: width 0→100% + backgroundColor transition (0.4s)
- Content: native Stepper transitions (slide/fade)

---

### DistrictMap.tsx (`"use client"`)
Constituency section with map and works.

**Features:**
- White → gray gradient background
- Section header: label + "ERODE EAST" + gold rule
- Two-column layout: map left, works right
- Map: `tamilnadu-districts-tvk-style.png` with gold pulse marker at Erode
  - Drop shadow filter
  - Erode East label badge (maroon bg, gold border)
  - 3 concentric pulse rings (staggered 0.65s delay, 2s loop)
- Area tags: colored dots (Urban=maroon, Semi-Urban=gold, Rural=green) + bilingual names
- Works tabs: "Progress" / "Completed" with gold underline active indicator
- Work items: icon + title + Tamil subtitle + status badge
  - Status: "Completed" = green, "In Progress" = gold
- Uses `Icons` component for work type icons

**Data Sources:**
- `constituencyAreas` — list of areas with names, Tamil names, types
- `constituencyWorks.inProgress` / `.completed` — work items with titles, icons, status

**Animations:**
- Header: y 40→0 (0.7s)
- Map: x -40→0 (0.7s, delay 0.2)
- Pulse ring: scale 16→56, opacity 0.8→0 (2s, infinite, staggered 0.65s)
- Erode label: y -10→0 (0.5s, delay 1s)
- Works: x 40→0 (0.7s, delay 0.3)
- Work items: y 20→0 (0.4s, staggered 0.08s)

---

### AnnouncementsList.tsx (`"use client"`)
Filterable announcements section.

**Features:**
- White background
- Section header: label + "UPDATES" + gold rule
- 3 filter tabs: All, Announcements, Events
- Cards: date badge (maroon bg, gold day number, white month), title, Tamil subtitle, hover arrow
- Date badge: formatted with `formatDate()` (day, month, year)
- Type indicator: announcement=gold tint, event=blue tint
- "View More" gold CTA button linking to /updates

**Data Sources:**
- `announcements` array with date, title, titleTamil, type

**Animations:**
- Header: y 40→0 (0.7s)
- Tabs: y 20→0 (0.5s, delay 0.2)
- Items: y 20→0 (0.5s, staggered 0.08s, delay 0.3)
- Arrow: opacity 0→1 on group hover (0.3s)
- CTA: opacity (delay 0.8s)

---

### SocialFeed.tsx (`"use client"`)
Social media follow section with two columns.

**Features:**
- Gray → white gradient background
- Section header: label + "SOCIAL MEDIA" + gold rule
- Two equal-height columns (grid, items-stretch)
- Leader column: VB avatar (maroon circle), handle "Vijay Balaji", role text, 3 social links (Instagram, Facebook, LinkedIn)
- Party column: TVK avatar (gold circle), party name, 3 social links (Twitter, Facebook), embedded tweet placeholder
- Follow arrow appears on hover
- CTA buttons: "FOLLOW ON X" (maroon, bottom of leader column), "VISIT PARTY WEBSITE" (gold, bottom of party column)

**Data Sources:**
- `socialLinks` for URLs
- `leaderSocials` / `partySocials` arrays

**Animations:**
- Header: y 40→0 (0.7s)
- Leader column: x -30→0 (0.7s, delay 0.2)
- Party column: x 30→0 (0.7s, delay 0.3)
- Follow arrow: opacity 0→1 on group hover (0.3s)

---

### JoinSection.tsx (`"use client"`)
Contact CTA with form.

**Features:**
- Dark background: image overlay with gradient (90% black → 85% maroon → 90% black)
- Gold top line (gradient)
- Section header: gold subtitle + white title + gold rule
- Two-column layout: CTA left, form right
- Left: Tamil greeting, English description, email contact card with hover effect
- Right: form in glassmorphism container (blur 12px, semi-transparent bg)
- Form fields: Name, Phone, Ward (2-col grid), Message (textarea)
- All inputs have focus styles (gold border, tinted bg)
- Submit button (gold, full width)
- Success state: button text changes ("Submitted!" / "அனுப்பப்பட்டது") for 3s

**Data Sources:**
- `t.join_*` translations

**Animations:**
- Header: none (static, but parent isInView managed)
- Left column: x -30→0 (0.7s, delay 0.2)
- Right column: x 30→0 (0.7s, delay 0.3)

---

### Footer.tsx (`"use client"`)
Site footer with 4-column layout.

**Features:**
- Background: `#1a0a0a` (dark maroon)
- Top border: 3px solid `var(--manjal)` (gold)
- Noise texture overlay (SVG feTurbulence, 3% opacity)
- Subtle radial glows (gold + maroon)
- **Top brand row:** logo (56px) + name (3xl teko) + minister title + tagline on left, social icons (48px) on right with "FOLLOW US" label
- **4-column grid:**
  - Col 1: Quick Links (About, Constituency, Journey, Contact)
  - Col 2: Resources (Announcements, Gallery, Grievance Form, Party Website)
  - Col 3: Connect (Email, Office address in bordered card)
  - Col 4: Office Hours (Mon-Fri 10-17, Sat 10-13, Sun Closed) + urgent contact CTA
- All links: hover to gold color + 6px left padding slide
- **Bottom bar:** gradient gold separator line, copyright, tagline

**Data Sources:**
- `footerLinks.quickLinks`, `.resources` — link arrays
- `socialLinks` — social URLs
- `siteConfig` — name, constituency, state

**Animations:**
- Social icons: whileHover scale 1.15 (0.2s)
- Links: onMouseEnter color + paddingLeft transitions (0.3s)

---

### Navbar.tsx
Re-exports `CardNav` as default for backward compatibility. All pages can import `Navbar` and receive `CardNav`. New code should import `CardNav` directly.

---

### IntroLoader.tsx (`"use client"`)
Cinematic full-screen intro loader with VB monogram reveal.

**Features:**
- 3.2s total duration: monogram fade-in → hold → fade-out
- Gold flare sweep across screen (1.8s, left→right)
- Ambient radial glow (gold + maroon)
- Grain texture overlay
- Loading bar at bottom (0% → 100%, 2.5s)
- Auto-dismisses after animation completes

**Animations:**
- Monogram container: scale 0.85→1, opacity 0→1 (0.8s)
- Flare: x -100%→100% (1.8s)
- Loading bar: scaleX 0→1 (2.5s)
- Exit: scale 0.95 + opacity (0.6s)

---

### ScrollStorytelling.tsx (`"use client"`)
4-scene pinned scroll narrative using GSAP ScrollTrigger + SplitType.

**Features:**
- Full-screen pinned sections with gradient background transitions
- SplitType word-by-word reveals via GSAP
- Scene progress indicators (current scene / 4)
- Background transitions: maroon→gold→dark→maroon
- Text overlay with scene number, title, subtitle, description

**Scenes:**
1. Born in Erode — Karungalpalayam roots
2. Education — B.Com (CS), Dr. G.R. Damodaran College
3. Party Rise — TVK District Secretary
4. Elected MLA — Erode East, 2026 Landslide Victory

**Animations:**
- SplitType chars/words animate in on scene enter
- Background morphs between scenes
- GSAP ScrollTrigger `scrub: 1` for smooth transitions

---

### lib/animation.tsx (`"use client"`)
Shared animation utility library for GSAP-powered interactions.

**Exports:**
- `useGsapContext()` — GSAP context hook with cleanup
- `useScrollTrigger(options)` — ScrollTrigger registration hook
- `MagneticButton` — Button that follows cursor via GSAP spring
- `GlowCard` — Card with perspective tilt and mouse-reactive glow
- `AnimatedSection` — Framer Motion viewport reveal wrapper
- `SectionHeader` — Standardized section heading with label + title + gold rule
- `animationDefaults` — Common easing constants

**GSAP Registration:**
- `gsap.registerPlugin(ScrollTrigger)` — called once at module level

---

### Icons.tsx
SVG icon set used across components:

| Icon Name | Used In |
|-----------|---------|
| `birthday` | AboutSection (birth card) |
| `graduation` | AboutSection (education card) |
| `building` | AboutSection (minister card) |
| `document` | JoinSection (email card) |
| `road`, `water`, `health`, `education`, `welfare` | DistrictMap (work items) |

---

### SmoothScroll.tsx
Lenis smooth scroll provider. Wraps `children` in a Lenis instance.

---

## Typography System

### Font Stack

| Font | Usage | Weight | Loading Method |
|------|-------|--------|----------------|
| **Teko** | Headings, uppercase text, stats, buttons | 400, 500, 600, 700 | `next/font/google` with `display: swap`, CSS variable `--font-teko` |
| **Instrument Sans** | Body text, paragraphs, form inputs | 400, 500, 600, 700, italic 400 | `next/font/google` with `display: swap`, CSS variable `--font-ins-sans` |
| **Noto Sans Tamil** | All Tamil text | 400, 500, 600, 700 | External Google Fonts link in `<head>`, CSS variable `--font-tamil` |

### Font Sizes (clamp scale)

| Element | Size Formula | Example Range |
|---------|-------------|---------------|
| Hero title (outlined) | `clamp(3rem, 12vw, 10rem)` | 48px → 160px |
| Section headings | `clamp(2.5rem, 6vw, 4rem)` | 40px → 64px |
| Hero name | `clamp(1.25rem, 3vw, 2rem)` | 20px → 32px |
| Counter numbers | `clamp(2.5rem, 7vw, 4.5rem)` | 40px → 72px |
| Stat labels | `clamp(14px, 2vw, 18px)` | 14px → 18px |
| Section subtitle | `text-sm` (14px) | — |
| Body text | `15px` / `16px` | — |
| Small text | `text-xs` (12px) | — |

### Line Heights

| Context | Line Height |
|---------|-------------|
| Headings (h1–h6, teko) | 1.1 |
| Body (English, Tamil) | 1.5 – 1.9 |
| Footer text | 1.4 – 1.7 |

### Letter Spacing

| Context | Spacing |
|---------|---------|
| Hero title | `0.02em` |
| Hero tagline | `0.15em` |
| Section labels | `0.25em` |
| Button text | `0.05em` |
| Footer headings | `0.25em` |
| Nav links | `0.06em` |
| Stats labels | `0.12em` |

---

## Design Tokens & Brand

### CSS Custom Properties (globals.css)

```css
:root {
  --maroon: oklch(44.32% 0.181862 29.2339);
  --marlot: #5c1a1b;
  --manjal: #ffca00;
  --pale-manjal: #ffe082;
  --dodgerblue: #1e90ff;
  --white: #f8f9fc;
  --black: #1a1a2e;
  --gray: #888;
  --text-primary: #1a1a2e;
  --text-secondary: #555559;
  --text-muted: #999;
  --maroon-dark: oklch(34% 0.16 29);
  --maroon-light: oklch(54% 0.14 29);
  --hero-overlay: rgba(40, 10, 12, 0.85);
  --card-shadow: 0 4px 24px rgba(92, 26, 27, 0.10);
  --card-shadow-hover: 0 8px 32px rgba(92, 26, 27, 0.18);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Color Usage Map

| Color | Usage |
|-------|-------|
| `--maroon` | Primary brand: headings, buttons, navbar, accent borders, active states |
| `--marlot` | Darker maroon: button hovers, gradient endpoints |
| `--manjal` | Gold accent: highlights, decorative lines, active indicators, CTAs |
| `--pale-manjal` | Lighter gold: button hover tints |
| `--white` | Page background, card backgrounds |
| `--black` | Body text |
| `--gray` | Secondary text, labels |
| `#1a0a0a` | Footer background (dark maroon) |
| `#1e90ff` | Dodger blue: event type badges, updates type |

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.btn-primary` | Maroon button with gold text + pseudo-overlay hover |
| `.btn-gold` | Gold button with maroon text + pseudo-overlay hover |
| `.card` | White card with shadow and maroon left border |
| `.card-maroon` | Maroon background card |
| `.tab-button` | Section filter tabs with gold underline indicator |
| `.victory-stat` | Centered stats column |
| `.victory-number` | Large teko counter number |
| `.profile-card` | About info card with maroon left border |
| `.profile-card-label` | Gray uppercase label |
| `.timeline-dot` | Circular step indicator |
| `.timeline-year` | Year label under dot |
| `.timeline-content-card` | Content card with shadow |
| `.scroll-progress` | Fixed top gradient bar |
| `.nav-link` | Navigation link with hover gold color |
| `.grain-overlay` | Fixed full-screen SVG noise texture (z-index 99999, 2% opacity) |
| `.vignette-overlay` | Fixed full-screen radial vignette (transparent → black) |
| `.glass` | Glassmorphism: backdrop-blur 20px, white bg 4% |
| `.glass-dark` | Glassmorphism dark: backdrop-blur 20px, black bg 30% |
| `.cinematic-divider` | 2px gradient line (transparent → maroon → gold → maroon → transparent) |
| `.ambient-glow` | Absolute radial blur for decorative glows |
| `.ambient-gold` | Gold ambient glow gradient |
| `.ambient-maroon` | Maroon ambient glow gradient |
| `.glow-gold` | Gold box-shadow: 0 0 20px/60px |
| `.glow-maroon` | Maroon box-shadow: 0 0 20px/60px |
| `.text-glow-gold` | Gold text-shadow glow |
| `.pulse-gold` | Box-shadow pulse animation (2s infinite) |
| `.float` | Vertical float animation (3s infinite) |
| `.glow-pulse` | Opacity pulse (3s infinite) |
| `.font-teko` / `.font-ins-sans` / `.font-tamil` | Font family utilities |
| `.bg-maroon` / `.bg-manjal` / `.bg-marlot` | Background color utilities |
| `.text-maroon` / `.text-manjal` / `.text-pale-manjal` | Text color utilities |
| `.border-manjal` | Border color utility |

---

## Animation Reference

### GSAP + SplitType Patterns

| Pattern | Usage | Implementation |
|---------|-------|----------------|
| **SplitType char reveal** | Hero title | `new SplitType(el, { types: 'chars' })` + GSAP `fromTo` stagger |
| **SplitType word reveal** | ScrollStorytelling scenes | `new SplitType(el, { types: 'words' })` + ScrollTrigger animation |
| **ScrollTrigger pin** | ScrollStorytelling | `ScrollTrigger.create({ trigger, pin, scrub, end })` |
| **GSAP spring** | MagneticButton | `gsap.to(el, { x, y, duration: 0.6, ease: "elastic.out(1, 0.3)" })` |
| **Mouse-reactive glow** | HeroSection, VictoryCard | `gsap.to(glow, { x, y })` on `pointermove` |
| **Link hover spring** | Footer | `gsap.to(link, { color, x: 6, duration: 0.3, ease: "back.out(2)" })` |
| **Scene progress** | ScrollStorytelling | `useProgress()` from `@react-three` / manual ScrollTrigger tracking |

### Framer Motion Patterns

| Pattern | Usage | Implementation |
|---------|-------|----------------|
| **Viewport reveal** | All sections | `useInView(ref, { once: true, margin: "-80px" })` + `initial`/`animate` props |
| **Parallax scroll** | Hero | `useScroll()` → `useTransform(scrollYProgress, [0,1], ["0%","30%"])` |
| **Animated counters** | VictoryCard | `useMotionValue(0)` + `animate(motionValue, target, { duration, ease })` |
| **Staggered children** | CardNav, Announcements | Array.map with `transition.delay = base + i * stagger` |
| **Exit animations** | CardNav menu | `AnimatePresence` with `exit` prop |
| **Variants** | Stepper dots | Object with `inactive`/`active`/`complete` defining scale + backgroundColor |
| **whileHover** | Social icons (Footer) | `whileHover={{ scale: 1.15 }}` |
| **Loop** | Scroll arrow, pulse ring | `animate` with `repeat: Infinity`, `duration` |
| **Route-based** | CardNav close | `usePathname()` in useEffect triggers `closeMenu()` |

### Animation Timing Constants

```typescript
const smoothEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
```

### Animation Durations Reference

| Animation | Duration | Delay | Ease |
|-----------|----------|-------|------|
| Hero gold rule | 0.6s | 0.2s | smoothEase |
| Hero title line 1 | 0.5s | 0.3s | smoothEase |
| Hero title line 2 | 0.5s | 0.45s | smoothEase |
| Hero name block | 0.6s | 0.65s | smoothEase |
| Hero tagline | 0.6s | 0.85s | smoothEase |
| Hero scroll indicator | 0.6s | 1.5s | — |
| Hero scroll arrow bounce | 1.8s | — | easeInOut, infinite |
| Victory badge | 0.6s | — | smoothEase |
| Victory image | 0.8s | 0.4s | smoothEase |
| Victory stats | 0.7s | 0.2s | smoothEase |
| Victory opponent | 0.6s | 0.6s | smoothEase |
| Victory counter | 2.2–2.5s | — | smoothEase |
| Victory pulse ring | 2.5s | — | easeInOut, infinite |
| About header | 0.7s | — | smoothEase |
| About portrait | 0.7s | 0.2s | smoothEase |
| About bio text | 0.7s | 0.3s | smoothEase |
| About cards | 0.5s | 0.4 + i*0.1s | smoothEase |
| Timeline content | 0.4s (Stepper) | — | — |
| Step indicator | 0.3s | — | — |
| Connecting line | 0.4s | — | — |
| Auto-advance interval | 3.5s | — | — |
| DistrictMap header | 0.7s | — | smoothEase |
| DistrictMap map | 0.7s | 0.2s | smoothEase |
| Pulse ring 1 | 2s | 0s | easeOut, infinite |
| Pulse ring 2 | 2s | 0.65s | easeOut, infinite |
| Pulse ring 3 | 2s | 1.3s | easeOut, infinite |
| Erode label | 0.5s | 1s | — |
| Works column | 0.7s | 0.3s | smoothEase |
| Works items | 0.4s | i*0.08s | smoothEase |
| Announcements header | 0.7s | — | smoothEase |
| Announcements tabs | 0.5s | 0.2s | smoothEase |
| Announcement items | 0.5s | 0.3 + i*0.08s | smoothEase |
| Announcement arrow | 0.3s | — | — |
| Social header | 0.7s | — | smoothEase |
| Leader column | 0.7s | 0.2s | smoothEase |
| Party column | 0.7s | 0.3s | smoothEase |
| Follow arrow | 0.3s | — | — |
| Join left column | 0.7s | 0.2s | smoothEase |
| Join right column | 0.7s | 0.3s | smoothEase |
| CardNav content | 0.2s | — | — |
| CardNav cards | 0.3s | 0.08 + i*0.06s | custom |
| CardNav hamburger | 0.25s | — | ease |
| IntroLoader monogram | 0.8s | — | smoothEase |
| IntroLoader flare | 1.8s | — | easeInOut |
| IntroLoader bar | 2.5s | — | easeOut |
| IntroLoader exit | 0.6s | 2.6s | smoothEase |
| SplitType chars (Hero) | 0.4s | i*0.02s | easeOut |
| MagneticButton spring | 0.6s | — | elastic.out(1, 0.3) |
| GlowCard tilt | 0.3s | — | easeOut |
| Footer link spring | 0.3s | — | back.out(2) |
| Footer social hover | 0.2s | — | — |
| Footer link hover | 0.3s | — | — |

### CSS Animations

| Name | Properties | Duration | Iteration | Used For |
|------|-----------|----------|-----------|----------|
| `pulse-gold` | box-shadow 0→12px→0 | 2s | infinite | Timeline active dot, constituency pulse |
| `scroll-bounce` | translateY 0→6px→0 | 1.8s | infinite | Scroll indicator |
| `pulse-monogram` | opacity 0.15→0.3→0.15 | 1.5s | infinite | Loading state |
| `float` | translateY 0→(-10px)→0 | 3s | infinite | Decorative elements |
| `glow-pulse` | opacity 0.4→0.8→0.4 | 3s | infinite | Ambient glows |
| `scanline` | translateY -100%→100vh | 8s | infinite | Cinematic scanline effect (optional) |

---

## Scenes (Sections) Breakdown

### Home Page Scene Order

1. **IntroLoader** — 3.2s cinematic intro (VB monogram, gold flare, loading bar)
2. **Grain Overlay** — fixed SVG noise (2% opacity, z-index 99999)
3. **Vignette Overlay** — fixed radial gradient (z-index 99998)
4. **CardNav** — fixed top, z-index 99999, 96px spacer below
5. **HeroSection** — 100vh, SplitType char reveal, mouse-reactive glow
6. **VictoryCard** — maroon gradient, GSAP interactive glow overlay, counters
7. **CinematicDivider** — 2px gold gradient line
8. **AboutSection** — white bg, portrait + bio
9. **CinematicDivider**
10. **ScrollStorytelling** — 4-scene pinned GSAP SplitType narrative
11. **CinematicDivider**
12. **DistrictMap** — map + works tabs
13. **CinematicDivider**
14. **AnnouncementsList** — filterable cards
15. **CinematicDivider**
16. **SocialFeed** — two social columns
17. **CinematicDivider**
18. **JoinSection** — dark bg, form + CTA
19. **Footer** — dark maroon, 4 columns, GSAP link animations

### CinematicDivider Component
```
2px gradient line: transparent → maroon 20% → gold 50% → maroon 80% → transparent
```
Rendered between every major section across ALL pages (home + subpages).

---

## Data Flow & State Management

### Language State
```
LanguageContext (React Context + localStorage)
  ├── lib/translations.ts (key-value map for EN and TA)
  └── All "use client" components consume via `useLanguage()`
```

### Data Sources
- `lib/data.ts` — All static content (site config, elections, timeline, works, announcements, social links)
- `lib/translations.ts` — All bilingual strings
- `localStorage` — Language preference (`vijaybalaji_lang`) + grievance submissions (`vijaybalaji_grievances`)

### Component Data Dependencies

| Component | Data Dependencies |
|-----------|------------------|
| HeroSection | translations (hero_*), siteConfig |
| VictoryCard | translations (victory_*), electionData |
| AboutSection | translations (about_*), siteConfig |
| Timeline | translations (timeline_*) |
| DistrictMap | translations (constituency_*), constituencyAreas, constituencyWorks |
| AnnouncementsList | translations (announcements_*), announcements |
| SocialFeed | translations (social_*), socialLinks |
| JoinSection | translations (join_*) |
| Footer | translations (footer_*), footerLinks, socialLinks, siteConfig |

---

## Performance Optimizations

### Image Optimization
- Formats: AVIF + WebP (automatic via `next.config`)
- Device sizes: 640, 750, 828, 1080, 1200, 1920
- Image sizes: 16, 32, 48, 64, 96, 128, 256
- Cache TTL: 1 year (31536000s)
- `contentDispositionType: 'attachment'`
- Proper `sizes` props on all `fill` images:
  - CardNav logo: `sizes="32px"`
  - Footer logo: `sizes="56px"`
  - Hero mobile bg: `sizes="(max-width: 768px) 100vw"`
  - VictoryCard: `sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 320px"`
  - About portrait: `sizes="(max-width: 768px) 100vw, 380px"`
  - DistrictMap: `sizes="(max-width: 768px) 100vw, 50vw"`

### Code Splitting
- `next/dynamic` for: Timeline, DistrictMap, AnnouncementsList, SocialFeed, JoinSection
- Skeleton placeholders: `animate-pulse bg-gray-100` with appropriate heights (64–96)
- `optimizePackageImports: ['framer-motion']` in next.config

### Caching Strategy
| Asset Type | Cache Header | Source |
|-----------|--------------|--------|
| `_next/static/*` | `public, max-age=31536000, immutable` | vercel.json |
| `*.jpg, *.png, *.webp, etc.` | `public, max-age=31536000, immutable` | vercel.json |
| HTML pages | Vercel default (ISR-ready) | — |

### Font Loading
- Teko + Instrument Sans: `next/font/google` with `display: swap`
- Noto Sans Tamil: external link with `preconnect` hints
- CSS variables assigned at `<body>` level

### Security Headers
| Header | Value |
|--------|-------|
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=() |
| X-DNS-Prefetch-Control | on |

---

## SEO & Metadata

### layout.tsx Metadata

```typescript
title: {
  default: 'M. Vijay Balaji | Minister for Handlooms & Textiles | Govt of Tamil Nadu',
  template: '%s | M. Vijay Balaji — Erode East MLA',
}
description: 'Official website of M. Vijay Balaji...'
keywords: ['M. Vijay Balaji', 'Erode East MLA', 'Handlooms Minister Tamil Nadu', ...]
```

### Open Graph
| Property | Value |
|----------|-------|
| title | M. Vijay Balaji — Minister for Handlooms & Textiles, Govt of Tamil Nadu |
| description | Elected MLA for Erode East... |
| url | `NEXT_PUBLIC_SITE_URL` |
| siteName | M. Vijay Balaji Official |
| locale | ta_IN |
| alternateLocale | en_IN, ta |
| type | website |
| images | 1200×630, alt text |

### Twitter Card
| Property | Value |
|----------|-------|
| card | summary_large_image |
| title | M. Vijay Balaji \| Minister for Handlooms & Textiles |
| creator | @TVKVijayHQ |

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "M. Vijay Balaji",
  "alternateName": ["ம. விஜய் பாலாஜி", "Vijay Balaji MLA"],
  "jobTitle": "Minister for Handlooms and Textiles",
  "worksFor": { "@type": "Organization", "name": "Government of Tamil Nadu" },
  "memberOf": { "@type": "PoliticalParty", "name": "Tamilaga Vettri Kazhagam" }
}
```

### Technical SEO
- `robots.txt`: Allow all, sitemap reference
- `sitemap.xml`: 6 URLs with priorities (1.0 homepage, 0.8 subpages)
- Canonical URL: `NEXT_PUBLIC_SITE_URL`
- Language alternates: `en-IN`, `ta-IN`
- Google Site Verification: via env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

---

## Accessibility

### Focus Management
- `:focus-visible` — 2px gold outline, 3px offset on all interactive elements
- Custom styling for `button:focus-visible`, `a:focus-visible`

### ARIA Attributes
| Element | Attribute |
|---------|-----------|
| Hamburger button | `aria-label="Open menu" / "Close menu"` |
| Language toggle | `aria-label` with bilingual text |
| Timeline dots | `role="button"`, `aria-label="Go to year {year}"` |
| Map SVG | `aria-label="Tamil Nadu map..."`, `role="img"` |
| Form inputs | `htmlFor` + `id` pairing |
| Form submit | `aria-live="polite"` for success |

### Reduced Motion
- `@media (prefers-reduced-motion: reduce)` disables all animations and transitions
- Applies to: `*`, `*::before`, `*::after` — all animation-duration and transition-duration set to 0.01ms

### Semantic HTML
- `<nav>` for navigation
- `<main>` for primary content
- `<footer>` with `shrink-0` for layout stability
- `<section>` elements with `id` attributes for anchor linking
- `<h1>` through `<h4>` heading hierarchy

---

## Deployment

### Vercel Configuration (vercel.json)

```json
{
  "framework": "nextjs",
  "regions": ["bom1"],
  "headers": [
    { "source": "/(.*)", "headers": [security headers] },
    { "source": "/_next/static/(.*)", "headers": [1yr cache] },
    { "source": "/(.*).(jpg|jpeg|png|webp|avif|svg|ico|mp4)", "headers": [1yr cache] }
  ],
  "redirects": [{ "source": "/home", "destination": "/", "permanent": true }]
}
```

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://vijaybalajimla.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

### Build & Deploy
```bash
npm run build      # Production build (static pages)
npm run start      # Production server
# Vercel: auto-deploys from main branch
```

### 404 Page
- Maroon gradient background
- Large gold "404" (Teko, ~120px)
- Bilingual message: "இந்த பக்கம் கிடைக்கவில்லை" / "Page not found"
- "BACK TO HOME" gold CTA button

### Loading State
- Full page, white background
- Centered "VB" monogram (maroon, Teko, ~64px)
- Pulse animation (opacity 0.15→0.3, 1.5s infinite)
- "Loading..." in small text below

---

## Recent Changes

| Change | Reason | Files |
|--------|--------|-------|
| Removed WhatsApp | Privacy/scope reduction | `data.ts`, `Footer.tsx`, `JoinSection.tsx`, `contact/page.tsx` |
| Removed family bio card | Privacy | `data.ts`, `translations.ts`, `AboutSection.tsx` |
| New Hero (minimal text) | Cleaner design, no portrait | `HeroSection.tsx` |
| New Footer (dark 4-col) | Brand consistency, better UX | `Footer.tsx` |
| New CardNav (Framer Motion) | Removed GSAP dependency | `CardNav.tsx`, `CardNav.css` |
| Stepper integration | Auto-advance timeline | `Stepper.tsx`, `Stepper.css`, `Timeline.tsx` |
| Title update | Role change to Minister | `data.ts`, `translations.ts`, `HeroSection.tsx` |
| Erode Tamil spelling fix | `எரோடு` → `ஈரோடு` | All TS/TSX files |
| SEO metadata + JSON-LD | Search visibility | `layout.tsx` |
| Section dividers on home | Visual separation | `page.tsx` |
| Vercel deployment config | Production deploy | `vercel.json`, `.env.example` |
| Image sizes optimization | Perf warnings fixed | `HeroSection.tsx`, `VictoryCard.tsx`, `CardNav.tsx`, `Footer.tsx` |
| Stepper transparent fix | Framer Motion warning | `Stepper.tsx` |
| Background image fix | 404 error | `JoinSection.tsx` |
| Cinematic upgrade v2 | Premium feel, SplitType, GSAP scroll narrative | New: `IntroLoader.tsx`, `ScrollStorytelling.tsx`, `lib/animation.tsx` |
| Intro loader | 3.2s VB monogram reveal with gold flare | `IntroLoader.tsx` |
| Scroll storytelling | 4-scene GSAP SplitType pinned narrative | `ScrollStorytelling.tsx` |
| GSAP animation library | Shared MagneticButton, GlowCard, ScrollTrigger hooks | `lib/animation.tsx` |
| Hero SplitType upgrade | Char-by-char text reveal + mouse-reactive glow | `HeroSection.tsx` |
| VictoryCard GSAP glow | Interactive mouse-reactive glow overlay | `VictoryCard.tsx` |
| Footer GSAP animations | Color + x spring on link hover, ambient radial glows | `Footer.tsx` |
| Cinematic CSS system | Grain, vignette, glassmorphism, ambient glows, dividers, buttons | `globals.css` |
| Global grain + vignette | Fixed overlays on all pages | `globals.css`, `page.tsx` |
| `lib/animation.ts` → `.tsx` | JSX parse error fix | `lib/animation.tsx` |
| CardNav z-index fix | `9999` → `99999` to stay above overlays | `CardNav.css` |
| CardNav position fix | `top: 1.5em` → `top: 0` with `padding-top: 0.75em` | `CardNav.css` |
| CardNav overflow fix | Removed `overflow: hidden` to prevent content clipping | `CardNav.css` |
| Cinematic dividers on subpages | Visual consistency across all routes | All `*/page.tsx` files |
| Grain + vignette on subpages | Cinematic consistency across all routes | `about/`, `constituency/`, `contact/`, `gallery/`, `updates/` page.tsx |
| Removed unused imports | Code cleanup | `page.tsx`, `contact/page.tsx`, `constituency/page.tsx` |

---

## QA Checklist

### LANGUAGE
- [x] Toggle switches ALL text strings — no English leaks in Tamil mode
- [x] localStorage persists language across page refresh
- [x] Tamil text renders in Noto Sans Tamil — no fallback squares
- [x] All sub-pages read language from context

### VISUAL
- [x] IntroLoader plays on first visit (3.2s VB monogram + gold flare)
- [x] Grain overlay visible (SVG noise, 2% opacity)
- [x] Vignette overlay visible (radial darken at edges)
- [x] Hero SplitType char reveal animates on load
- [x] Hero mouse-reactive radial glow follows cursor
- [x] VictoryCard GSAP glow overlay reacts to mouse
- [x] ScrollStorytelling 4 scenes pin + split reveals work
- [x] Scroll progress bar visible on all pages
- [x] Hero parallax works on desktop and mobile
- [x] Victory counters animate up from 0 on first scroll
- [x] Stepper timeline auto-advances every 3.5s
- [x] Map Erode marker pulses correctly
- [x] CardNav opens/closes with AnimatePresence (z-index above overlays)
- [x] Footer 4-column grid aligns properly, GSAP link animations work
- [x] No horizontal overflow on any page
- [x] Cinematic dividers visible between sections on ALL pages

### PERFORMANCE
- [x] Fonts loaded with `display: swap`
- [x] Below-fold sections lazy-loaded via `next/dynamic`
- [x] Image formats optimized (AVIF, WebP)
- [x] Proper `sizes` props on all fill images
- [x] Cache headers configured for Vercel
- [x] Bundle optimized (framer-motion tree-shaken)

### ACCESSIBILITY
- [x] Tab navigation works through entire page
- [x] Focus rings visible on all interactive elements
- [x] Form labels connected to inputs via `htmlFor` + `id`
- [x] Reduced motion media query respected
- [x] ARIA labels on navbar, timeline dots, map, forms

### FUNCTIONALITY
- [x] Grievance form submits and shows success state
- [x] Updates search filters results in real-time
- [x] Gallery lightbox opens and closes
- [x] Language toggle works on every page
- [x] All internal links navigate correctly
- [x] Footer links work
- [x] 404 page displays on unknown routes
- [x] Loading state shows on page transitions
