export const EVENT_TYPE_SLUGS = [
  'corporativos',
  'bodas',
  'cumpleanos',
  'graduaciones',
  'otros',
] as const;

export type EventTypeSlug = (typeof EVENT_TYPE_SLUGS)[number];

export const HOME_EVENT_TYPE_SLUGS = [
  'corporativos',
  'bodas',
  'cumpleanos',
  'graduaciones',
] as const;

export type HomeEventTypeSlug = (typeof HOME_EVENT_TYPE_SLUGS)[number];

export function eventTypeHref(slug: EventTypeSlug, lang: 'es' | 'en', base = ''): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  if (lang === 'en') {
    return b ? `${b}/en/eventos/${slug}` : `/en/eventos/${slug}`;
  }
  return b ? `${b}/eventos/${slug}` : `/eventos/${slug}`;
}

export function allEventsHref(lang: 'es' | 'en', base = ''): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  if (lang === 'en') {
    return b ? `${b}/en/eventos` : `/en/eventos`;
  }
  return b ? `${b}/eventos` : `/eventos`;
}
