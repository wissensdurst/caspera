import { defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const blogPost = defineType({
  name: "blogPost",
  title: "Sonjin blog",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naslov", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Datum", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "content", title: "Sadrzaj objave", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Naslovna slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    ...seoFields,
  ],
  orderings: [
    {
      title: "Najnovije",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Najstarije",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "coverImage",
    },
  },
});
