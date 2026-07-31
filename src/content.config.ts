import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Mirrors the shape of the future Supabase `projects` table 1:1, so that
// src/lib/content.ts can later swap its data source without touching any
// component that consumes Project data.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/projects' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    title: z.string(),
    client: z.string(),
    category: z.enum(['film', 'commercial', 'branded', 'music-video', 'documentary']),
    year: z.number().optional(),
    vimeoId: z.string().optional(),
    thumbnail: z.string().optional(),
    previewVideo: z.string().optional(),
    previewZoom: z.number().optional(),
    accentColor: z.string().default('#1a1a1a'),
    description: z
      .object({
        de: z.string(),
        en: z.string(),
      })
      .optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
