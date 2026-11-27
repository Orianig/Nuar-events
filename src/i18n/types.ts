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
    ourEvents: string;
    aboutNuar: string;
    upcomingEvents: string;
    contact: string;
    menuToggle: string;
    eventTypes: {
      corporate: string;
      weddings: string;
      birthdays: string;
      graduations: string;
      others: string;
      all: string;
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
      copyEmailLabel: string;
      copyPhoneLabel: string;
      closeLabel: string;
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
      formTitle: string;
      formIntro: string;
      formCta: string;
      formIframeTitle: string;
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
      weddings: { title: string; description: string };
      birthdays: { title: string; description: string };
      graduations: { title: string; description: string };
    };
  };
  values: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    items: {
      identity: { title: string; description: string };
      environment: { title: string; description: string };
      connection: { title: string; description: string };
    };
  };
  process: {
    kicker: string;
    ctaLabel: string;
    steps: {
      meet: { title: string; description: string };
      design: { title: string; description: string };
      coordinate: { title: string; description: string };
      enjoy: { title: string; description: string };
    };
  };
  moments: {
    kicker: string;
    title: string;
    ctaLabel: string;
    cards: {
      event: string;
      attendees: string;
      location: string;
    }[];
  };
  reviews: {
    kicker: string;
    title: string;
  };
  contactCta: {
    titleLines: string[];
    ctaLabel: string;
  };
  eventsAll: {
    kicker: string;
    title: string;
    description: string;
    filterAll: string;
    cardCta: string;
    ctaTitle: string;
    ctaDescriptionLines: string[];
    ctaLabel: string;
    emptyFilter: string;
  };
  storyPage: {
    backDefault: string;
    backHome: string;
    experience: string;
    details: string;
    eventTypeLabel: string;
    locationLabel: string;
    galleryLabel: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
  };
  typologyPage: {
    ctaPrimary: string;
    ctaSecondary: string;
    featuredKicker: string;
    featuredTitle: string;
    featuredCta: string;
    bottomCtaTitle: string;
    bottomCtaDescriptionLines: string[];
    bottomCtaLabel: string;
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
