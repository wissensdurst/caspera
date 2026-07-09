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

## Independent Publishing

This project now includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that can:

- build the Astro site on every push to `main`
- run manually from the GitHub Actions tab
- rebuild and deploy automatically when Sanity publishes content through a webhook

### GitHub repository secrets

Add these repository secrets before enabling the workflow:

- `FTP_SERVER` host name of the client's FTP or FTPS server
- `FTP_USERNAME` FTP user name
- `FTP_PASSWORD` FTP password
- `FTP_PORT` FTP/FTPS port, for example `21`
- `FTP_PROTOCOL` `ftp`, `ftps`, or `ftps-legacy`
- `FTP_SERVER_DIR` destination folder on the host, for example `/www/html/`
- `PUBLIC_SITE_URL` public site URL, for example `https://caspera.hr`
- `SANITY_PROJECT_ID` Sanity project ID used by the frontend
- `SANITY_DATASET` Sanity dataset used by the frontend
- `SANITY_STUDIO_PROJECT_ID` usually the same as `SANITY_PROJECT_ID`
- `SANITY_STUDIO_DATASET` usually the same as `SANITY_DATASET`

### Sanity webhook setup

Create an outgoing webhook in Sanity project settings at `manage.sanity.io`:

- URL: `https://api.github.com/repos/<owner>/<repo>/dispatches`
- Trigger on: `Create`, `Update`, `Delete`
- Drafts: disabled
- HTTP method: `POST`
- Header `Accept`: `application/vnd.github+json`
- Header `Authorization`: `Bearer <github-token>`
- Body / projection:

```json
{
  "event_type": "sanity_publish",
  "client_payload": {
    "source": "sanity"
  }
}
```

Use a GitHub fine-grained personal access token with repository `Contents: write` permission so Sanity can trigger the `repository_dispatch` event.

### Result

After this is configured, the client publishing flow is:

1. Edit and publish content in Sanity.
2. Sanity webhook triggers GitHub Actions.
3. GitHub builds the site and uploads the fresh `dist/` output to the client's FTP host.

## Notes

- Blog, story, gallery, event, project, and team content is powered by Sanity.
- Some informational pages still render from legacy HTML files in `src/static-pages/`.
- `dist/`, `node_modules/`, `.astro/`, `public/assets/`, and `.env` are ignored in git.
