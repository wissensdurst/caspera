# Task: Caspera Pre-Publish Code Audit & Optimization

Goal:
Perform a final technical review and optimization pass before publishing the Caspera Astro + Sanity website.

## Important

First inspect the project and produce a short audit plan.
Do not modify files until the plan is approved.

## Checks to perform

### 1. Build verification

- Run or verify `npm run build`.
- Fix build errors.
- Run or verify `npm run preview` after build.
- Confirm generated pages work locally.

Astro recommends building and previewing locally before deployment.

### 2. Astro structure

- Review layouts, pages, components, and routes.
- Remove unused files, dead imports, duplicate components, and unused CSS/JS.
- Ensure reusable components are used consistently.
- Do not rewrite working architecture unnecessarily.

### 3. Sanity integration

- Verify projectId/dataset configuration.
- Verify Sanity queries work.
- Verify CMS-powered pages handle missing fields safely.
- Verify images, slugs, dates, and rich text render correctly.
- Ensure Studio/admin routes are not publicly linked in navigation.

### 4. Environment variables

- Check `.env` usage.
- Ensure secrets are not committed.
- Ensure required Sanity environment variables are documented.
- Keep public/client-safe variables only where appropriate.

Astro only exposes variables prefixed with `PUBLIC_` to client-side code.

### 5. SEO

- Verify page titles and meta descriptions.
- Verify Open Graph metadata.
- Verify canonical URLs if implemented.
- Verify `lang="hr"` and Croatian locale where appropriate.
- Verify sitemap generation if configured.
- Verify `robots.txt`.

Astro has an official sitemap integration that generates a sitemap during build.

### 6. Accessibility

- Ensure one clear h1 per page.
- Check heading order.
- Check alt text for images.
- Check buttons/links have meaningful text.
- Check keyboard navigation for menus and interactive elements.
- Check forms if present.

### 7. Performance

- Check unnecessary JS.
- Check large images and unoptimized assets.
- Verify Sanity images use optimized URLs where applicable.
- Remove unused packages if safe.
- Avoid adding heavy libraries.

### 8. Responsive QA

- Review key pages on mobile, tablet, and desktop.
- Check navbar, footer, cards, galleries, blog pages, event pages, and CMS-driven content.

### 9. Content fallback safety

- CMS pages should not crash if optional fields are missing.
- Add reasonable fallback rendering for:
  - missing cover image
  - missing excerpt/description
  - missing date
  - missing author/profile image

### 10. Git hygiene

- Check `git status`.
- Ensure generated folders like `dist/` and `node_modules/` are ignored.
- Ensure `.env` is ignored.
- Keep useful project files committed:
  - README.md
  - AGENTS.md
  - tasks/

## Constraints

- Do not change visual design unless fixing a bug.
- Do not introduce new libraries unless clearly justified.
- Do not make large refactors unless necessary for deployment stability.
- Explain every changed file after implementation.

## Deliverable

Return:

1. Audit findings
2. Recommended fixes
3. Files to change
4. Whether the project is ready to publish
