import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['comparison', 'review', 'howto', 'area', 'concern']),
    tags: z.array(z.string()),
    affiliateLinks: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url(),
          cta: z.string(),
        })
      )
      .optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
