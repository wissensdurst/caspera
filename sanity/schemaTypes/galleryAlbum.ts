import { defineField, defineType } from "sanity";

export const galleryAlbum = defineType({
  name: "galleryAlbum",
  title: "Galerija",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Naslov albuma", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Datum", type: "date", validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", title: "Naslovna slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "images",
      title: "Fotografije",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "image", title: "Slika", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: {
              media: "image",
            },
            prepare() {
              return { title: "Fotografija" };
            },
          },
        },
      ],
    }),
  ],
});
