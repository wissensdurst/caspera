# Task: Caspera SEO Optimization

Goal:
Improve the technical SEO foundation of the Caspera Astro + Sanity website before full content population.

## Requirements

### 1. Metadata system
- Create or improve reusable SEO metadata handling in the base layout.
- Support page-specific:
  - title
  - meta description
  - canonical URL
  - Open Graph title
  - Open Graph description
  - Open Graph image
  - Twitter/X card metadata

### 2. Defaults
Add sensible fallback metadata for Caspera:
- Site name: Caspera
- Default description: Udruga Caspera pruža podršku ženama oboljelima i liječenima od raka kroz informacije, savjetovanje, zajednicu i događanja.
- Default social image if available.
- Locale: hr_HR
- Language: hr

### 3. Sanity content SEO
For CMS-managed content types, prepare optional SEO fields where appropriate:
- metaTitle
- metaDescription
- socialImage
- noIndex

Apply this at minimum to:
- posts / aktualno
- events
- stories
- gallery albums if present

If SEO fields are empty, fall back to title, excerpt/description, and coverImage.

### 4. Sitemap and robots
- Add or verify sitemap generation.
- Add or verify robots.txt.
- Ensure public pages are indexable.
- Do not index Studio/admin routes.

### 5. Structured data
Add basic JSON-LD structured data for:
- Organization
- Website

Use Caspera as the organization name.
Keep placeholder values where exact official URLs/contact data are not yet available.

### 6. Accessibility and semantic SEO
Review key layouts/components for:
- one clear h1 per page
- logical heading order
- semantic landmarks: header, nav, main, footer
- descriptive image alt text
- meaningful link text

### 7. Performance basics
- Ensure images use optimized Sanity image URLs where applicable.
- Avoid unnecessary JavaScript.
- Do not introduce heavy SEO libraries unless clearly justified.

## Constraints

- Do not change visual design unless necessary.
- Do not rewrite large page sections.
- Do not connect unrelated CMS content.
- Keep implementation beginner-friendly and maintainable.
- Explain all files changed after completion.