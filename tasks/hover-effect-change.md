# Task: Update Card Hover Interaction to Soft Glow Style

## Goal

Replace the current hover interaction on all card components (support cards and story cards) with a **soft glow + subtle background change**, removing any movement-based effects (e.g. translateY).

This should create a **calm, premium, feminine interaction style** consistent with the overall design language.

---

## Current Issue

Cards currently use hover effects such as:

- `transform: translateY(...)`
- strong elevation changes

This creates unnecessary motion and breaks the soft, calm UX.

---

## Required Changes

### 1. Update Base `.card` Styles

Ensure all card components share a consistent base:

```css
.card {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}
```

---

### 2. Replace Hover Interaction

Apply the following hover style globally to all `.card` elements:

```css
.card:hover {
  background: #fff7fb;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.04),
    /* base shadow */ 0 0 0 1px rgba(255, 255, 255, 0.8),
    /* subtle white edge */ 0 12px 40px rgba(255, 255, 255, 0.6); /* white underglow */

  transform: none;
}
```

---

### 3. Remove Old Hover Effects

Remove or override any existing hover rules such as:

```css
transform: translateY(...)
transform: scale(...)
```

Ensure no vertical movement or aggressive scaling remains.

---

### 4. Ensure Consistency Across Components

Apply this hover behavior to:

- Support section cards
- Story cards (small)
- Featured story card

If separate classes exist (e.g. `.story-card`, `.featured-card`), ensure they either:

- inherit `.card`, or
- use identical hover behavior

---

## Design Intent

The hover interaction should feel:

- soft
- calm
- warm
- non-distracting

Avoid any interaction that feels:

- jumpy
- overly animated
- physically “lifting” off the page

---

## Acceptance Criteria

- No card moves vertically on hover
- Hover effect is based on **color + glow only**
- Interaction feels subtle and smooth
- Visual consistency across all card types
- Matches overall feminine / pastel design system

---

## Notes

This change is part of a broader effort to:

- reduce UI noise
- increase perceived quality
- align interactions with emotional tone of the website

---
