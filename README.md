# Caspera

Astro + Sanity website for Udruga Caspera.

## Stack

- Astro
- Sanity Studio
- SCSS
- Vanilla JavaScript

## Project Structure

- `src/pages/` Astro routes
- `src/components/` reusable UI and client-side helpers
- `src/layouts/` shared page layout
- `src/static-pages/` legacy static content embedded into Astro wrappers
- `styles/` SCSS source and compiled CSS
- `assets/` images, icons, and other static media
- `sanity/` Sanity schema definitions
- `public/` publish-time static assets such as `robots.txt`
- `tasks/` project tasks and audit notes

## Environment Variables

Create a local `.env` file before running the site or Studio.

- `PUBLIC_SITE_URL` canonical site URL used for SEO metadata and sitemap generation
- `SANITY_PROJECT_ID` Sanity project ID used by the Astro frontend
- `SANITY_DATASET` Sanity dataset used by the Astro frontend
- `SANITY_STUDIO_PROJECT_ID` optional Studio override, falls back to `SANITY_PROJECT_ID`
- `SANITY_STUDIO_DATASET` optional Studio override, falls back to `SANITY_DATASET`

See `.env.example` for the expected variable names.

## Scripts

- `npm run dev` build SCSS, sync public assets, and start Astro dev server
- `npm run build` build SCSS, sync public assets, and generate the static site
- `npm run preview` preview the built site locally
- `npm run sass` compile `styles/main.scss` to `styles/main.css`

## Notes

- Blog, story, gallery, event, project, and team content is powered by Sanity.
- Some informational pages still render from legacy HTML files in `src/static-pages/`.
- `dist/`, `node_modules/`, `.astro/`, `public/assets/`, and `.env` are ignored in git.
