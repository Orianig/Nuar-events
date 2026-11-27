import type { EventTypeSlug } from '../lib/eventTypes';
import { generatedEvents } from './bbdd.generated';

export type LocalizedString = { es: string; en: string };

export type Story = {
  code: string;
  title: LocalizedString;
  type: EventTypeSlug;
  name: LocalizedString;
  attendees: number;
  attendeesLabel: string;
  location: LocalizedString;
  experience: LocalizedString;
  details: LocalizedString;
  coverImage: string;
  images: string[];
  date: string;
  published: boolean;
};

export const stories: Story[] = generatedEvents.map((event) => ({
  code: event.code,
  title: { ...event.title },
  type: event.type as EventTypeSlug,
  name: { ...event.name },
  attendees: event.attendees,
  attendeesLabel: event.attendeesLabel,
  location: { ...event.location },
  experience: { ...event.experience },
  details: { ...event.details },
  coverImage: event.coverImage,
  images: [...event.images],
  date: event.date,
  published: event.published,
}));

/** Featured en home: prioriza 001–004 si existen. */
export const FEATURED_STORY_CODES = ['001', '002', '003', '004'] as const;

export function getStory(code: string): Story | undefined {
  return stories.find((s) => s.code === code);
}

export function getFeaturedStories(): Story[] {
  const featured = FEATURED_STORY_CODES.map((code) => getStory(code)).filter(Boolean) as Story[];
  if (featured.length) return featured;
  return stories.slice(0, 4);
}

export function getStoriesByType(type: EventTypeSlug, limit = 4): Story[] {
  return stories.filter((s) => s.type === type).slice(0, limit);
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

export function attendeesText(story: Story, lang: 'es' | 'en'): string {
  const label = story.attendeesLabel || String(story.attendees);
  return lang === 'en' ? `${label} Guests` : `${label} Asistentes`;
}
