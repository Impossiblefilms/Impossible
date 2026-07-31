export const languages = {
  de: 'DE',
  en: 'EN',
} as const;

export const defaultLang = 'de';

export const ui = {
  de: {
    'site.name': 'Impossible Films',
    'site.tagline': 'Filmproduktion Hamburg',

    'nav.work': 'Arbeiten',
    'nav.studio': 'Studio',
    'nav.contact': 'Kontakt',
    'nav.menu': 'Menü',
    'nav.close': 'Schließen',

    'hero.claim': 'IMPOSSIBLE FILMS',
    'hero.scroll': 'Scrollen',

    'work.title': 'Aktuelle Arbeiten',
    'work.loadMore': 'Mehr laden',
    'work.watch': 'Ansehen',

    'project.client': 'Kunde',
    'project.year': 'Jahr',
    'project.category': 'Kategorie',
    'project.back': 'Zurück zu Arbeiten',
    'project.next': 'Nächstes Projekt',

    'category.film': 'Film',
    'category.commercial': 'Werbefilm',
    'category.branded': 'Branded Content',
    'category.music-video': 'Musikvideo',
    'category.documentary': 'Dokumentation',

    'studio.title': 'Studio',
    'studio.body':
      'Impossible Films ist eine Filmproduktion mit Sitz in Hamburg. Wir erzählen Geschichten für Marken, Sender und Kunden — von der Idee bis zum fertigen Film.',
    'studio.location': 'Hamburg',

    'contact.title': 'Sprechen wir.',
    'contact.body': 'Für Anfragen und Projekte erreicht ihr uns per E-Mail oder ruft uns an.',
    'contact.cta': 'E-Mail schreiben',

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

    'legal.imprint.title': 'Impressum',
    'legal.privacy.title': 'Datenschutzerklärung',
  },
  en: {
    'site.name': 'Impossible Films',
    'site.tagline': 'Film Production Hamburg',

    'nav.work': 'Work',
    'nav.studio': 'Studio',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'hero.claim': 'IMPOSSIBLE FILMS',
    'hero.scroll': 'Scroll',

    'work.title': 'Recent Work',
    'work.loadMore': 'Load more',
    'work.watch': 'Watch',

    'project.client': 'Client',
    'project.year': 'Year',
    'project.category': 'Category',
    'project.back': 'Back to Work',
    'project.next': 'Next Project',

    'category.film': 'Film',
    'category.commercial': 'Commercial',
    'category.branded': 'Branded Content',
    'category.music-video': 'Music Video',
    'category.documentary': 'Documentary',

    'studio.title': 'Studio',
    'studio.body':
      'Impossible Films is a film production company based in Hamburg. We tell stories for brands, broadcasters and clients — from idea to finished film.',
    'studio.location': 'Hamburg',

    'contact.title': "Let's talk.",
    'contact.body': 'For inquiries and projects, reach us by email or give us a call.',
    'contact.cta': 'Send an email',

    'footer.rights': 'All rights reserved.',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',

    'legal.imprint.title': 'Imprint',
    'legal.privacy.title': 'Privacy Policy',
  },
} as const;

export type UiKey = keyof (typeof ui)['de'];
