export type SanityImage = { asset?: { url?: string } } | string | undefined;

export type PortableTextMarkDef = {
  _key?: string;
  _type?: string;
  href?: string;
};

export type PortableTextChild = {
  text?: string;
  marks?: string[];
};

export type PortableTextBlock = {
  style?: string;
  listItem?: string;
  children?: PortableTextChild[];
  markDefs?: PortableTextMarkDef[];
};

export type PortableTextValue = PortableTextBlock[] | string;

type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  socialImage?: SanityImage;
  noIndex?: boolean;
};

export type SlugRecord = {
  slug: string;
};

export type AuthorRecord = {
  name: string;
  photo?: SanityImage;
  shortBio?: PortableTextValue;
  displayOrder?: number;
};

export type BlogAuthorRecord = {
  name: string;
  title?: string;
  description?: PortableTextValue;
  photo?: SanityImage;
};

export type StoryRecord = SeoFields & {
  title: string;
  slug: string;
  author?: AuthorRecord | string;
  date: string;
  content?: PortableTextValue;
  coverImage?: SanityImage;
};

export type BlogPostRecord = SeoFields & {
  title: string;
  slug: string;
  date: string;
  content?: PortableTextValue;
  coverImage?: SanityImage;
};

export type EventRecord = SeoFields & {
  title: string;
  slug: string;
  dateTime: string;
  location?: string;
  description?: PortableTextValue;
  coverImage?: SanityImage;
};

export type ProjectRecord = SeoFields & {
  title: string;
  slug: string;
  date: string;
  location?: string;
  description?: PortableTextValue;
  coverImage?: SanityImage;
};

export type GalleryImageRecord = {
  image?: SanityImage;
};

export type GalleryAlbumRecord = SeoFields & {
  title: string;
  slug: string;
  date: string;
  coverImage?: SanityImage;
  images?: GalleryImageRecord[];
};

export type PersonRecord = {
  name: string;
  title?: string;
  photo?: SanityImage;
  shortBio?: PortableTextValue;
  displayOrder?: number;
};
