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
  };
  sectionOne: {
    sectionTitle: string;
    items: SectionItem[];
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
