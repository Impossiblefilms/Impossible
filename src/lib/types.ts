export type ProjectCategory = 'film' | 'commercial' | 'branded' | 'music-video' | 'documentary';

export interface Project {
  slug: string;
  order: number;
  title: string;
  client: string;
  category: ProjectCategory;
  year?: number;
  vimeoId?: string;
  thumbnail?: string;
  previewVideo?: string;
  previewZoom?: number;
  accentColor: string;
  description?: {
    de: string;
    en: string;
  };
  featured: boolean;
}

export type Locale = 'de' | 'en';
