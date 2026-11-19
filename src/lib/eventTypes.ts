export const EVENT_TYPE_SLUGS = [
  'corporativos',
  'celebraciones',
  'bodas',
  'experiencias-nuar',
] as const;

export type EventTypeSlug = (typeof EVENT_TYPE_SLUGS)[number];

export const EVENT_TYPE_IMAGES: Record<EventTypeSlug, string> = {
  corporativos: '/events/corporate%20events/corporate-card-picture.jpg',
  celebraciones: '/events/private%20celebrations/celebrations-card-picture.jpg',
  bodas: '/events/weddings/weddings-card-picture.jpg',
  'experiencias-nuar': '/events/nuar%20experiences/nuar-experiences-card-picture.png',
};

export function eventTypeHref(slug: EventTypeSlug, lang: 'es' | 'en', base = ''): string {
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  if (lang === 'en') {
    return b ? `${b}/en/eventos/${slug}` : `/en/eventos/${slug}`;
  }
  return b ? `${b}/eventos/${slug}` : `/eventos/${slug}`;
}
