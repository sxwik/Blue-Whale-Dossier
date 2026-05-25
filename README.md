<div align="center">

```
██████╗ ██╗     ██╗   ██╗███████╗    ██╗    ██╗██╗  ██╗ █████╗ ██╗     ███████╗
██╔══██╗██║     ██║   ██║██╔════╝    ██║    ██║██║  ██║██╔══██╗██║     ██╔════╝
██████╔╝██║     ██║   ██║█████╗      ██║ █╗ ██║███████║███████║██║     █████╗
██╔══██╗██║     ██║   ██║██╔══╝      ██║███╗██║██╔══██║██╔══██║██║     ██╔══╝
██████╔╝███████╗╚██████╔╝███████╗    ╚███╔███╔╝██║  ██║██║  ██║███████╗███████╗
╚═════╝ ╚══════╝ ╚═════╝ ╚══════╝     ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
```

**D O S S I E R**

*A Digital Anthropology Archive · 2016–2017*

---

[![STATUS](https://img.shields.io/badge/STATUS-DECLASSIFIED-cc0000?style=for-the-badge&labelColor=0a0a0a)](/)
[![CLEARANCE](https://img.shields.io/badge/CLEARANCE-PUBLIC-444?style=for-the-badge&labelColor=0a0a0a)](/)
[![React](https://img.shields.io/badge/REACT-18-61DAFB?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=0a0a0a)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TYPESCRIPT-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=0a0a0a)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/TAILWIND-4.x-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC&labelColor=0a0a0a)](https://tailwindcss.com/)
[![Framer](https://img.shields.io/badge/FRAMER_MOTION-12-A855F7?style=for-the-badge&logo=framer&logoColor=A855F7&labelColor=0a0a0a)](https://www.framer.com/motion/)

<br/>

> *"The most terrifying application was the one that never existed."*

<br/>

</div>

---

## ∅ · PREAMBLE

This is not a standard repository.

There is no backend. There are no users to track. No database of victims, no recovered chat logs, no intercepted transmissions. What exists here is a **frontend artifact** — a document built to look, feel, and breathe like evidence — engineered to examine how a decentralized social panic crystallized into global institutional hysteria between 2016 and 2017.

The **Blue Whale Dossier** is a single-page digital archive. An editorial interface. A post-mortem dressed as a museum exhibit. Built not to sensationalize, but to anatomize: to isolate the mechanisms by which ambiguous online phenomena become myths, myths become headlines, and headlines become legislation.

This repository is the source. The study. The method.

---

## ⬡ · THE VISION

> **Premium editorial experience.** Archival aesthetics. Structural restraint. Cinematic micro-interactions.

The design brief was deceptively simple: build something that feels like reading a **declassified intelligence brief inside a modern museum**. No dashboard chrome. No SaaS gradients. No card shadows borrowed from Notion or Linear.

The visual identity commits to one precise atmosphere — **institutional gravity**. The kind of weight a document carries when the events it describes actually happened to real people.

### Core Aesthetic Tenets

| Principle | Execution |
|---|---|
| **Architectural Honesty** | Zero ornamental UI. Every element earns its presence or gets cut. |
| **Editorial Typography** | `Playfair Display` for dominant headings. `Inter` for long-form readability. `JetBrains Mono` for metadata, classifications, and technical labels. |
| **Controlled Restraint** | `65ch` max-widths. Deliberate spacing ratios. Whitespace as a *structural material*, not an afterthought. |
| **Archival Interaction** | Redacted text reveals on hover. Micro-delayed element fades. Smooth Y-axis drift as content enters the viewport. |
| **Textural Depth** | CSS-generated SVG fractal noise overlaid at near-zero opacity — paper grain without a single bitmap asset. |

---

## ⬡ · STACK & ARCHITECTURE

```
╔══════════════════════════════════════════════════════════════╗
║  TECHNICAL SPECIFICATION · BLUE WHALE DOSSIER v1.0          ║
╠══════════════════════════════════════════════════════════════╣
║  RUNTIME         React 18 · Functional Components · Hooks   ║
║  LANGUAGE        TypeScript 5.x · Strict Mode               ║
║  BUILD           Vite · HMR · Optimized Production Bundle   ║
║  STYLING         Tailwind CSS v4 · Custom Token System      ║
║  MOTION          Framer Motion 12 · Physics Easings         ║
║  ARCHITECTURE    SPA · Zero Backend · Zero Auth             ║
╚══════════════════════════════════════════════════════════════╝
```

### Implementation Notes

**CSS Noise Layer** — A `.noise-overlay` class renders a high-performance SVG fractal noise filter (`feTurbulence`) across the full viewport, creating an analogue paper/dust texture without loading a single external image asset. The filter is composited at `opacity: 0.04` — below conscious perception, above flatness.

**Ambient Depth System** — Background layers combine an ivory base (`#F8F7F4`) with fixed radial gradients using near-zero opacity blood-red and charcoal accents. The result is a subtle atmospheric warmth — visible when you're not looking for it, invisible when you are.

**Physics-Based Scroll Animation** — Framer Motion's `staggerChildren` orchestrates viewport-entry animations across all major sections. Custom easing `[0.16, 1, 0.3, 1]` produces a slight overshoot-and-settle at rest — the motion of a document being placed on a table, not a web element fading in.

**Interactive Redaction** — Selected text blocks use CSS `blur` + `letter-spacing` toggled on `:hover`, simulating a redacted document reveal. The interaction communicates: *this information exists, but at what cost to clarity?*

---

## ⬡ · DOSSIER STRUCTURE

The archive is divided into six sections, each functioning as a discrete analytical chapter.

```
┌─────────────────────────────────────────────────────────────┐
│  § 01  SPREAD TIMELINE                                       │
│        Chronological trace: VKontakte origins → global      │
│        institutional response. Mapping the contagion path.  │
├─────────────────────────────────────────────────────────────┤
│  § 02  VERIFICATION ANALYSIS                                 │
│        Confirmed Criminal Activity ≠ Unverified Media       │
│        Hysteria. Structural breakdown of what was real.     │
├─────────────────────────────────────────────────────────────┤
│  § 03  INFORMATION CONTAGION SEQUENCE                        │
│        Five-stage memetic spread model: localized           │
│        formation → normalization → myth solidification.     │
├─────────────────────────────────────────────────────────────┤
│  § 04  SOCIOLOGICAL VULNERABILITIES                          │
│        Sleep deprivation. Sunk cost fallacies. Adolescent   │
│        identity formation. The pre-existing conditions.     │
├─────────────────────────────────────────────────────────────┤
│  § 05  TECHNICAL AUDIT & LEGAL PRECEDENTS                   │
│        Confirmation: no standalone APK exists or existed.   │
│        Curator convictions. The actual crime on record.     │
├─────────────────────────────────────────────────────────────┤
│  § 06  INTERFACE MYTHOLOGY                                   │
│        Digital anthropology commentary on how the public    │
│        mind anthropomorphizes decentralized harm into       │
│        legible, threatening "applications."                  │
└─────────────────────────────────────────────────────────────┘
```

---

## ⬡ · LOCAL SETUP

```bash
# Clone the dossier
git clone https://github.com/sxwik/blue-whale-dossier.git
cd blue-whale-dossier

# Install dependencies
npm install

# Open the archive
npm run dev

# Production build
npm run build
```

No environment variables. No `.env` file. No API keys. No secrets.
This document needs nothing from the outside world.

---

## ⬡ · DESIGN DECISIONS DOCUMENTED

**Why no dark mode toggle?**
The dossier has a fixed palette. Ivory and charcoal. Declassified documents don't have color scheme preferences.

**Why `65ch` max-width?**
Optimal reading line length for dense, analytical text is 55–75 characters. `65ch` sits precisely at the cognitive sweet spot — wide enough for authority, narrow enough for pace.

**Why `Playfair Display` for headings?**
Playfair is editorial serif with a high contrast between thick and thin strokes — the typographic language of newspapers, academic journals, and court documents. It carries weight without shouting.

**Why JetBrains Mono for metadata?**
Monospaced fonts signal precision and classification. When a label reads in `JetBrains Mono`, it registers as: *this was output by a system, not written by a person*. Exactly the register archival metadata should occupy.

**Why the noise overlay?**
Flatness is not neutrality. A screen with no texture reads as digital — synthetic — designed. The noise layer introduces organic entropy at subliminal scale. The document breathes. It ages. It feels like it was found.

---

## ⬡ · WHAT THIS PROJECT IS NOT

- It is not a glamorization or a memorial.
- It is not a comprehensive psychological study.
- It is not journalism, legal analysis, or crisis intervention.
- It is not an endorsement of panic, nor a dismissal of harm.

It is a **frontend engineering document** that chose a subject serious enough to demand the design live up to it.

---

## ⬡ · AUTHOR

```
ARCHITECT ·········· @sxwik
                     github.com/sxwik

ROLE ··············· Architecture, Code, Design Engineering
                     Typography, Motion, Component System
```

---

<div align="center">

```
[ DOCUMENT ENDS ]
```

*Built to look real. Engineered to be honest.*

</div>
