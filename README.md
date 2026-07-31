# MPower Minds — Landing Page Variations

**Expert live online coaching by Manisha Panicker**  
Maths · Science · Languages (French & English)

**15+ years** mentoring Cambridge International students, with special expertise in **IGCSE French**.

This repository is the official multi-variation landing experience for **MPower Minds Online Coaching**. It presents **four production-ready designs** of the same conversion-focused page so you can pick (or A/B) the look that best fits your brand.

---

## Live experience

| Route | Variation | Mood |
| --- | --- | --- |
| `/` | **Gallery** | Studio hub — choose a design |
| `/v/heritage` | **Heritage** | Brand-true orange → teal, energetic, high conversion |
| `/v/editorial` | **Editorial** | Dark academic prestige, quiet authority |
| `/v/atelier` | **Atelier** | Warm cream + forest green, parent-first trust |
| `/v/studio` | **Studio** | Modern minimal, Swiss-clean, mobile-first |

Every variation keeps the same:

- Educator story (Manisha Panicker)
- Subjects, benefits, curricula
- Small-batch trust signals (6–8 students, 15+ years)
- WhatsApp demo CTAs → [wa.link/vjpkqc](https://wa.link/vjpkqc)
- Phone **+91 9833193551** · Email **manishabalagopalan@gmail.com**

---

## Previews

| Gallery | Heritage |
| --- | --- |
| ![Gallery](docs/previews/hub.png) | ![Heritage](docs/previews/heritage.png) |

| Editorial | Atelier |
| --- | --- |
| ![Editorial](docs/previews/editorial.png) | ![Atelier](docs/previews/atelier.png) |

| Studio |
| --- |
| ![Studio](docs/previews/studio.png) |

---

## Tech stack

- **React 19** + **TypeScript**
- **TanStack Start / Router** (file-based routes)
- **Vite 8** + **Tailwind CSS v4**
- **Lucide** icons
- Deploy target: **Vercel** (Nitro preset)

No backend is required for the landing pages. Contact flows open WhatsApp / `mailto` / `tel`.

---

## Project structure

```text
mpowerminds/
├── public/
│   └── images/           # Logo + hero / about photography
├── docs/
│   └── previews/         # README screenshots
├── src/
│   ├── components/
│   │   └── landing/      # Four full page designs + shared chrome
│   │       ├── HeritageLanding.tsx
│   │       ├── EditorialLanding.tsx
│   │       ├── AtelierLanding.tsx
│   │       ├── StudioLanding.tsx
│   │       ├── VariationBar.tsx
│   │       └── WhatsAppFab.tsx
│   ├── data/
│   │   ├── content.ts    # Shared copy, contact, curricula
│   │   └── variations.ts # Gallery metadata
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx     # Gallery hub
│   │   └── v/$slug.tsx   # /v/heritage | editorial | atelier | studio
│   ├── styles.css
│   └── router.tsx
├── package.json
├── vite.config.ts
└── README.md
```

### Where to edit content

| What | File |
| --- | --- |
| Name, phone, email, WhatsApp, taglines, subjects, curricula | [`src/data/content.ts`](src/data/content.ts) |
| Variation names, pitches, hero images | [`src/data/variations.ts`](src/data/variations.ts) |
| Layout / design of each page | `src/components/landing/*Landing.tsx` |
| Logo & photos | `public/images/` |

---

## Getting started

**Requirements:** Node.js 20+ (22 recommended)

```bash
# Install
npm install

# Development (http://localhost:8080)
npm run dev

# Production build
npm run build

# Typecheck
npm run typecheck
```

Open the gallery at `/`, then jump into any variation.

---

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Framework preset is handled by the Nitro/`vite` build — default settings work
4. Deploy

```bash
npm run build
# Output: .vercel/output (ready for Vercel)
```

### GitHub Pages / static hosts

This app is a TanStack Start SSR app. Prefer **Vercel** or another Node/SSR host. For a pure static export of a single design, you can later extract one variation to a static page if needed.

---

## Customization checklist

1. Replace photos in `public/images/` with Manisha’s real portraits / class photos when ready  
2. Confirm WhatsApp link in `src/data/content.ts`  
3. Pick a default variation (optional): redirect `/` → `/v/heritage` (or your favorite) in `src/routes/index.tsx`  
4. Deploy and share the live URL with parents  

---

## Contact

**Manisha Panicker**  
Email: [manishabalagopalan@gmail.com](mailto:manishabalagopalan@gmail.com)  
Phone: [+91 9833193551](tel:+919833193551)  
WhatsApp: [wa.link/vjpkqc](https://wa.link/vjpkqc)

---

## License

Personal / business use for **MPower Minds**. See [LICENSE](LICENSE).

---

**Made for MPower Minds** — small batches, unlimited brilliance.
