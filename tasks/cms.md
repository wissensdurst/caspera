# Caspera CMS Mapping

Goal:
Migrate Caspera to Astro + Sanity while making only the client-approved content editable in Sanity.

## Global rule

Do not make everything CMS-managed.

Keep layout, styling, animations, decorative elements, navigation structure, and reusable components in Astro code unless explicitly marked as CMS-managed.

## CMS-managed content


### Kalendar događanja / Casperin kalendar
Client can edit:
- event title
- slug
- date/time
- location
- description
- cover image

Astro should render:
- events listing
- event detail page

### Galerija
Client can edit:
- album title
- slug
- date
- description
- cover image
- gallery images
- image captions

Astro should render:
- album listing page
- single album page

### Savjetodavatelji
Client can edit:
- name
- title/profession
- photo
- short bio
- display order

Astro should render:
- advisor listing/cards

### Moja priča
Client can edit:
- story title
- slug
- author
- author photo
- date
- story content
- cover image

Astro should render:
- stories listing
- story detail page

## Static Astro-managed content

Keep these in code:
- navbar structure
- footer layout
- homepage layout
- section order
- decorative icons/images
- hover effects
- animations
- global styles
- responsive behavior
- reusable card components
- page structure
- hero layout
- design sections

## Mixed pages


## Implementation instructions

First:
- inspect current project structure
- identify existing pages/components
- propose schema files
- propose Astro routes
- do not modify files yet

Then:
- wait for approval before implementation