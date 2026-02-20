/**
 * i18n — lógica central de idiomas
 */

import type { Lang, Translations } from './types';
import { es } from './translations.es';
import { en } from './translations.en';

const translations: Record<Lang, Translations> = { es, en };

export type { Lang, Translations };

export function getTranslations(lang: Lang = 'es'): Translations {
  return translations[lang];
}

/**
 * Obtiene el idioma desde la URL (?lang=es|en). Por defecto 'es'.
 * Enfoque Astro: el idioma es parte de la URL, sin estado en cliente.
 */
export function getLang(url?: URL): Lang {
  if (url) {
    const param = url.searchParams.get('lang');
    if (param === 'en' || param === 'es') return param;
  }
  return 'es';
}
