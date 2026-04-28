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
  };
  hero: {
    slogan: string;
  };
  footer: {
    contact: string;
  };
  pages: {
    home: { title: string };
    contact: {
      title: string;
      heading: string;
      goHome: string;
      goProjects: string;
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
