import { ui, defaultLang, type UiKey } from './ui';

export type Locale = keyof typeof ui;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

export function useTranslations(lang: Locale) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

// Section slugs differ per language for readability/SEO (e.g. /de/arbeiten vs
// /en/work). This table is the single source of truth for that mapping, used
// both to build links and by the language switcher to translate the current
// route rather than just swapping the locale prefix.
const routeSegments: Record<string, Record<Locale, string>> = {
  work: { de: 'arbeiten', en: 'work' },
  contact: { de: 'kontakt', en: 'contact' },
  imprint: { de: 'impressum', en: 'imprint' },
  privacy: { de: 'datenschutz', en: 'privacy' },
};

export function localizedSegment(key: keyof typeof routeSegments, lang: Locale): string {
  return routeSegments[key][lang];
}

// Translates a pathname like /de/arbeiten/ferrari to /en/work/ferrari by
// looking up the first segment after the locale in routeSegments. Segments
// that aren't in the table (e.g. a project slug) are passed through as-is.
export function translatePath(pathname: string, targetLang: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const [, ...rest] = segments; // drop current locale segment

  if (rest.length === 0) return `/${targetLang}/`;

  const [firstSegment, ...remaining] = rest;
  const match = Object.entries(routeSegments).find(
    ([, byLang]) => byLang.de === firstSegment || byLang.en === firstSegment
  );

  const translatedFirst = match ? routeSegments[match[0] as keyof typeof routeSegments][targetLang] : firstSegment;

  return `/${[targetLang, translatedFirst, ...remaining].join('/')}/`;
}
