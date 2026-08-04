# me

Personal blog and portfolio of Will Lotherington, live at
[projects-and-thoughts.netlify.app](https://projects-and-thoughts.netlify.app).
Built with [Astro](https://astro.build); fully static, zero client-side
JavaScript.

## Structure

- `src/blog/` — blog posts (Markdown content collection)
- `src/projects/` — project pages (Markdown content collection; `pinned: true` features one on the home page)
- `src/pages/` — routes, including generated tag pages and the RSS feed
- `src/layouts/`, `src/components/`, `src/styles/global.css` — the design

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run check`   | Type-check the project                    |
| `npm run build`   | Type-check, then build the site to `./dist/` |
| `npm run preview` | Preview the production build locally      |

## Deployment

Deployed on Netlify. Every push to `main` builds and deploys automatically.
