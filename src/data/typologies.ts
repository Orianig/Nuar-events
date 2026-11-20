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
 * Contenido de cada página de tipología.
 * Tipology → slug de ruta (corporativos | celebraciones | bodas | experiencias-nuar)
 */
export type Typology = {
  /** Ruta: corporativos | celebraciones | bodas | experiencias-nuar */
  id: EventTypeSlug;
  /** Clave legible: corporate | privateCelebrations | weddings | nuarExperiences */
  key: TypologyKey;
  /** Etiqueta corta de tipología */
  typology: LocalizedString;
  /** Título grande del hero (usar \\n para saltos de línea) */
  titleHero: LocalizedString;
  descriptionHero: LocalizedString;
  /** Título slogan / cursiva encima del título */
  littleTitleHero: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  items: TypologyItem[];
  coverImage: string;
  /** Color de bleed lateral acorde a la imagen del hero */
  bleedColor: string;
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
    littleTitleHero: {
      es: 'Experiencias que conectan',
      en: 'Experiences that connect',
    },
    titleHero: {
      es: 'EVENTOS\nCORPORATIVOS',
      en: 'CORPORATE\nEVENTS',
    },
    descriptionHero: {
      es: 'Encuentros que fortalecen equipos, celebran logros y crean conexiones más allá del entorno de trabajo.',
      en: 'Gatherings that strengthen teams, celebrate achievements and create connections beyond the workplace.',
    },
    title: {
      es: 'Cada equipo tiene su propia historia.',
      en: 'Every team has its own story.',
    },
    description: {
      es: 'Diseñamos eventos que responden a la identidad de cada empresa, desde pequeños encuentros de equipo hasta grandes celebraciones, cuidando cada detalle y el entorno en el que suceden.',
      en: 'We design events that reflect each company’s identity, from small team gatherings to large celebrations, caring for every detail and the setting where they take place.',
    },
    items: [
      {
        logo: '/icons/people.png',
        title: {
          es: 'Team buildings',
          en: 'Team buildings',
        },
        description: {
          es: 'Actividades que fortalecen la conexión del equipo.',
          en: 'Activities that strengthen team connection.',
        },
      },
      {
        logo: '/icons/sign.png',
        title: {
          es: 'Comidas y cenas de empresa',
          en: 'Company lunches and dinners',
        },
        description: {
          es: 'Encuentros distendidos para compartir y celebrar.',
          en: 'Relaxed gatherings to share and celebrate.',
        },
      },
      {
        logo: '/icons/stars.png',
        title: {
          es: 'Celebraciones y aniversarios',
          en: 'Celebrations and anniversaries',
        },
        description: {
          es: 'Momentos especiales que refuerzan la cultura de la empresa.',
          en: 'Special moments that reinforce company culture.',
        },
      },
      {
        logo: '/icons/leaf.png',
        title: {
          es: 'Jornadas y encuentros',
          en: 'Workshops and gatherings',
        },
        description: {
          es: 'Espacios para inspirar, crear y planificar el futuro.',
          en: 'Spaces to inspire, create and plan the future.',
        },
      },
    ],
    coverImage: '/events/corporate%20events/corporate-bg-page.jpg',
    bleedColor: '#120e0a',
    dossier: '/documents/NuarEvents2026-Empresas.pdf',
  },
  {
    id: 'celebraciones',
    key: 'privateCelebrations',
    typology: {
      es: 'Celebración privada',
      en: 'Private celebration',
    },
    littleTitleHero: {
      es: 'Experiencias que conectan',
      en: 'Experiences that connect',
    },
    titleHero: {
      es: 'CELEBRACIONES\nPRIVADAS',
      en: 'PRIVATE\nCELEBRATIONS',
    },
    descriptionHero: {
      es: 'Momentos personales diseñados con calma, detalle y una identidad propia para cada celebración.',
      en: 'Personal moments designed with calm, detail and a unique identity for every celebration.',
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
    bleedColor: '#120e0a',
    dossier: '/documents/NuarEvents2026-Empresas.pdf',
  },
  {
    id: 'bodas',
    key: 'weddings',
    typology: {
      es: 'Boda',
      en: 'Wedding',
    },
    littleTitleHero: {
      es: 'Experiencias que conectan',
      en: 'Experiences that connect',
    },
    titleHero: {
      es: 'BODAS',
      en: 'WEDDINGS',
    },
    descriptionHero: {
      es: 'El día más importante, pensado con sensibilidad, ritmo y cuidado en cada detalle.',
      en: 'The most important day, planned with sensitivity, pace and care in every detail.',
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
    bleedColor: '#120e0a',
    dossier: '/documents/NuarEvents2026-Empresas.pdf',
  },
  {
    id: 'experiencias-nuar',
    key: 'nuarExperiences',
    typology: {
      es: 'Experiencia NUAR',
      en: 'NUAR experience',
    },
    littleTitleHero: {
      es: 'Experiencias que conectan',
      en: 'Experiences that connect',
    },
    titleHero: {
      es: 'EXPERIENCIAS\nNUAR',
      en: 'NUAR\nEXPERIENCES',
    },
    descriptionHero: {
      es: 'Encuentros creados por nosotras para descubrir, compartir y conectar con las personas.',
      en: 'Gatherings created by us to discover, share and connect with people.',
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
    // HEIF: poco soporte web; usar JPG cuando esté disponible
    coverImage: '/events/nuar%20experiences/experience-bg-page.heif',
    bleedColor: '#120e0a',
    dossier: '/documents/NuarEvents2026-Empresas.pdf',
  },
];

export function getTypology(id: EventTypeSlug): Typology | undefined {
  return typologies.find((t) => t.id === id);
}

export function getTypologyByKey(key: TypologyKey): Typology | undefined {
  return typologies.find((t) => t.key === key);
}

export function typologyTitleLines(titleHero: LocalizedString, lang: 'es' | 'en'): string[] {
  return titleHero[lang]
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}
