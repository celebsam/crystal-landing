# Crystal Kizor — Personal Brand & Ecosystem Landing Page

A bespoke, high-performance editorial landing page designed and built for the **Crystal Kizor** brand. 

Crystal Kizor is an architect, designer, entrepreneur, speaker, researcher, and ecosystem builder operating at the intersection of climate-responsive architecture, contemporary African design, educational equity, and spiritual purpose.

This landing page solves the challenge of uniting seven distinct ventures under one singular, cohesive brand identity—answering the four foundational questions for every first-time visitor:
1. **Who is Crystal Kizor?**
2. **What does she do?**
3. **What is she building?**
4. **Where should I go next?**

---

## 🌟 The Brand Ecosystem

Rather than presenting an assortment of unrelated businesses, the platform organizes Crystal’s work into three complementary domains:

```
                              CRYSTAL KIZOR
                     "Spaces · Systems · Purpose"
                                   │
      ┌────────────────────────────┼────────────────────────────┐
      ▼                            ▼                            ▼
SPACES & OBJECTS           CAPACITY & LEARNING           VOICE & CONVICTION
(The Physical Realm)     (The Systemic Domain)         (The Spiritual & Cultural)
  • Studio COKA             • AKO Alliance                • Speaking Engagements
  • ELEvated                • The Effective Architect     • Alive and Free
                                                           • Research & Authorship
```

### The 7 Integrated Initiatives

| Initiative | Category | Focus & Mission | Primary Action |
| :--- | :--- | :--- | :--- |
| **Studio COKA** | *Spaces & Objects* | Full-service architecture, interior design, and construction practice specializing in climate-responsive tropical structures, passive cooling, and tectonic honesty. | [studiocoka.com](https://studiocoka.com/) |
| **ELEvated** | *Spaces & Objects* | Contemporary furniture, acoustic wood partitions, and bespoke interior objects rooted in African context, timber, woven textures, and craft heritage. | Product inquiry / Commissions |
| **AKO Alliance** | *Learning & Opportunity* | Social impact initiative expanding access to quality education, creative learning spaces, and youth opportunities across Nigeria and West Africa. | Educational partnerships & grants |
| **The Effective Architect (TEA)** | *Learning & Opportunity* | Architecture education and media platform empowering practitioners to build resilient, profitable, and impactful design careers through podcasts and guides. | Learning community access |
| **Speaking Engagements** | *Ideas & Purpose* | Keynotes, panels, and lectures on climate adaptation in tropical cities, the African built environment, spatial equity, and design entrepreneurship. | Booking inquiry desk |
| **Alive and Free** | *Ideas & Purpose* | Christian youth movement creating safe spaces for young people to discover spiritual identity, inner healing, truth, purpose, and life in Christ. | Youth community connection |
| **Research, Writing & Ideas** | *Ideas & Purpose* | Crystal's independent scholarship exploring vernacular memory, passive architectural cooling, public space dignity, and spatial theology. | Studio COKA journal & reading desk |

---

## 🏛️ Landing Page Architecture & User Experience

The page is architected to guide visitors seamlessly from orientation to deep engagement:

### 1. Hero Experience & First-Time Visitor Matrix
- **Visual Backdrop:** The oculus tree courtyard (`IMG_2105 2.JPG`) paired with a high-fidelity studio portrait of Crystal at her drafting table (`Architectural Studio Portrait.png`).
- **Quick-Answer Overview Bar:** Explicitly answers *Who is she?*, *What does she do?*, and *What is she building?* above the fold.
- **Discipline Strip:** Highlights the continuous thread connecting architecture, interiors, furniture, education, keynotes, and faith.

### 2. Section 01: The Mind Behind The Work (Introduction)
- Intimate editorial layout featuring Crystal seated beside foundational volumes on African Architecture.
- Details the three core anchors:
  - **Spatial Excellence:** Climate-conscious buildings designed for the realities of tropical Africa.
  - **Capacity & Opportunity:** Educational equity for children (AKO) and professional mastery for architects (TEA).
  - **Cultural Dignity:** Rooting objects, ideas, and faith in heritage and healing.

### 3. Section 02: The Integrated Ecosystem
- Multi-category filterable interface (*All initiatives*, *Spaces & objects*, *Learning & opportunity*, *Ideas & purpose*).
- Rich initiative cards featuring high-resolution imagery, descriptive taglines, and expandable accordions detailing specific missions and metrics.

### 4. Section 03: Selected Realizations (Portfolio Gallery)
- Direct visual evidence of built work, materials, and spatial craftsmanship:
  - **Studio COKA HQ & Cantilevers:** Overhanging eaves, natural breeze paths, and tropical courtyard integration.
  - **The Earth Amphitheatre & Learning Shell:** Rammed-earth community gathering pavilion with timber louvered ceiling.
  - **ELEvated Vertical Divider & Swivel Suite:** Architectural timber slat divider paired with bespoke upholstered seating.
  - **The Mahogany Study:** Private executive library with vertical fluted wood panels and integrated cove lighting.
  - **Artisan Weaving Corridor:** Hand-woven craft alongside operable full-height timber louver shutters.
  - **Daylight Lightwell Atrium:** Double-height architectural void diffusing zenithal sunlight.

### 5. Section "Where Should I Go Next?" (Interactive Pathways)
- Specifically answers the visitor's fourth question with 6 customized pathway cards:
  - *Clients & Developers* ➔ Commission Studio COKA.
  - *Event Curators & Conference Organizers* ➔ Book a keynote lecture.
  - *Architects & Students* ➔ Join The Effective Architect platform.
  - *Philanthropists & NGOs* ➔ Partner with AKO Alliance on education.
  - *Interior Designers & Collectors* ➔ Inquire about ELEvated bespoke furniture.
  - *Youth & Seekers* ➔ Connect with the Alive and Free faith movement.

### 6. Section 04: Ideas, Research & Inquiry (Perspective)
- Interactive reading tab deck featuring excerpts from Crystal's essays:
  - *01 Climate Memory: Why Passive African Architecture is the Future*
  - *02 The Dignity of Public Space in African Cities*
  - *03 Beyond the Drawing Board: The Business of Effective Architecture*
  - *04 Faith, Beauty, and the Courage to Build*
- Accompanied by architectural research studies into terracotta screen breeze permeability.

### 7. Section 05: Pre-Routed Conversation Desk (Contact)
- Interactive category selector allowing visitors to pre-format their subject line before drafting their inquiry to Studio COKA's verified office address (`contact@studiocoka.com`).

---

## 🎨 Design System & Aesthetics

- **Typography:**
  - **Display / Editorial:** *Instrument Serif* (Google / Fontsource) — warm, architectural, and literary.
  - **Body / Interface:** *Manrope* (Google / Fontsource) — clean, highly legible grotesque sans-serif with geometric precision.
- **Color Palette:**
  - **Warm Background:** `oklch(0.975 0.008 85)` (sand, raw linen, warm paper).
  - **Deep Olive / Bronze Primary:** `oklch(0.38 0.045 115)` (grounded architectural mineral tone).
  - **Foreground Charcoal:** `oklch(0.185 0.012 110)` (high-contrast legibility).
  - **Subtle Earth Accents:** Terracotta (`oklch(0.52 0.14 45)`) and sunlit stone washes.
- **Micro-Interactions:** Subtle hover translations on arrow glyphs, card elevation lift effects, and accessible focus outlines.

---

## 🖼️ Media & Image Optimization

All media assets are stored locally in `/public/img/` and rendered exclusively via Next.js `<Image />` (`next/image`):
- Automatic WebP/AVIF modern image format conversion.
- Responsive `sizes` attributes tuned for mobile, tablet, and desktop viewports.
- Priority preloading for hero above-the-fold assets (`priority={true}`).
- Lazy loading for portfolio cards and accordions.
- Zero layout shifts (CLS = 0) with explicit aspect ratios and responsive fill wrappers.

---

## 💻 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- **Library:** [React](https://react.dev/) 19
- **Styling:** Tailwind CSS v4 + Custom Design Tokens (`app/globals.css`)
- **Fonts:** `@fontsource/instrument-serif`, `@fontsource/manrope`
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript 5

---

## 📁 Repository Structure

```
next-app/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Custom luxury editorial design tokens & responsive rules
│   ├── layout.tsx               # Root layout, metadata, OpenGraph, font imports
│   └── page.tsx                 # Main single-page landing page assembly
├── components/
│   ├── brand/
│   │   ├── ecosystem.tsx         # Section 02: 7 Initiatives, category filters & accordions
│   │   ├── editorial-sections.tsx# Introduction, Perspective (Essays), Contact & Footer
│   │   ├── hero.tsx              # Hero section with portrait badge & quick answers
│   │   ├── portfolio-gallery.tsx # Section 03: Selected Realizations & built architecture
│   │   ├── site-header.tsx       # Sticky navigation, mobile drawer & skip link
│   │   └── visitor-pathways.tsx  # "Where should I go next?" interactive persona router
│   └── ui/
│       └── button.tsx            # CVA button component (editorial variants)
├── data/
│   └── brand.ts                 # Single source of truth for initiatives, essays, pathways, links
├── public/
│   └── img/
│       ├── Crystal_s pictures/  # Professional studio portraits of Crystal Kizor
│       └── ...                  # Realized Studio COKA architecture, pavilions, interiors
├── store/
│   └── site.ts                  # Zustand state store for category filter & mobile menu
├── next.config.ts               # Turbopack & Next.js build configuration
├── package.json                 # Project dependencies & scripts
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ installed.

### Installation

```bash
# Clone the repository and navigate into the workspace
cd next-app

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your console) in your browser.

### Building for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm run start
```

### Linting

```bash
npm run lint
```

---

## ♿ Accessibility & SEO

- **Semantic HTML5:** Built using standard `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements with unique descriptive IDs.
- **Keyboard Navigation:** Includes a skip-to-content link (`#main`), visible `:focus-visible` outlines, and an `Escape` key listener on the mobile drawer.
- **Screen Reader Support:** ARIA attributes (`aria-expanded`, `aria-selected`, `aria-live="polite"`, `role="tablist"`) across filter tabs and accordions.
- **SEO & OpenGraph:** Configured in `app/layout.tsx` with title tags, meta descriptions, and social sharing metadata.
- **Reduced Motion:** Respects `prefers-reduced-motion: reduce` by disabling transitions and animations for sensitive users.

---

## 📄 License & Credits

- **Subject & Vision:** [Crystal Kizor](https://www.linkedin.com/in/crystal-kizor/) · [Studio COKA](https://studiocoka.com/)
- **Inquiries:** [contact@studiocoka.com](mailto:contact@studiocoka.com)
- All architecture, design, and portrait photographs remain the intellectual property of their respective creators and Studio COKA.
