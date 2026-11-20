import type { EventTypeSlug } from '../lib/eventTypes';

export type LocalizedString = { es: string; en: string };

export type Story = {
  code: string;
  type: EventTypeSlug;
  name: LocalizedString;
  attendees: number;
  location: LocalizedString;
  experience: LocalizedString;
  details: LocalizedString;
  coverImage: string;
  images: string[];
};

export const stories: Story[] = [
  {
    code: 'graduacion-master-pelicano',
    type: 'celebraciones',
    name: {
      es: 'Graduación de máster',
      en: 'Master’s graduation',
    },
    attendees: 65,
    location: {
      es: 'Pelikano Beach Club',
      en: 'Pelikano Beach Club',
    },
    experience: {
      es: 'Una noche de celebración para marcar el cierre de una etapa. Diseñamos un ambiente cálido y elegante donde cada detalle acompañaba el ritmo de la velada.',
      en: 'A celebration night to mark the end of a chapter. We designed a warm, elegant atmosphere where every detail followed the pace of the evening.',
    },
    details: {
      es: 'Coordinación completa del evento: espacio, recepción, ambientación y flujo de la noche para que el equipo solo tuviera que disfrutar.',
      en: 'Full event coordination: venue, reception, styling and evening flow so the group only had to enjoy.',
    },
    coverImage: '/events/private%20celebrations/graduation-card-history.jpg',
    images: ['/events/private%20celebrations/graduation-card-history.jpg'],
  },
  {
    code: 'corporativo-alqueria-albufera',
    type: 'corporativos',
    name: {
      es: 'Evento corporativo',
      en: 'Corporate event',
    },
    attendees: 13,
    location: {
      es: 'Alqueria La Albufera',
      en: 'Alqueria La Albufera',
    },
    experience: {
      es: 'Un encuentro íntimo de empresa en un entorno natural. Priorizamos la conversación, la calma y una experiencia cuidada de principio a fin.',
      en: 'An intimate company gathering in a natural setting. We prioritized conversation, calm and a carefully crafted experience from start to finish.',
    },
    details: {
      es: 'Selección de espacio, logística y detalles de hospitalidad adaptados a un equipo reducido con necesidades específicas.',
      en: 'Venue selection, logistics and hospitality details tailored to a small team with specific needs.',
    },
    coverImage: '/events/corporate%20events/corporate-gifts.png',
    images: ['/events/corporate%20events/corporate-gifts.png'],
  },
  {
    code: 'cumpleanos-18-pelicano',
    type: 'celebraciones',
    name: {
      es: 'Cumpleaños 18',
      en: '18th birthday',
    },
    attendees: 32,
    location: {
      es: 'Pelikano Beach Club',
      en: 'Pelikano Beach Club',
    },
    experience: {
      es: 'Una celebración joven y memorable junto al mar. Creamos un ambiente festivo sin perder la esencia cercana y personal de NUAR.',
      en: 'A memorable young celebration by the sea. We created a festive atmosphere without losing NUAR’s warm, personal essence.',
    },
    details: {
      es: 'Diseño de la experiencia, ambientación y coordinación del día para que la familia y amistades vivieran el momento sin preocupaciones.',
      en: 'Experience design, styling and day-of coordination so family and friends could enjoy the moment worry-free.',
    },
    coverImage: '/events/private%20celebrations/celebrations-history-card.png',
    images: ['/events/private%20celebrations/celebrations-history-card.png'],
  },
  {
    code: 'despedida-caseta-perellonet',
    type: 'celebraciones',
    name: {
      es: 'Despedida de soltera',
      en: 'Hen party',
    },
    attendees: 27,
    location: {
      es: 'Caseta del Perellonet',
      en: 'Caseta del Perellonet',
    },
    experience: {
      es: 'Una despedida cercana y divertida donde todo estuvo pensado para que el grupo solo disfrutara. Ambiente distendido y detalles con intención.',
      en: 'A warm, fun farewell where everything was planned so the group could simply enjoy. A relaxed atmosphere with intentional details.',
    },
    details: {
      es: 'Organización integral: espacio, dinámicas, atención y ritmo del día en la Caseta del Perellonet.',
      en: 'End-to-end organization: venue, activities, hosting and day flow at Caseta del Perellonet.',
    },
    coverImage: '/events/private%20celebrations/bacherlorette-card-history.png',
    images: ['/events/private%20celebrations/bacherlorette-card-history.png'],
  },
];

export const FEATURED_STORY_CODES = [
  'graduacion-master-pelicano',
  'corporativo-alqueria-albufera',
  'cumpleanos-18-pelicano',
  'despedida-caseta-perellonet',
] as const;

export function getStory(code: string): Story | undefined {
  return stories.find((s) => s.code === code);
}

export function getFeaturedStories(): Story[] {
  return FEATURED_STORY_CODES.map((code) => getStory(code)).filter(Boolean) as Story[];
}

export function storyHref(code: string, lang: 'es' | 'en', base = ''): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  if (lang === 'en') {
    return b ? `${b}/en/historias/${code}` : `/en/historias/${code}`;
  }
  return b ? `${b}/historias/${code}` : `/historias/${code}`;
}

export function localize(value: LocalizedString, lang: 'es' | 'en'): string {
  return value[lang];
}
