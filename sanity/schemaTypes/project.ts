import { defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const project = defineType({
  name: "project",
  title: "Naši projekti",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naslov", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Datum", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Lokacija", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Opis", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Naslovna slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    ...seoFields,
  ],
  orderings: [
    {
      title: "Najnoviji",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Najstariji",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
});
