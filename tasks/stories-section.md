# Task: Build the “Naše priče” homepage section to match the approved mockup

Implement a homepage section called **“Naše priče”** that visually matches the approved mockup as closely as possible.

## Goal

Create a soft, premium, editorial-style stories section for the homepage of the Caspera website.

The layout must have:

- **one large featured story card on the left** taking about **2/3 of the section width**
- **three smaller story cards stacked vertically on the right** taking about **1/3 of the section width**

This section should feel:

- gentle
- feminine
- modern
- premium
- editorial, not overly “card-grid” or childish

## Visual direction

Follow the style of the approved mockup:

- very soft blush / cream background
- rounded white cards
- subtle shadows
- elegant serif heading
- muted mauve / plum text accents
- spacious layout with generous padding
- soft, polished NGO / editorial feel

This should visually align with the existing **hero** and **support** sections.

## Section structure

### Section heading area

Centered at the top:

- Title: **Naše priče**
- Subtitle: **Pročitajte osobne priče naših članica i njihova iskustva na putu prema oporavku.**

Recommended styling:

- title font: elegant serif (similar to Playfair Display)
- subtitle font: clean sans-serif
- large vertical spacing above and below heading
- keep the heading area airy and refined

## Main content layout

Use a **2-column grid**:

- left column: about **65%** width
- right column: about **35%** width
- gap between columns: **24px to 32px**

Example:

```css
grid-template-columns: 2fr 1fr;
gap: 28px;
```

### Left column: featured story

This entire left area must be **one single featured story card**.

Do **not** split it into image card + text card.
Do **not** repeat the title or intro in separate blocks.
It must read as **one unified story component**.

#### Featured card content

Include:

- large story image on the left side of the card
- on the text side:
  - date
  - small circular profile photo
  - member name
  - story title
  - short content preview (about 3 lines)
  - CTA button or link: **Pročitaj priču**

#### Featured card layout

Recommended internal layout:

- image occupies roughly **45%** of the featured card width
- text content occupies roughly **55%**
- image should be full-height and feel integrated into the same card
- card should have one shared rounded container

Example internal structure:

```text
[ image ] [ meta row: date + avatar + name ]
          [ large story title            ]
          [ content preview              ]
          [ Pročitaj priču button/link   ]
```

#### Featured card style

- card background: white or near-white
- border radius: **28px to 32px**
- soft shadow only, not heavy
- image radius should match the card container visually
- title should be large and elegant
- preview text should be easy to read and slightly muted
- CTA should be clearly visible but tasteful

### Right column: three smaller story cards

The right side should contain **three smaller cards stacked vertically**.

Each small card contains only:

- date
- circular profile photo
- story title
- “Pročitaj priču” link at the bottom

Do **not** add preview text into the small cards.
Do **not** make them feel busy.

#### Small card layout

Suggested order:

1. top row: profile image + date
2. title below
3. CTA link at the bottom

Keep the layout compact and elegant.

#### Small card styling

- same design language as featured card
- white background
- rounded corners
- subtle shadow
- equal vertical spacing between cards
- title should wrap nicely over 2–3 lines if needed

## Suggested example content

Use placeholder content similar to the approved mockup:

### Featured story

- Date: **12. ožujka 2026.**
- Member: **Ana M.**
- Title: **Kako sam pronašla svjetlo nakon duge tame**
- Preview: **Moje iskustvo s depresijom bilo je poput duge noći. Kroz priču dijelim kako sam, uz podršku zajednice i male korake, ponovno pronašla mir, snagu i osmijeh.**

### Small story 1

- Date: **5. ožujka 2026.**
- Member: **Marija K.**
- Title: **Kako sam ponovno pronašla mir u neizvjesnosti**

### Small story 2

- Date: **28. veljače 2026.**
- Member: **Ivana S.**
- Title: **Moj put prema samopouzdanju i hrabrosti**

### Small story 3

- Date: **20. veljače 2026.**
- Member: **Katarina L.**
- Title: **Mali trenuci sreće u borbi protiv straha**

## Color and style guidance

Use a palette that matches the existing site:

- background: very soft blush / cream
- heading color: muted plum / mauve
- body text: warm gray / mauve-gray
- CTA accent: dusty rose or muted pink
- cards: white or slightly warm white

Suggested feel, not strict values:

- section background: `#FBF4F7` / `#F9F1F4`
- heading: `#6F4964`
- body text: `#7B6674`
- CTA accent: `#C46C90`
- cards: `#FFFFFF`

## Typography

- section title and featured story title: elegant serif
- subtitle, metadata, preview text, and CTA: modern sans-serif

Hierarchy should be very clear:

- section title largest
- featured story title second largest
- small card titles slightly smaller
- meta text smallest

## Spacing

Prioritize whitespace.
This section should feel calm and breathable.

Suggested spacing:

- section top padding: **96px to 120px**
- section bottom padding: **96px to 120px**
- card padding: **28px to 36px**
- space between heading and grid: **40px to 56px**

## Responsiveness

### Desktop

- 2-column layout exactly as described

### Tablet

- featured card on top
- 3 smaller cards below, stacked or in 2-column layout depending on available space

### Mobile

- everything stacks vertically
- featured card first
- 3 smaller cards underneath
- maintain generous spacing and readability

## Important implementation notes

- The **left side must be one unified featured story card**, not two separate blocks.
- The design should match the **first approved mockup** from the latest iteration.
- Keep the right column very close to the mockup: small stacked cards with date, avatar, title, and read-more link.
- Avoid decorative clutter.
- Avoid overly glossy or childish UI treatments.
- Aim for a polished, editorial, premium NGO look.

## Deliverable expectations

Implement the section in a way that is production-ready and visually consistent with the current homepage.

If exact assets are unavailable:

- use elegant placeholder portraits
- use realistic Croatian placeholder copy
- preserve the overall layout and hierarchy exactly

Assets:

- assets/images/story_avatar.jpeg for avatar
- assets/images/story_img for story image
