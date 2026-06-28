import { defineField, defineType } from "sanity";

export const blogAuthor = defineType({
  name: "blogAuthor",
  title: "Autorica Sonjinog bloga",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ime", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "title", title: "Titula", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "description", title: "Opis", type: "array", of: [{ type: "block" }], validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Fotografija", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
  },
});
