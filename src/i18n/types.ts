/**
 * Tipos para las traducciones
 */

export type Lang = 'es' | 'en';

export interface SectionItem {
  image: string;
  title: string;
  description: string;
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
      sectionOne: {
        kicker: string;
        lead: string;
        paragraphs: string[];
        connection: string;
        intention: string;
        experiences: string;
        closing: string;
      };
      sectionTwo: {
        kicker: string;
        paragraphs: string[];
        closing: string;
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
