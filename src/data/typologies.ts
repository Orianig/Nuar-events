import type { EventTypeSlug } from '../lib/eventTypes';
import type { LocalizedString } from './stories';

/** Keys internas ↔ rutas `/eventos/[slug]` */
export const TYPOLOGY_KEYS = {
  corporate: 'corporativos',
  privateCelebrations: 'celebraciones',
  weddings: 'bodas',
  nuarExperiences: 'experiencias-nuar',
} as const;

export type TypologyKey = keyof typeof TYPOLOGY_KEYS;

export type TypologyItem = {
  logo: string;
  title: LocalizedString;
  description: LocalizedString;
};

/**
 * Contendido de cada página de tipología.
 * Tipology → slug de ruta (corporativos | celebraciones | bodas | experiencias-nuar)
 */
export type Typology = {
  /** Ruta: corporativos | celebraciones | bodas | experiencias-nuar */
  id: EventTypeSlug;
  /** Clave legible: corporate | privateCelebrations | weddings | nuarExperiences */
  key: TypologyKey;
  /** Etiqueta corta de tipología (kicker / chip) */
  typology: LocalizedString;
  titleHero: LocalizedString;
  descriptionHero: LocalizedString;
  littleTitleHero: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  items: TypologyItem[];
  coverImage: string;
  /** PDF u otro recurso descargable; vacío si aún no hay */
  dossier: string;
};

export const typologies: Typology[] = [
  {
    id: 'corporativos',
    key: 'corporate',
    typology: {
      es: 'Corporativo',
      en: 'Corporate',
    },
    titleHero: {
      es: '',
      en: '',
    },
    descriptionHero: {
      es: '',
      en: '',
    },
    littleTitleHero: {
      es: '',
      en: '',
    },
    title: {
      es: '',
      en: '',
    },
    description: {
      es: '',
      en: '',
    },
    items: [],
    coverImage: '/events/corporate%20events/corporate-bg-page.jpg',
    dossier: '',
  },
  {
    id: 'celebraciones',
    key: 'privateCelebrations',
    typology: {
      es: 'Celebración privada',
      en: 'Private celebration',
    },
    titleHero: {
      es: '',
      en: '',
    },
    descriptionHero: {
      es: '',
      en: '',
    },
    littleTitleHero: {
      es: '',
      en: '',
    },
    title: {
      es: '',
      en: '',
    },
    description: {
      es: '',
      en: '',
    },
    items: [],
    coverImage: '/events/private%20celebrations/celebrations-bg-page.jpg',
    dossier: '',
  },
  {
    id: 'bodas',
    key: 'weddings',
    typology: {
      es: 'Boda',
      en: 'Wedding',
    },
    titleHero: {
      es: '',
      en: '',
    },
    descriptionHero: {
      es: '',
      en: '',
    },
    littleTitleHero: {
      es: '',
      en: '',
    },
    title: {
      es: '',
      en: '',
    },
    description: {
      es: '',
      en: '',
    },
    items: [],
    coverImage: '/events/weddings/weddings-bg-page.jpg',
    dossier: '',
  },
  {
    id: 'experiencias-nuar',
    key: 'nuarExperiences',
    typology: {
      es: 'Experiencia NUAR',
      en: 'NUAR experience',
    },
    titleHero: {
      es: '',
      en: '',
    },
    descriptionHero: {
      es: '',
      en: '',
    },
    littleTitleHero: {
      es: '',
      en: '',
    },
    title: {
      es: '',
      en: '',
    },
    description: {
      es: '',
      en: '',
    },
    items: [],
    coverImage: '/events/nuar%20experiences/experience-bg-page.heif',
    dossier: '',
  },
];

export function getTypology(id: EventTypeSlug): Typology | undefined {
  return typologies.find((t) => t.id === id);
}

export function getTypologyByKey(key: TypologyKey): Typology | undefined {
  return typologies.find((t) => t.key === key);
}
