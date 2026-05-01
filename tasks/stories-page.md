# Task: Build the Stories Page (`Naše priče`) as a natural extension of the homepage

Implement a dedicated **Stories page** for the website.

The **last approved 2-column mockup** should be treated as a **visual reference only** for:
- general page density
- the idea of a 2-column grid
- card hierarchy
- search placement
- editorial feel

It should **not** be copied literally.

The actual page, including the **header and footer**, must be styled in the **same design system and visual language as the homepage that has already been built**.

## Core objective
Create a production-ready Stories page that:
- feels like a direct continuation of the homepage
- reuses the homepage’s established visual language
- uses a **2-column card grid**
- does **not** use a timeline layout
- feels calm, premium, editorial, feminine, and modern
- keeps the same tone as the hero, support section, homepage stories section, dividers, and footer

---

# Priority order
When making design decisions, use this order of priority:

1. **Homepage design system comes first**
2. **The latest 2-column mockup is only a secondary reference**
3. **Consistency with the existing site matters more than matching the mockup exactly**

This means:
- header should match the homepage header, not the mockup header
- footer should match the homepage footer, not the mockup footer
- colors, spacing, typography, card shadows, radii, and ornament language should come from the homepage
- the mockup is mainly there to communicate the **page type and layout idea**

---

# Important visual reference guidance
Use the **last approved stories-page mockup** only as inspiration for:
- 2-column layout
- search bar placement
- editorial card-listing feel
- soft page density
- idea of story cards with avatar, author, date, title, excerpt, and CTA

Do **not** treat the mockup as a strict UI spec.

The final Stories page should instead look like:
- the homepage’s design system expanded into a dedicated page
- the user clicked **“Pogledaj sve priče”** and landed on a page from the same site
- not like a separate template or parallel design direction

---

# Page structure

## 1. Header / Navbar
Reuse the **same header/navbar already established on the homepage**.

Requirements:
- same logo treatment
- same navigation spacing
- same typography style
- same overall height and visual lightness
- same hover behavior
- same soft feminine tone
- preserve the same top-of-page feel as the homepage

Suggested nav items:
- Početna
- Priče
- Podrška
- Kontakt

The active item should be **Priče**.

If the homepage uses ornament dividers or a subtle top decorative treatment, keep that language consistent here too.

---

## 2. Intro section
At the top of the page, create a simple editorial intro block.

### Content
- Heading: **Naše priče**
- Intro text: **Pročitajte osobne priče naših članica, njihova iskustva i male korake na putu prema oporavku.**

### Layout rules
- use the same container system as the homepage
- left-align the content unless the established homepage page-template suggests otherwise
- generous spacing above and below
- this should feel like a page intro, not a homepage hero

### Style
- heading in the same elegant serif used on the homepage
- intro paragraph in the same sans-serif body style used elsewhere on the site
- preserve the homepage rhythm, softness, and spacing scale

---

## 3. Optional ornamental continuity
If the homepage already uses subtle ribbon-inspired divider ornaments between sections, consider carrying that language into this page in a restrained way.

Possible uses:
- small ornament between the intro and the grid
- very subtle divider above the footer

Do **not** overuse decorative elements.
They should feel quiet and intentional.

---

## 4. Search bar
Below the intro block, add a full-width search field.

This should be styled according to the **homepage design language**, not as a generic app input.

### Requirements
- rounded input
- soft surface styling
- subtle border or shadow
- placeholder text similar to: **Pretraži priče...**
- search icon aligned to the right
- clean, minimal styling

### UX note
The search should feel lightweight and elegant.
No sidebar filters.
No heavy dashboard-like controls.
No overly technical UI.

---

## 5. Stories grid
This is the main content area.

Use a **2-column grid** on desktop.

### Desktop layout
```css
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 28px;
```

### Tablet
- stay at 2 columns if space allows
- reduce padding and gaps slightly

### Mobile
- collapse to 1 column

The grid should feel like a natural expansion of the homepage story cards, not like a different component family.

---

# Story card design
Each story should be shown as a clean editorial card.

## Card content
Each card must contain:
- avatar image
- author name
- date
- story title
- preview text / excerpt
- CTA link: **Pročitaj više →**

## Recommended internal order
Top meta row:
- circular avatar
- author name
- date

Then:
- story title
- short excerpt (2–4 lines)
- read more link at the bottom

Suggested structure:
```text
[ avatar ]  Author name    Date

Story title

Short excerpt text...

Pročitaj više →
```

## Card style
Cards must follow the **homepage card language**.

That means:
- same or very similar corner radius
- same shadow softness
- same surface feel
- same border subtlety if used
- same overall tone as support cards / homepage stories cards

The page may be a list page, but the cards should still clearly belong to the same brand system.

### Desired feel
- warm-white or white card surface
- soft rounded corners
- subtle shadow
- generous padding
- elegant typography
- calm, airy layout

Avoid:
- boxy or harsh cards
- generic blog template look
- corporate/news portal styling
- anything too glossy or childish

---

# Card interaction
On hover:
- very subtle lift
- slightly stronger shadow
- no aggressive motion
- no flashy transitions

Example hover behavior:
```css
transform: translateY(-4px);
box-shadow: 0 18px 42px rgba(0,0,0,0.08);
```

Hover behavior should feel consistent with the homepage interaction language.

---

# Content density
Cards should feel readable and editorial.

Avoid:
- tiny unreadable text
- too much metadata
- cluttered badges
- cramped spacing

Keep the page soft and breathable.

---

# Featured content rule
Do **not** create a featured story on this page.

This page should use a **uniform 2-column story grid**, following the latest mockup’s general idea.

If one story is marked as new, it must be very subtle.
Only include a small badge if it truly fits the homepage design language.
Otherwise omit it.

---

# Pagination
At the bottom of the grid, include a minimal pagination component.

The pagination must look like it belongs to the homepage/footer ecosystem.

## Requirements
- centered horizontally
- soft, elegant treatment
- page numbers visible
- current page visually highlighted
- include previous/next arrows if helpful

Suggested example:
- 1
- 2
- 3
- next arrow

Keep it light and refined.

---

# Footer
Reuse the **homepage footer style**, not the mockup footer.

Requirements:
- same footer design language as the homepage
- same softness and spacing principles
- same blush / muted pink surface treatment if already used
- same logo styling
- same navigation grouping logic
- same legal/info area structure if it already exists

The footer should make the Stories page feel like it was built inside the same system as the homepage.

---

# Styling guidance

## Overall tone
The page should feel:
- gentle
- feminine
- premium
- editorial
- calm
- supportive
- consistent with the homepage

Avoid anything that feels:
- too corporate
- too clinical
- too childish
- too glossy
- too saturated
- too different from the homepage

## Colors
Use the **homepage palette**.

That means:
- same background logic
- same text colors
- same accent pink logic
- same warm whites / blush tones
- same divider/ornament tone if used

Do **not** introduce a noticeably different palette just because the mockup suggests one.

## Typography
Use the same typography system as the homepage.

Recommended hierarchy:
- Page heading: same elegant serif used on homepage section titles
- Story titles: same serif / high-contrast title treatment used in homepage stories
- Meta text, excerpt text, UI labels, and search input: same sans-serif system as homepage

---

# Layout and spacing guidance
This page should breathe.

## Suggested spacing
- top page padding below navbar: 72px to 96px
- spacing between intro and search: 28px to 40px
- spacing between search and grid: 32px to 40px
- spacing before pagination: 40px+
- spacing before footer: generous

## Container width
Use the same container logic as the homepage.

Suggested range if needed:
- `max-width: 1200px` to `1280px`

---

# Responsiveness

## Desktop
- 2 columns
- balanced visual rhythm
- clean pagination below

## Tablet
- 2 columns if possible
- otherwise 1 column
- preserve spacing and softness

## Mobile
- single-column stack
- generous spacing
- easy-to-tap cards and links
- search remains full-width

---

# Accessibility / implementation notes
- all cards should be fully clickable or contain a clearly visible accessible CTA
- maintain sufficient text contrast
- avatars need alt text
- headings should preserve semantic hierarchy
- search input should have an accessible label
- pagination should support keyboard navigation and focus states

---

# Content examples
Use realistic placeholder Croatian content if real data is not yet connected.

Example authors:
- Nikolina Jurić
- Marija Kovačić
- Ana Petrović
- Ivana Radić
- Mirela Marković
- Tanja Horvat

Example titles:
- Kako sam pronašla svjetlo nakon duge tame
- Moj novi život nakon operacije i kemoterapije
- Kako su promjene spasile moj život
- Putovanje kroz onkološki labirint: Moje iskustvo i savjeti
- Mali trenuci sreće u borbi protiv straha
- Kako sam se nosila s dijagnozom i pronašla unutarnju snagu

Use short, emotionally grounded excerpts.

---

# Codex execution instructions
When implementing:
1. Treat the **latest 2-column stories mockup** as a **reference**, not a strict blueprint.
2. Build the page in the **model of the homepage already created**.
3. Reuse the homepage’s:
   - header language
   - footer language
   - typography system
   - card styling
   - spacing logic
   - divider/ornament language
   - color system
4. Keep the page visually consistent enough that it feels like a user clicked from the homepage into a deeper content page of the same site.
5. Prioritize consistency with the existing homepage over matching the mockup exactly.

## Final expectation
The finished Stories page should feel like:
- a dedicated listing page derived from the homepage design system
- a polished continuation of the current site
- not a separate template
- not a one-to-one copy of the mockup

The mockup provides direction.
The homepage provides the actual design model.
