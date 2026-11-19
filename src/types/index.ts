import type { Lang } from '../i18n/types';

export interface SectionItem {
  image: string;
  title: string;
  description: string;
}

export interface NavEventType {
  label: string;
  href: string;
}

export interface NavbarProps {
  brandName?: string;
  home?: string;
  projects?: string;
  aboutNuar?: string;
  upcomingEvents?: string;
  contact?: string;
  menuToggle?: string;
  eventTypes?: NavEventType[];
  currentLang?: Lang;
  currentPath?: string;
  base?: string;
}

export interface ExperienceCardItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ExperiencesSectionProps {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  paragraphs: string[];
  ctaLabel: string;
  hrefAbout: string;
  items: ExperienceCardItem[];
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface ValuesSectionProps {
  kicker: string;
  titleLine1: string;
  titleLine2: string;
  items: ValueItem[];
}

export interface ProcessStepItem {
  title: string;
  description: string;
}

export interface ProcessSectionProps {
  kicker: string;
  items: ProcessStepItem[];
  ctaLabel?: string;
  hrefContact?: string;
}

export interface FooterProps {
  brandName?: string;
  sloganLine1?: string;
  sloganLine2?: string;
  followUs?: string;
  privacy?: string;
  contactText?: string;
  currentLang?: Lang;
  base?: string;
}

export interface LangSwitcherProps {
  currentLang: Lang;
  currentPath: string;
}

export interface HeroProps {
  titleLines?: string[];
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  hrefPrimary?: string;
  hrefSecondary?: string;
  backgroundImage?: string;
  /** @deprecated use backgroundImage */
  slogan?: string;
  backgroundVideo?: string;
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
