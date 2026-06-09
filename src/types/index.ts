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
  aboutNuar?: string;
  upcomingEvents?: string;
  contact?: string;
  menuToggle?: string;
  currentLang?: Lang;

  currentPath?: string;
  base?: string;
}

export interface FooterProps {
  contactText?: string;
  currentLang?: Lang;
  base?: string;
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
  description?: string;
  lang?: Lang;
  currentPath?: string;
  noindex?: boolean;
}

export interface PageProps {
  lang: Lang;
  currentPath: string;
  base: string;
}
