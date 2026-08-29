# SPEC.md — Kanok Miah Website Rebuild

**Repository:** kanok-miah-digital-marketing-website
**Domain:** kanokmiah.com
**Framework:** Next.js 16.x + TypeScript + Tailwind CSS v4
**Deploy:** Vercel

---

## Mission

Rebuild kanokmiah.com as a fast, correctly-architected Next.js site that can scale to six countries without breaking its information architecture.

The site sells one thing: **Kanok Miah as a Digital Growth & AI SEO Consultant.**

---

## Non-negotiables

1. Never invent statistics, client names, testimonials, prices, or case-study metrics.
2. Never ship a page not in the route manifest (src/lib/routes.ts).
3. Every unit of work ends with a commit pushed.
4. No LocalBusiness schema on any page except /locations/bangladesh/.
5. Do not build all 48 service×country pages — only gated ones.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.x, App Router |
| React | 19 |
| Language | TypeScript, strict: true |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Fonts | next/font/google |
| Deploy | Vercel |
| Package manager | npm |

---

## Design Tokens

- Signal: #39B549 (brand green)
- Signal Dark: #2A8A37 (hover, links)
- Forest: #0F2A17 (ink, dark sections)
- Paper: #F4F6F3 (base surface)
- Surface: #FFFFFF (raised cards)
- Graphite: #5B6660 (secondary text)

Ratio: paper ~70%, forest ~20%, signal ~7%, graphite ~3%

---

## Fonts

- Display: Archivo Expanded (700) — H1, section H2
- Body: Public Sans (400/500/600) — prose, nav, buttons
- Data: JetBrains Mono (500) — numbers, metrics, deltas
- Bengali: Anek Bangla — /locations/bangladesh/ only

---

## Route Manifest

See src/lib/routes.ts for the complete route manifest.

---

## Verified Facts

See src/lib/site.ts for all verified facts as typed constants.

---

## Quality Gates

- Lighthouse: Performance ≥ 95, Accessibility 100, SEO 100
- TypeScript strict mode
- Zero invented facts
- Breadcrumbs on every page
- ≥3 outbound internal links per page
