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
 * Obtiene el idioma: primero de sessionStorage, luego de URL, por defecto 'es'
 */
export function getLang(url?: URL): Lang {
  // En el cliente, preferir sessionStorage
  if (typeof window !== 'undefined') {
    const stored = sessionStorage.getItem('nuar-lang');
    if (stored === 'en' || stored === 'es') return stored;
  }
  
  // En el servidor o si no hay sessionStorage, leer de URL
  if (url) {
    const param = url.searchParams.get('lang');
    if (param === 'en' || param === 'es') {
      // Guardar en sessionStorage si estamos en el cliente
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('nuar-lang', param);
      }
      return param;
    }
  }
  
  return 'es';
}

/**
 * Cambia el idioma y guarda en sessionStorage
 */
export function setLang(lang: Lang): void {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('nuar-lang', lang);
  }
}
