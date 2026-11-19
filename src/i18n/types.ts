/**
 * Tipos para las traducciones
 */

export type Lang = 'es' | 'en';

export interface SectionItem {
  image: string;
  title: string;
  description: string;
}

export interface AboutPillar {
  icon: string;
  title: string;
  description: string;
}

export interface AboutClosing {
  lines: string[];
  strong: string[];
}

export interface AboutStoryItem {
  type: 'text' | 'paragraph' | 'highlight';
  content: string;
}

export interface AboutStoryBlock {
  icon?: string;
  items?: AboutStoryItem[];
  extraSpacing?: boolean;
  closingItems?: AboutStoryItem[];
  lines?: string[];
  paragraph?: string;
  highlight?: string;
  linesAfter?: string[];
  closing?: string[];
}

export interface Translations {
  nav: {
    brandName: string;
    home: string;
    projects: string;
    aboutNuar: string;
    upcomingEvents: string;
    contact: string;
    menuToggle: string;
    eventTypes: {
      corporate: string;
      celebrations: string;
      weddings: string;
      experiences: string;
    };
  };
  hero: {
    slogan: string;
    titleLines: [string, string, string];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  footer: {
    contact: string;
    sloganLine1: string;
    sloganLine2: string;
    followUs: string;
    privacy: string;
  };
  pages: {
    home: { title: string };
    contact: {
      title: string;
      description: string;
      copyFeedback: string;
      sectionOne: {
        heading: string;
        subheading: string;
        body: string;
        email: string;
        phone: string;
      };
      sectionTwo: {
        heading: string;
        subheading: string;
        lines: string[];
        closing: string;
      };
    };
    projects: {
      title: string;
      heading: string;
      goHome: string;
      goContact: string;
    };
    aboutNuar: {
      title: string;
      description: string;
      whatIsNuar: {
        kicker: string;
        hero: {
          lineOne: string;
          lineTwo: string;
        };
        intro: string[];
        pillars: AboutPillar[];
        real: string;
        customEvents: {
          lineOne: string;
          lineTwo: string;
        };
        closing: AboutClosing;
      };
      originStory: {
        kicker: string;
        title: string;
        blocks: AboutStoryBlock[];
      };
    };
  };
  experiences: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    paragraphs: string[];
    ctaLabel: string;
    cards: {
      corporate: { title: string; description: string };
      celebrations: { title: string; description: string };
      weddings: { title: string; description: string };
      experiences: { title: string; description: string };
    };
  };
  sectionOne: {
    image1: string;
    image2: string;
    title: string;
    paragraph: string;
    bullets: string[];
  };
  sectionTwo: {
    sectionTitle: string;
    items: SectionItem[];
  };
  sectionThree: {
    image: string;
    centerText: string;
    quote: string;
    imageAlt: string;
  };
}
