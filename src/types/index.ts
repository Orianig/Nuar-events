import type { Lang } from '../i18n/types';

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

export interface MomentCardItem {
  event: string;
  attendees: string;
  location: string;
  image?: string;
  href?: string;
}

export interface MomentsSectionProps {
  kicker: string;
  title: string;
  ctaLabel?: string;
  hrefEvents?: string;
  items: MomentCardItem[];
}

export interface ReviewCardItem {
  quote: string;
  name: string;
  detail?: string;
  avatar?: string;
  rating?: number;
}

export interface ReviewsSectionProps {
  kicker: string;
  title: string;
  items: ReviewCardItem[];
}

export interface ContactSectionProps {
  titleLines: string[];
  descriptionLines?: string[];
  ctaLabel: string;
  hrefContact: string;
  backgroundImage?: string;
}

export interface FooterProps {
  brandName?: string;
  sloganLine1?: string;
  sloganLine2?: string;
  followUs?: string;
  privacy?: string;
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
  imageAlt?: string;
  height?: string;
}

export interface IntroAnimationProps {
  logoSrc?: string;
  backgroundColor?: string;
}

export interface SectionThreeProps {
  backgroundColor?: string;
}

export interface LayoutProps {
  title?: string;
  description?: string;
  lang?: Lang;
  currentPath?: string;
  noindex?: boolean;
  /** Relative or absolute image used for Open Graph / Twitter */
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export interface PageProps {
  lang: Lang;
  currentPath: string;
  base: string;
}
