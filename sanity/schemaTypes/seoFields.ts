import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: "metaTitle",
    title: "SEO naslov",
    type: "string",
    description: "Opcionalni naslov za tražilice i dijeljenje na društvenim mrežama.",
    validation: (Rule) => Rule.max(70).warning("Preporuka je do 70 znakova."),
  }),
  defineField({
    name: "metaDescription",
    title: "SEO opis",
    type: "text",
    rows: 3,
    description: "Opcionalni opis za rezultate pretraživanja i društvene mreže.",
    validation: (Rule) => Rule.max(180).warning("Preporuka je do 180 znakova."),
  }),
  defineField({
    name: "socialImage",
    title: "Slika za dijeljenje",
    type: "image",
    options: { hotspot: true },
  }),
  defineField({
    name: "noIndex",
    title: "Ne indeksiraj stranicu",
    type: "boolean",
    initialValue: false,
    description: "Uključiti samo za sadržaj koji ne treba biti vidljiv u tražilicama.",
  }),
];
