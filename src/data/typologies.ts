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
 * Textos placeholder: sustituir cuando llegue el copy definitivo.
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
      es: 'Cada celebración tiene su propia historia.',
      en: 'Every celebration has its own story.',
    },
    description: {
      es: 'Acompañamos cumpleaños, despedidas, graduaciones y encuentros íntimos con una mirada cercana, cuidando el ritmo, el espacio y los detalles que hacen único cada momento.',
      en: 'We accompany birthdays, farewells, graduations and intimate gatherings with a close eye, caring for pace, space and the details that make each moment unique.',
    },
    items: [
      {
        logo: '/icons/stars.png',
        title: {
          es: 'Cumpleaños y hitos',
          en: 'Birthdays and milestones',
        },
        description: {
          es: 'Celebraciones personales pensadas para marcar una etapa.',
          en: 'Personal celebrations designed to mark a chapter.',
        },
      },
      {
        logo: '/icons/people.png',
        title: {
          es: 'Despedidas y encuentros',
          en: 'Farewells and gatherings',
        },
        description: {
          es: 'Momentos cercanos para compartir y disfrutar en grupo.',
          en: 'Warm moments to share and enjoy together.',
        },
      },
      {
        logo: '/icons/idea.png',
        title: {
          es: 'Graduaciones',
          en: 'Graduations',
        },
        description: {
          es: 'Cierres de etapa con ambiente cálido y cuidado.',
          en: 'Chapter endings with a warm, carefully crafted atmosphere.',
        },
      },
      {
        logo: '/icons/leaf.png',
        title: {
          es: 'Celebraciones íntimas',
          en: 'Intimate celebrations',
        },
        description: {
          es: 'Encuentros pequeños con identidad propia.',
          en: 'Small gatherings with their own identity.',
        },
      },
    ],
    coverImage: '/events/private%20celebrations/celebrations-bg-page.jpg',
    bleedColor: '#120e0a',
    dossier: '',
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
      es: 'Cada boda tiene su propia historia.',
      en: 'Every wedding has its own story.',
    },
    description: {
      es: 'Diseñamos el día con calma y atención: desde la ceremonia hasta la celebración, cuidando el entorno, el ritmo y aquello que os representa.',
      en: 'We design the day with calm and care: from the ceremony to the celebration, looking after the setting, the pace and what represents you.',
    },
    items: [
      {
        logo: '/icons/heart.png',
        title: {
          es: 'Ceremonias',
          en: 'Ceremonies',
        },
        description: {
          es: 'Espacios y rituales con sentido para vuestra historia.',
          en: 'Spaces and rituals that honour your story.',
        },
      },
      {
        logo: '/icons/leaf.png',
        title: {
          es: 'Banquetes y celebraciones',
          en: 'Receptions and celebrations',
        },
        description: {
          es: 'Mesas, ambiente y detalles que invitan a compartir.',
          en: 'Tables, atmosphere and details that invite sharing.',
        },
      },
      {
        logo: '/icons/people.png',
        title: {
          es: 'Welcome y brunch',
          en: 'Welcome and brunch',
        },
        description: {
          es: 'Encuentros previos o posteriores con el mismo cuidado.',
          en: 'Pre- or post-wedding gatherings with the same care.',
        },
      },
      {
        logo: '/icons/stars.png',
        title: {
          es: 'Detalles y estilo',
          en: 'Details and styling',
        },
        description: {
          es: 'Identidad visual y ambientación coherente con vuestra esencia.',
          en: 'Visual identity and styling consistent with your essence.',
        },
      },
    ],
    coverImage: '/events/weddings/weddings-bg-page.jpg',
    bleedColor: '#120e0a',
    dossier: '',
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
      es: 'Cada experiencia tiene su propia historia.',
      en: 'Every experience has its own story.',
    },
    description: {
      es: 'Proponemos encuentros pensados por NUAR: propuestas abiertas para descubrir, compartir y conectar en entornos cuidados y con sentido.',
      en: 'We create gatherings designed by NUAR: open proposals to discover, share and connect in carefully chosen, meaningful settings.',
    },
    items: [
      {
        logo: '/icons/leaf.png',
        title: {
          es: 'Encuentros al aire libre',
          en: 'Outdoor gatherings',
        },
        description: {
          es: 'Experiencias en entornos naturales para desconectar y compartir.',
          en: 'Experiences in natural settings to disconnect and share.',
        },
      },
      {
        logo: '/icons/people.png',
        title: {
          es: 'Comunidades y talleres',
          en: 'Communities and workshops',
        },
        description: {
          es: 'Espacios para aprender, crear y conocernos.',
          en: 'Spaces to learn, create and meet each other.',
        },
      },
      {
        logo: '/icons/idea.png',
        title: {
          es: 'Propuestas de temporada',
          en: 'Seasonal proposals',
        },
        description: {
          es: 'Ideas puntuales con ritmo propio a lo largo del año.',
          en: 'Timely ideas with their own rhythm throughout the year.',
        },
      },
      {
        logo: '/icons/stars.png',
        title: {
          es: 'Momentos NUAR',
          en: 'NUAR moments',
        },
        description: {
          es: 'Encuentros pequeños con la esencia de la marca.',
          en: 'Small gatherings with the essence of the brand.',
        },
      },
    ],
    coverImage: '/events/nuar%20experiences/experience-bg-page.avif',
    bleedColor: '#120e0a',
    dossier: '',
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
