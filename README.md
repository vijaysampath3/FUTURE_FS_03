<div align="center">

# ☕ Sugarbloom Delight

**Vijayawada's most Instagram-worthy café — handcrafted coffees, cloud-soft pastries, and artisan ice creams.**

[![Live Site](https://img.shields.io/badge/☁️_Live_Site-sugarbloom.pages.dev-c9853a?style=for-the-badge)](https://sugarbloom.pages.dev)
[![GitHub](https://img.shields.io/badge/GitHub-vijaysampath3%2FFUTURE__FS__03-181717?style=for-the-badge&logo=github)](https://github.com/vijaysampath3/FUTURE_FS_03)
[![Internship](https://img.shields.io/badge/Future_Interns-Task_3-e05c2a?style=for-the-badge)](https://futureinterns.com)

</div>

---

## 📌 Project Overview

**Sugarbloom Delight** is a full-featured, multi-page premium café website built as part of **Future Interns — Full Stack Web Development Task 3**. The project simulates a real local business website for a fictional café in Vijayawada, Andhra Pradesh — designed to attract customers, showcase the menu, and create a strong digital presence.

The website is built to feel **cinematic, luxurious, and Instagram-worthy** — matching the aesthetic expectations of Gen Z users, food bloggers, and social media influencers.

> 💡 **Task Goal:** Build a professional website for a local business, pitch it to the owner as a live project, and demonstrate real-world freelancing and client communication skills.

---

## 🌐 Live Demo

| Platform | Link |
|---|---|
| ☁️ **Cloudflare Pages (Live)** | [sugarbloom.pages.dev](https://sugarbloom.pages.dev) |
| 📁 **GitHub Repository** | [github.com/vijaysampath3/FUTURE_FS_03](https://github.com/vijaysampath3/FUTURE_FS_03) |

---

## ✨ What's Inside

### 🏠 Homepage — 13 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Sticky Navbar** | Transparent top → frosted-glass espresso on scroll with 500ms transition |
| 2 | **Hero** | Full-bleed editorial layout · badge pill · serif headline · dual CTAs · styled café image |
| 3 | **Stats Bar** | Social proof — 12K+ Instagram followers · 4.9★ Google Rating · 50+ Menu Items |
| 4 | **Marquee Ticker** | Infinite-loop animated belt showcasing category highlights |
| 5 | **Our Story** | Brand narrative with curated café photography and dual overlapping images |
| 6 | **Menu Previews** | Three category sections (Café · Bakery · Ice Cream) with 3-item preview + "View Full Menu" CTA |
| 7 | **Weekly Specials** | Limited-time and seasonal drops in an editorial bento grid |
| 8 | **Captured at Sugarbloom** | Instagram-linked masonry photo gallery with hover like-count overlay |
| 9 | **Why Sugarbloom?** | 6 full-bleed image tiles with numbered badges and hover description reveal |
| 10 | **Testimonials** | Customer review cards with star ratings and reviewer roles |
| 11 | **Contact** | Location · opening hours · Google Maps embed · direct contact info |
| 12 | **Footer** | Social links · quick navigation · brand tagline · 4-column grid |
| 13 | **Floating WhatsApp** | Always-visible quick-contact shortcut (bottom-right FAB) |

---

### 📋 Dedicated Menu Pages — 36 Items Total

| Route | Page | Items |
|---|---|---|
| `/menu/cafe` | ☕ All Coffees | 12 signature drinks |
| `/menu/bakery` | 🥐 Full Bakery Menu | 12 fresh pastries & cakes |
| `/menu/icecream` | 🍦 All Ice Cream Flavours | 12 handcrafted flavours |

**Every menu page includes:**
- Animated page fade-in/out transition
- Bold serif hero heading with kicker label and divider
- Responsive 4-column product grid (2-col tablet · 1-col mobile)
- Square product cards with hover zoom + badge chips (Viral · Bestseller · New · Seasonal)
- AI-generated custom product photography
- `← Back to Menu` navigation

---

## 🗂️ Project Structure

```
sugarbloom-delight/
├── public/
│   └── images/                  # AI-generated product photography
├── src/
│   ├── components/
│   │   ├── Nav.tsx              # Shared sticky navbar (all pages)
│   │   ├── AnimatedSection.tsx  # Reusable scroll-reveal wrapper
│   │   ├── WhyUs.tsx            # Full-bleed feature tiles section
│   │   ├── Hero.tsx             # Homepage hero section
│   │   ├── MenuPreview.tsx      # 3-item preview grid per category
│   │   ├── Gallery.tsx          # Instagram masonry gallery
│   │   ├── Testimonials.tsx     # Customer review cards
│   │   ├── Contact.tsx          # Location & contact section
│   │   └── FullMenuPage.tsx     # Shared layout — all 3 menu pages
│   ├── routes/
│   │   ├── __root.tsx           # Root layout + SEO meta tags
│   │   ├── index.tsx            # Homepage (all 13 sections)
│   │   └── menu/
│   │       ├── cafe.tsx         # /menu/cafe
│   │       ├── bakery.tsx       # /menu/bakery
│   │       └── icecream.tsx     # /menu/icecream
│   ├── styles.css               # Global Tailwind CSS + design tokens
│   ├── router.tsx               # TanStack Router config
│   └── start.ts                 # Server entry point
├── public/
│   └── _redirects               # Cloudflare Pages SPA routing
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI component framework |
| **TypeScript** | Latest | Type-safe development |
| **TanStack Router** | v1 | Type-safe file-based routing |
| **TanStack Start** | Latest | SSR / full-stack framework |
| **Vite** | 7 | Lightning-fast dev server & build tool |
| **Tailwind CSS** | v4 | Utility-first styling |
| **Framer Motion** | Latest | Page transitions & scroll animations |
| **Cloudflare Pages** | — | Production deployment platform |
| **Prettier + ESLint** | — | Code quality & formatting |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `espresso` | `#1e0a02` | Primary background · navbar · footer |
| `cream` | `#fdf6ee` | Primary text on dark backgrounds |
| `caramel` / `gold` | `#c9853a` | Accent · CTAs · badges · prices |
| `rose` | `#f2d0d0` | Ice cream section accent |
| `ink` | `#1a0a00` | Text on light backgrounds |

### Typography

| Role | Font | Weight |
|---|---|---|
| Display headings | Playfair Display (serif) | 600–700 |
| Body & UI | Inter (sans-serif) | 300–500 |

### Design Principles
- **Mobile-first** — designed for 320px → 1440px+
- **Cinematic dark aesthetic** — espresso + cream + gold
- **Photography-driven** — every section leads with food imagery
- **Motion-enhanced** — subtle Framer Motion animations throughout
- **Performance-minded** — lazy loading, optimised images, SSR

---

## 🚀 Getting Started

### Prerequisites
- Node.js `18+` or Bun

### Installation

```bash
# Clone the repository
git clone https://github.com/vijaysampath3/FUTURE_FS_03.git
cd FUTURE_FS_03

# Install dependencies
npm install   # or: bun install
```

### Development

```bash
npm run dev
# App available at http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview   # preview the production build locally
```

### Code Quality

```bash
npm run lint      # ESLint check
npm run format    # Prettier formatting
```

### Deploy to Cloudflare Pages

```bash
# This project auto-deploys via Cloudflare Pages
# Every push to the main branch triggers a new deployment

git add .
git commit -m "your commit message"
git push

# Cloudflare Pages will automatically build and deploy
# Live at: https://sugarbloom.pages.dev
```

---

## 📸 Image Credits

| Source | Used For |
|---|---|
| **AI-generated images** | All hero images · Why Us tiles · Weekly Specials |
| **AI-generated (stored in `/public/images/`)** | All 36 dedicated menu page product cards |
| **Unsplash (free licence)** | Background textures and gallery shots |

---

## 📊 Project Highlights

```
✅ 13 homepage sections
✅ 3 dedicated menu pages
✅ 36 total menu items with individual product cards
✅ Fully mobile responsive (320px → 1440px+)
✅ SSR via TanStack Start
✅ Deployed on Cloudflare Pages
✅ AI-generated custom product photography
✅ Framer Motion page transitions & scroll reveals
✅ Floating WhatsApp CTA
✅ Google Maps embed in contact section
✅ Open Graph + Twitter meta tags for social sharing
✅ PWA-ready (Apple mobile web app capable)
```

---

## 🏆 What This Project Demonstrates

| Skill | How |
|---|---|
| **Frontend development** | React 19 + TypeScript + Tailwind CSS v4 |
| **Routing & navigation** | TanStack Router with type-safe file-based routes |
| **Animation & UX** | Framer Motion scroll reveals + page transitions |
| **Responsive design** | Mobile-first grid layouts across all breakpoints |
| **SEO & metadata** | Open Graph, Twitter cards, canonical URLs |
| **Deployment** | Cloudflare Pages — auto-deploys on every GitHub push |
| **Design thinking** | Color palette, typography hierarchy, spacing system |
| **Real-world pitch** | Website designed as a client deliverable for a local business |

---

## 📄 License

This project was created as part of **Future Interns — Full Stack Web Development Internship (Task 3 — FUTURE_FS_03)**.

Free to use for portfolio and learning purposes.

---

<div align="center">

**Made with ☕ 🥐 🍦 in Vijayawada, Andhra Pradesh**

*Sugarbloom Delight — Where Every Bite Blooms.*

</div>
