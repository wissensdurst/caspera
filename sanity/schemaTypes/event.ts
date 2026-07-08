import { defineField, defineType } from "sanity";
import { seoFields } from "./seoFields";

export const event = defineType({
  name: "event",
  title: "Kalendar događanja",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naslov", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "dateTime", title: "Datum i vrijeme", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "location", title: "Lokacija", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Opis", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Naslovna slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    ...seoFields,
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
});
