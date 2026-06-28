import { defineField, defineType } from "sanity";

export const advisor = defineType({
  name: "advisor",
  title: "Savjetodavatelji",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ime i prezime", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Fotografija", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: "shortBio", title: "Kratka biografija", type: "text", rows: 5, validation: (Rule) => Rule.required() }),
    defineField({ name: "displayOrder", title: "Redoslijed prikaza", type: "number", initialValue: 100 }),
  ],
  orderings: [
    {
      title: "Redoslijed prikaza",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
});
