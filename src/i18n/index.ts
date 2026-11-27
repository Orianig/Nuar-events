import type { Lang, Translations } from './types';
import { es } from './translations.es';
import { en } from './translations.en';

const translations: Record<Lang, Translations> = { es, en };

export type { Lang, Translations };

export function getTranslations(lang: Lang = 'es'): Translations {
  return translations[lang];
}
