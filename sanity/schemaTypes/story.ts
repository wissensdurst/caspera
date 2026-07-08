import { defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const story = defineType({
  name: "story",
  title: "Moja priča",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naslov", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "author",
      title: "Autorica",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "date", title: "Datum", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "content", title: "Sadržaj priče", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Naslovna slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    ...seoFields,
  ],
});
