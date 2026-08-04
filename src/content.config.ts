import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    repo: z.url().optional(),
    link: z.url().optional(),
    linkLabel: z.string().default("Live"),
    pinned: z.boolean().default(false),
  })
});

export const collections = { blog, projects };
