export const SITE_NAME = 'Nuar Events';
export const DEFAULT_OG_IMAGE = '/general/home/hero/hero1.png';
export const SITE_EMAIL = 'hola@nuarevents.es';
export const SITE_PHONE = '+34656499302';
export const SITE_PHONE_DISPLAY = '+34 656 49 93 02';

export const SOCIAL_PROFILES = [
  'https://www.instagram.com/nuarevents/',
  'https://www.tiktok.com/@nuareventss',
  'https://www.linkedin.com/company/nuar-events/posts/?feedView=all',
] as const;

export function absoluteUrl(path: string | undefined, siteOrigin: string): string | undefined {
  if (!path || !siteOrigin) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  const origin = siteOrigin.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function buildPageTitle(title?: string): string {
  const clean = title?.replace(/\s*[|·-]\s*Nuar(?:\s*Events)?\s*$/i, '').trim();
  if (!clean) return SITE_NAME;
  if (clean.toLowerCase() === SITE_NAME.toLowerCase() || clean.toLowerCase() === 'nuar') {
    return SITE_NAME;
  }
  return `${clean} | ${SITE_NAME}`;
}

export function organizationJsonLd(siteOrigin: string, lang: 'es' | 'en' = 'es') {
  const origin = siteOrigin.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${origin}/#organization`,
    name: SITE_NAME,
    url: origin || 'https://www.nuarevents.es',
    logo: absoluteUrl('/logos/publicLogo.png', origin),
    image: absoluteUrl(DEFAULT_OG_IMAGE, origin),
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description:
      lang === 'en'
        ? 'Nuar Events designs unique celebrations and experiences in Valencia, with intention in every detail.'
        : 'Nuar Events diseña celebraciones y experiencias únicas en Valencia, con intención en cada detalle.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valencia',
      addressRegion: 'Comunidad Valenciana',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Valencia',
    },
    sameAs: [...SOCIAL_PROFILES],
  };
}

export function storyArticleJsonLd(input: {
  siteOrigin: string;
  url: string;
  headline: string;
  description: string;
  image?: string;
  lang: 'es' | 'en';
}) {
  const origin = input.siteOrigin.replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    image: absoluteUrl(input.image, origin),
    inLanguage: input.lang === 'en' ? 'en' : 'es',
    mainEntityOfPage: absoluteUrl(input.url, origin),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: origin,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/logos/publicLogo.png', origin),
      },
    },
  };
}
