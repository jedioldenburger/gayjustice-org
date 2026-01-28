import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("STVG"),
    pubDatetime: z.coerce.date(),
    modDatetime: z.coerce.date().optional(),
    lang: z.enum(["nl", "en"]),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default(["article"]),
  }),
});

export const collections = { blog };
