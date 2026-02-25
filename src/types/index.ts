/**
 * Tipos compartidos para componentes y layouts
 */

/** Item de sección con imagen (SectionOne, SectionTwo) */
export interface SectionItem {
  image: string;
  title: string;
  description: string;
}

import type { Lang } from '../i18n/types';

export interface NavbarProps {
  brandName?: string;
  home?: string;
  projects?: string;
  contact?: string;
  menuToggle?: string;
  currentLang?: Lang;
  /** pathname actual (ej. /Nuar/es/, /Nuar/es/projects) para enlaces y LangSwitcher */
  currentPath?: string;
  /** base URL del sitio (ej. /Nuar) para construir enlaces por idioma */
  base?: string;
}

export interface FooterProps {
  contactText?: string;
}

export interface HeroProps {
  slogan?: string;
  backgroundVideo: string;
  height?: string;
}

export interface IntroAnimationProps {
  logoSrc?: string;
  backgroundColor?: string;
}

export interface SectionOneProps {
  image1: string;
  image2: string;
  title: string;
  paragraph: string;
  bullets: string[];
  backgroundColor?: string;
}

export interface SectionTwoProps {
  sectionTitle?: string;
  items?: SectionItem[];
  backgroundColor?: string;
}

export interface SectionThreeProps {
  image?: string;
  centerText?: string;
  quote?: string;
  imageAlt?: string;
  effectType?: 'reveal' | 'zoom';
  backgroundColor?: string;
}

export interface LayoutProps {
  title?: string;
}
