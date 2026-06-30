import { defineField, defineType } from "sanity";

const blockContentToPlainText = (value: unknown) => {
  if (typeof value === "string") {
    return value;
  }

  if (!Array.isArray(value)) {
    return "";
  }

  return value
    .map((block) =>
      Array.isArray(block?.children)
        ? block.children.map((child) => child?.text ?? "").join("")
        : ""
    )
    .filter(Boolean)
    .join(" ");
};

export const author = defineType({
  name: "author",
  title: "O autoricama",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ime i prezime", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "photo", title: "Fotografija", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "shortBio",
      title: "Kratka biografija",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "displayOrder", title: "Redoslijed prikaza", type: "number", initialValue: 100 }),
  ],
  orderings: [
    {
      title: "Redoslijed prikaza",
      name: "displayOrderAsc",
      by: [{ field: "displayOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "shortBio",
      media: "photo",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: blockContentToPlainText(subtitle),
        media,
      };
    },
  },
});
