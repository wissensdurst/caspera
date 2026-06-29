# Caspera CMS Mapping

Goal:
Migrate subpage Naši projekti to Astro + Sanity while making only the client-approved content editable in Sanity.

## Global rule

Do not make everything CMS-managed.

Keep layout, styling, animations, decorative elements, navigation structure, and reusable components in Astro code unless explicitly marked as CMS-managed.

## CMS-managed content


### Naši projekti
Client can edit:
- event title
- slug
- date
- location
- description
- cover image

Astro should render:
- events listing
- event detail page

Implement:
Design wise follow the example from the static version of this subpage nasi-projekti.html and make exactly the same only this time with cms implementation.



### O autoricama
Client can edit:
- name
- photo
- short bio
- display order

Astro should render:
- author listing/cards

Implementation:
Create Astro - Sanity subpage o-autoricama. Design wise it should follow Savjetodavatelji example. Design and CMS options are the same.

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

IMPORTANT:
Rebuild the moja prica Astro-Sanity subpage following the example from the moja-prica.html static page. The page should render design wise exactly the same as the moja-prica.html, with author slider and filtering just like in the static exemple. I want the author slider from moja-prica, be connected with o-autoricama. When the user adds a new author to the o-autoriama cms, it should appear on the author slider using the same profile photo and the shorthened name (Just the first name, and the first letter of the last name), the same photo should appear on the avatar photo in moja-prica.

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




