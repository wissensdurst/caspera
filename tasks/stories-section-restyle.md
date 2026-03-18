Change the styles of the stories section to match it with the rest of the website
Reuse the style variables wherever you can to keep the consistency across the website

Style:

- Style the stories section title and subtitles the same way they are styled in the support section, same positioning, same colors, same fonts
- Remove the ornament element from the stories section
- Remove the background from stories section, the whole website should have the same background
- Use the same on-hover effect from the support cards, on each story element
- Use the Playfair Display font on the stories titles with cool-gray as a color
- Use the cool-gray color on the stories**featured-excerpt, stories**date, stories\_\_author-name classes
- Instead of the stories**button use the stories\*\*cta, and position it the same way as in stories**card
- Use hero-highlight color on stories\_\_cta buttons

Layout:

- stories**fatured-meta layout should be; stories**avatar, author-name, stories\_\_date
- Add a subtle vertical divider between author-name and stories\_\_date
- Add an svg icon calendar-date.svg in front of the stories\_\_date
- Use the same meta layout for all stories elements

Requirements:

- Use semantic HTML
- Use clean SCSS/CSS
- Follow current project structure
- Reuse existing variables/mixins if available
- Keep code modular and maintainable
- Don’t modify unrelated files

Assets:

- Use calendar-date.svg in the assets/icons folder
