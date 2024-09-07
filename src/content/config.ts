import { defineCollection } from "astro:content";
import { rssSchema } from "@astrojs/rss";

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: rssSchema,
});

export const collections = {
  blog: blogCollection,
};
