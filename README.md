# Cornerstone Assets Property Ltd

One-page Astro site. Requires Node 22.12+.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into dist/
```

## Where to edit
| What | File |
| --- | --- |
| All copy, contact details, services, properties | `src/data/site.ts` |
| Colours, type scale, spacing | `src/styles/tokens.css` |
| Section markup and styles | `src/components/sections/` |
| Reusable primitives | `src/components/ui/` |
| Page order | `src/pages/index.astro` |

## Deploy
Push to GitHub, import the repo in Netlify (build command `npm run build`, publish directory `dist`).
Enquiry form uses Netlify Forms; submissions appear under Forms in the Netlify dashboard.
