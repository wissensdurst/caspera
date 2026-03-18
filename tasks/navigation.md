Refactor the website navigation to match the following new information architecture.

Goal:
Create a compact, modern, user-friendly main navigation for the Caspera website.

Main desktop navigation:
[Logo] O nama Podrška Informacije Zajednica Aktualno [ Doniraj ]

Important:

- The logo on the far left should link to the homepage.
- “Doniraj” should be styled as a primary CTA button, visually separated from the standard nav links.
- Keep the overall feel elegant, soft, feminine, and modern.
- The navigation should feel clean and trustworthy, suitable for a nonprofit / women’s health support website.

Main navigation structure and submenus:

1. O nama
   Submenu items:

- Tko je Caspera
- Naša ekipa
- Caspera u medijima
- Statut
- Izvješće o radu
- Plan rada i financijski plan

2. Podrška
   Submenu items:

- Naši savjetodavatelji
- Pitaj onkologa
- Pitaj nutricionista
- Pitaj dermatologa
- Pitaj patologa
- Pitaj fizioterapeuta

3. Informacije
   Submenu items:

- Socijalna prava
- Ortopedska pomagala
- Putni trošak

4. Zajednica
   Submenu items:

- Sonjin blog
- Moja priča
- Galerija
- O autoricama
- Bokun butige
- Postani član

5. Aktualno
   Submenu items:

- Aktualno
- Casperin kalendar

6. Doniraj

- Primary CTA button in the navbar
- Links to the donations page
- Should not behave like a dropdown

Implementation requirements:

- Inspect the current project structure before making changes.
- Reuse existing components, variables, spacing tokens, mixins, and naming conventions where possible.
- Keep the implementation modular and maintainable.
- Do not modify unrelated sections of the site.
- If there is already a header/navbar component, refactor it instead of rebuilding from scratch unless rebuilding is cleaner and more consistent.
- Keep class naming consistent with the current project.
- Prefer semantic HTML.
- Make the navigation accessible:
  - keyboard accessible
  - visible focus states
  - dropdowns usable via keyboard
  - proper aria attributes where appropriate
- Ensure good hover, focus, and active states.
- Keep the dropdown interactions refined and not overly animated.

Desktop behavior:

- Top-level nav items visible in one horizontal row.
- Submenus should appear as elegant dropdown panels on hover and on keyboard focus.
- Dropdowns should be visually soft and premium:
  - soft background
  - subtle shadow
  - rounded corners
  - comfortable spacing
- Dropdown items should be easy to scan and click.
- “Doniraj” remains always visible as a CTA button.

Mobile behavior:

- Use a hamburger / slide-in menu or existing mobile nav pattern if the project already has one.
- In mobile navigation, include:
  - Početna
  - O nama
  - Podrška
  - Informacije
  - Zajednica
  - Aktualno
  - Doniraj
- Top-level items with subitems should be expandable/collapsible in mobile.
- Keep mobile interaction simple, clear, and low-friction.
- Ensure touch-friendly spacing.

Design direction:

- Preserve the gentle, feminine, premium aesthetic already established in the site.
- The navigation should feel soft, calm, airy, and trustworthy.
- Avoid harsh borders or heavy dark dropdowns.
- Prefer subtle shadows, soft background tones, rounded corners, and elegant spacing.
- The CTA button should feel prominent but still aligned with the brand.

Expected deliverables:

1. Updated navbar/header markup
2. Updated dropdown structure
3. Updated styling for desktop and mobile states
4. Responsive behavior for all breakpoints
5. Accessible interaction states
6. Brief summary of what was changed and any assumptions made

Before implementing:

1. Inspect the current header/navbar structure
2. Identify where the nav data/config should live
3. Reuse existing styling utilities if available
4. Then implement the refactor

Do not:

- change unrelated page sections
- introduce unnecessary complexity
- hardcode repeated values if project tokens/utilities already exist
- add visual styles that conflict with the soft Caspera brand direction
