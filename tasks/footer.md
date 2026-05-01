# Task: Build the website footer

## Goal

Create a modern, elegant, gentle footer for the association website that feels like a natural continuation of the current homepage.

The footer must:

- follow the same visual language as the rest of the site
- include all navbar links
- include standard footer content and utilities expected on a modern website
- feel calm, premium, feminine, and trustworthy
- be responsive, accessible, and easy to scan

Do not design the footer as a heavy dark block. It should feel light, soft, refined, and architecturally consistent with the hero, support, and stories sections.

---

## Overall design direction

The footer should visually complete the site.

Tone:

- soft
- warm
- calm
- trustworthy
- polished
- feminine but not decorative or overly cute

The footer should feel like:

- a grounded ending to the page
- a useful navigation hub
- a trust-building section

Avoid:

- overly dark backgrounds
- sharp borders
- cluttered link walls
- crowded columns
- aggressive hover effects
- generic corporate footer styling

---

## Layout structure

Build the footer as 2 layers:

### 1. Main footer

The main footer contains:

- brand block
- navigation groups
- contact/social/newsletter or CTA

### 2. Bottom bar

The bottom bar contains:

- copyright
- legal links
- optional credit / accessibility / privacy shortcuts

---

## Footer content requirements

### A. Brand block

Include:

- association logo or wordmark
- one short supporting sentence describing the organization
- optional CTA link or button

Example content structure:

- Logo
- Short description:
  "Podrška, razumijevanje i zajedništvo na putu prema oporavku."
- CTA:
  "Kontaktirajte nas" or "Pridružite se"

This block should anchor the footer emotionally and visually.

---

### B. Main navigation group

Include all items currently present in the navbar.

Mirror the navbar structure in the footer.

At minimum include:

- Početna
- O nama
- Inicijative
- Podrška
- Kontakt

If navbar naming differs in code, use the actual production labels.

---

### C. Additional useful site links

Add a second navigation group for footer-only utility links.

Recommended:

- Naše priče
- Događanja / Kalendar
- Galerija
- Prošli projekti
- Česta pitanja

Only include links that exist or are planned in the architecture.

Do not invent random sections outside the site plan.

---

### D. Contact group

Include:

- email
- phone if available
- physical location / city if available

Optional:

- working hours
- contact page link

Contact info should be clean and minimal, not dense.

---

### E. Social links

Include modern social icons/links if profiles exist or are expected:

- Facebook
- Instagram
- YouTube
- LinkedIn

If real links are not yet available, add placeholder structure only.

Icons should be subtle and elegant, not oversized.

---

### F. Legal / standard footer links

Include a bottom legal row with:

- Pravila privatnosti
- Uvjeti korištenja
- Kolačići
- Pristupačnost

If not all pages exist yet, scaffold the links or placeholders.

These are standard footer expectations and improve trust and usability. :contentReference[oaicite:1]{index=1}

---

### G. Newsletter or secondary CTA (optional but recommended)

Add one quiet engagement element.

Choose one:

- newsletter signup
- "Pratite naš rad"
- "Želite pomoći?" CTA
- "Pročitajte naše priče" CTA

This should not dominate the footer.
Keep it lightweight and visually soft.

---

## Recommended information architecture

Use a 4-column desktop structure.

### Desktop columns

1. Brand / description / CTA
2. Glavna navigacija
3. Sadržaj / korisni linkovi
4. Kontakt + društvene mreže

### Bottom bar

- left: copyright text
- right: legal links

The footer should be grouped clearly because grouping improves scanning and reduces clutter. :contentReference[oaicite:2]{index=2}

---

## Responsive behavior

### Desktop

Use a balanced multi-column layout.

### Tablet

Collapse to 2 columns.

### Mobile

Stack everything vertically in this order:

1. brand block
2. CTA
3. navigation
4. useful links
5. contact
6. social
7. legal bottom row

Spacing must stay generous.
Do not create a cramped accordion-like footer unless content becomes too long.

Footer content should remain easy to scan on small screens. :contentReference[oaicite:3]{index=3}

---

## Visual styling requirements

### Background

Use a soft footer surface that feels slightly more grounded than the section above it, but still aligned with the site's palette.

Recommended direction:

- warm blush / dusty pink-tinted neutral
- slightly darker than the page background
- not dark charcoal
- not pure white

Possible directions:

- soft mauve-tinted cream
- pale dusty rose gray
- muted warm pink neutral

Example tonal intent:

- footer background should feel like the final calm layer of the page

### Divider from previous section

Use a subtle ornamental or soft separator if already established in the design system.

If a divider ornament exists between sections, the footer should connect to that system rather than introducing a new pattern.

### Corners / surfaces

If the design language supports it, the footer can start with:

- a soft curved top edge
- a gentle top border
- a subtle shadow separation
- a ribbon-inspired divider ornament above

Keep it understated.

---

## Typography

Use the same typography system as the rest of the site.

Suggested hierarchy:

- footer headings: same sans-serif as body but slightly stronger
- logo/brand uses existing brand treatment
- body text remains soft and readable
- legal links are smaller but still accessible

### Footer heading style

Should feel structured, not loud.

### Body text

Readable, muted, soft contrast.

### Link text

Clear enough to scan quickly.

Do not use washed-out pink for everything.
Preserve contrast and readability.

---

## Hover and interaction rules

Follow the hover principles established in previous tasks:

- soft
- subtle
- no jumpy movement
- no translateY lift
- no heavy animation

### Footer links

On hover:

- slight color shift
- optional underline reveal
- no movement

### Social icons

On hover:

- subtle tint shift
- optional soft glow
- no bounce

### Footer CTA button

Must match the site-wide button hover system.

Do not invent a separate interaction language just for the footer.

---

## Accessibility requirements

Ensure:

- sufficient contrast
- clear focus-visible states
- keyboard accessible links
- touch-friendly spacing
- semantic footer markup

Implementation should use:

- `<footer>`
- logical heading structure
- grouped nav regions if needed
- meaningful labels for social icons

---

## Suggested markup structure

```html
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <!-- logo -->
      <!-- short description -->
      <!-- optional CTA -->
    </div>

    <nav class="site-footer__nav" aria-label="Glavna navigacija u podnožju">
      <!-- navbar links -->
    </nav>

    <nav class="site-footer__resources" aria-label="Korisni linkovi">
      <!-- stories, gallery, events, projects, faq -->
    </nav>

    <div class="site-footer__contact">
      <!-- contact info -->
      <!-- social links -->
    </div>
  </div>

  <div class="site-footer__bottom">
    <p class="site-footer__copyright">
      © [year] [association name]. Sva prava pridržana.
    </p>

    <nav class="site-footer__legal" aria-label="Pravni linkovi">
      <!-- privacy / terms / cookies / accessibility -->
    </nav>
  </div>
</footer>
```
