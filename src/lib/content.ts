import { getCollection, getEntry } from 'astro:content';
import type { Project } from './types';

// Single point of access for project data. Every page/component must go
// through these functions instead of calling astro:content directly — when
// the site later moves to Supabase, only this file changes (the query body
// becomes a supabase-js call), and the Project shape stays identical.

export async function getAllProjects(): Promise<Project[]> {
  const entries = await getCollection('projects');
  return entries.map((entry) => entry.data as Project).sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const entry = await getEntry('projects', slug);
  return (entry?.data as Project) ?? null;
}

export async function getAdjacentProjects(
  slug: string
): Promise<{ prev: Project | null; next: Project | null }> {
  const all = await getAllProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: all[(index - 1 + all.length) % all.length],
    next: all[(index + 1) % all.length],
  };
}
