import type { ImageMetadata } from 'astro';
import type { EventTypeSlug } from '../lib/eventTypes';
import type { LocalizedString } from './stories';
import { generatedTipologias } from './bbdd.generated';
import corporateHero from '../assets/typology/corporate-hero.png';
import weddingHero from '../assets/typology/wedding-hero.jpg';
import birthdayHero from '../assets/typology/birthday-hero.png';
import graduationHero from '../assets/typology/graduation-hero.png';
import otherHero from '../assets/typology/other-hero.png';

export type TypologyItem = {
  logo: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type Typology = {
  id: EventTypeSlug;
  typology: LocalizedString;
  titleHero: LocalizedString;
  descriptionHero: LocalizedString;
  littleTitleHero: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  items: TypologyItem[];
  coverImage: ImageMetadata;
  bleedColor: string;
  heroObjectPosition?: string;
  dossier: string;
};

const ITEM_ICONS = [
  '/icons/people.png',
  '/icons/leaf.png',
  '/icons/stars.png',
  '/icons/idea.png',
  '/icons/heart.png',
] as const;

const PRESENTATION: Record<
  EventTypeSlug,
  {
    coverImage: ImageMetadata;
    bleedColor: string;
    littleTitleHero: LocalizedString;
    heroObjectPosition?: string;
  }
> = {
  corporativos: {
    coverImage: corporateHero,
    bleedColor: '#241810',
    littleTitleHero: { es: 'Experiencias que conectan', en: 'Experiences that connect' },
  },
  bodas: {
    coverImage: weddingHero,
    bleedColor: '#2a241c',
    littleTitleHero: { es: 'El día que lo cambia todo', en: 'The day that changes everything' },
  },
  cumpleanos: {
    coverImage: birthdayHero,
    bleedColor: '#2c2618',
    littleTitleHero: { es: 'Celebrar a tu manera', en: 'Celebrate your way' },
    heroObjectPosition: 'center 45%',
  },
  graduaciones: {
    coverImage: graduationHero,
    bleedColor: '#1f2418',
    littleTitleHero: { es: 'El fin de una etapa', en: 'The end of a chapter' },
    heroObjectPosition: 'center 55%',
  },
  otros: {
    coverImage: otherHero,
    bleedColor: '#241810',
    littleTitleHero: { es: 'Ideas con identidad', en: 'Ideas with identity' },
    heroObjectPosition: 'center 50%',
  },
};

function heroLines(title: string): LocalizedString {
  const t = title.trim();
  if (/^eventos\s+/i.test(t) || /^otros\s+/i.test(t)) {
    const parts = t.split(/\s+/);
    if (parts.length >= 2) {
      const line = `${parts[0]}\n${parts.slice(1).join(' ')}`;
      return { es: line.toUpperCase(), en: line.toUpperCase() };
    }
  }
  return { es: t.toUpperCase(), en: t.toUpperCase() };
}

export const typologies: Typology[] = generatedTipologias.map((row) => {
  const id = row.id as EventTypeSlug;
  const presentation = PRESENTATION[id];
  const items: TypologyItem[] = row.items.map((item, i) => ({
    logo: ITEM_ICONS[i % ITEM_ICONS.length],
    title: { ...item.title },
    description: { ...item.description },
  }));

  return {
    id,
    typology: { ...row.titleHero },
    titleHero: heroLines(row.titleHero.es),
    descriptionHero: { ...row.descriptionHero },
    littleTitleHero: presentation.littleTitleHero,
    title: { ...row.title },
    description: { ...row.description },
    items,
    coverImage: presentation.coverImage,
    bleedColor: presentation.bleedColor,
    heroObjectPosition: presentation.heroObjectPosition,
    dossier: row.dossier || '',
  };
});

export function getTypology(id: EventTypeSlug): Typology | undefined {
  return typologies.find((t) => t.id === id);
}

export function typologyTitleLines(titleHero: LocalizedString, lang: 'es' | 'en'): string[] {
  return titleHero[lang]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
}
