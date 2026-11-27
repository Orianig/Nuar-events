import type { EventTypeSlug } from '../lib/eventTypes';
import type { LocalizedString } from './stories';

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
  coverImage: string;
  bleedColor: string;
  dossier: string;
};

const loc = (es: string, en = es): LocalizedString => ({ es, en });

export const typologies: Typology[] = [
  {
    id: 'corporativos',
    typology: loc('Eventos corporativos', 'Corporate events'),
    littleTitleHero: loc('Experiencias que conectan', 'Experiences that connect'),
    titleHero: loc('EVENTOS\nCORPORATIVOS', 'CORPORATE\nEVENTS'),
    descriptionHero: loc(
      'Hay equipos que necesitan algo más que una reunión. Creamos eventos corporativos que fortalecen relaciones, celebran logros y hacen que las personas conecten más allá del trabajo.',
      'Some teams need more than a meeting. We create corporate events that strengthen relationships, celebrate achievements and help people connect beyond work.',
    ),
    title: loc('Cada equipo tiene su propia historia.', 'Every team has its own story.'),
    description: loc(
      'Diseñamos eventos que responden a la identidad de cada empresa, desde pequeños encuentros de equipo hasta grandes celebraciones. Nos ocupamos de la organización, los proveedores y los detalles para que todo tenga sentido y vosotros podáis centraros en lo importante: disfrutar, compartir y conectar.',
    ),
    items: [
      {
        logo: '/icons/people.png',
        title: loc('Team building'),
        description: loc(
          'Actividades que sacan al equipo de la rutina, fomentan la conexión y crean recuerdos compartidos.',
        ),
      },
      {
        logo: '/icons/leaf.png',
        title: loc('Comidas y cenas de empresa'),
        description: loc(
          'Encuentros para celebrar objetivos, brindar por los logros y disfrutar del equipo sin mirar el reloj.',
        ),
      },
      {
        logo: '/icons/stars.png',
        title: loc('Celebraciones y aniversarios'),
        description: loc(
          'Momentos especiales que refuerzan la cultura de empresa y ponen en valor todo lo conseguido juntos.',
        ),
      },
      {
        logo: '/icons/idea.png',
        title: loc('Jornadas y encuentros'),
        description: loc(
          'Espacios para inspirar, compartir ideas y planificar el futuro, con una organización que deja sitio para que surjan las mejores conversaciones.',
        ),
      },
      {
        logo: '/icons/heart.png',
        title: loc('Experiencias para conectar'),
        description: loc(
          'Talleres creativos, dinámicas participativas y actividades diferentes para conocerse desde otra perspectiva.',
        ),
      },
    ],
    coverImage: '/general/tipolgyEvents/corporateEvent/hero1.png',
    bleedColor: '#241810',
    dossier: '/documents/NuarEvents2026-Empresas.pdf',
  },
  {
    id: 'bodas',
    typology: loc('Bodas', 'Weddings'),
    littleTitleHero: loc('El día que lo cambia todo', 'The day that changes everything'),
    titleHero: loc('BODAS', 'WEDDINGS'),
    descriptionHero: loc(
      'Cada pareja tiene su historia y cada boda debería contarla a su manera. Os acompañamos para crear una celebración que hable de vosotros, con esos pequeños detalles que hacen que todo encaje y que vuestros invitados se sientan parte de algo especial.',
    ),
    title: loc('Vuestra historia, a vuestra manera.', 'Your story, your way.'),
    description: loc(
      'No creemos en las bodas hechas en serie. Creemos en las que tienen sentido para quienes las viven. Nos encargamos de dar forma a vuestras ideas, encontrar los espacios y proveedores adecuados y cuidar cada detalle para que disfrutéis del proceso y, sobre todo, de vuestro día.',
    ),
    items: [
      {
        logo: '/icons/heart.png',
        title: loc('Una celebración con vuestra esencia'),
        description: loc(
          'Escuchamos vuestras ideas y las convertimos en una propuesta que refleje quiénes sois.',
        ),
      },
      {
        logo: '/icons/leaf.png',
        title: loc('Espacios con sentido'),
        description: loc(
          'Buscamos el lugar que encaje con vuestra historia: jardín, masía, playa o el rincón que os haga decir «es aquí».',
        ),
      },
      {
        logo: '/icons/stars.png',
        title: loc('Detalles que se notan'),
        description: loc(
          'Ambientación, ritmo del día y proveedores alineados para que todo fluya sin que tengáis que estar encima.',
        ),
      },
      {
        logo: '/icons/people.png',
        title: loc('Invitados que se sienten parte'),
        description: loc(
          'Cuidamos la experiencia de quienes os acompañan para que también vivan un día memorable.',
        ),
      },
    ],
    coverImage: '/general/tipolgyEvents/wedding/hero1.jpg',
    bleedColor: '#2a241c',
    dossier: '',
  },
  {
    id: 'cumpleanos',
    typology: loc('Cumpleaños', 'Birthdays'),
    littleTitleHero: loc('Celebrar a tu manera', 'Celebrate your way'),
    titleHero: loc('CUMPLEAÑOS', 'BIRTHDAYS'),
    descriptionHero: loc(
      'Hay cumpleaños que se celebran por cumplir años y otros que se celebran porque sí. Nosotros preferimos los segundos. Diseñamos celebraciones con personalidad, para que ese día se sienta especial de verdad.',
    ),
    title: loc('Porque todo se celebra mejor en buena compañía.', 'Because everything is better celebrated together.'),
    description: loc(
      'Ya sea una celebración íntima, de fiesta por todo lo alto o de un plan diferente que nadie se espere. En NUAR damos forma a tus ideas y nos ocupamos de los detalles para que tu cumpleaños tenga tu personalidad de principio a fin.',
    ),
    items: [
      {
        logo: '/icons/stars.png',
        title: loc('Celebraciones a tu medida'),
        description: loc(
          'Diseñamos un plan que encaje contigo, con tu gente y con las ganas que tengas de celebrar. Aquí no hay cumpleaños de catálogo.',
        ),
      },
      {
        logo: '/icons/leaf.png',
        title: loc('Lugares con encanto'),
        description: loc(
          'Buscamos ese espacio que te haga decir «es aquí», desde una casa rural hasta una terraza, una masía o un rincón especial.',
        ),
      },
      {
        logo: '/icons/idea.png',
        title: loc('Una fiesta con personalidad'),
        description: loc(
          'Decoración, música, rincones especiales y detalles que convierten cualquier espacio en el escenario perfecto para celebrar.',
        ),
      },
      {
        logo: '/icons/people.png',
        title: loc('Planes para disfrutar juntos'),
        description: loc(
          'Brunch, picoteo, cena, cóctel o lo que os apetezca. Diseñamos una experiencia en la que lo importante sea disfrutar de la compañía.',
        ),
      },
      {
        logo: '/icons/heart.png',
        title: loc('Detalles que sorprenden'),
        description: loc(
          'Regalos personalizados, pequeños guiños y sorpresas que hacen que el protagonista se sienta todavía más especial.',
        ),
      },
    ],
    coverImage: '/general/tipolgyEvents/birthday/hero1.png',
    bleedColor: '#2c2618',
    dossier: '',
  },
  {
    id: 'graduaciones',
    typology: loc('Graduaciones', 'Graduations'),
    littleTitleHero: loc('El fin de una etapa', 'The end of a chapter'),
    titleHero: loc('GRADUACIONES', 'GRADUATIONS'),
    descriptionHero: loc(
      'Después de tanto esfuerzo, toca celebrar lo conseguido. Diseñamos graduaciones únicas para compartir con compañeros, amigos y familia, cuidando cada detalle para que el final de una etapa sea el comienzo de un recuerdo inolvidable.',
    ),
    title: loc(
      'El fin de una etapa que merece celebrarse por todo lo alto.',
      'The end of a chapter that deserves a proper celebration.',
    ),
    description: loc(
      'Sabemos todo lo que hay detrás de llegar hasta aquí. Por eso, queremos que ese día esté a la altura. Nos encargamos de dar forma a una celebración que os represente, desde los primeros preparativos hasta el último brindis.',
    ),
    items: [
      {
        logo: '/icons/people.png',
        title: loc('Celebraciones a medida'),
        description: loc(
          'Desde una celebración íntima hasta una gran fiesta de promoción. Adaptamos cada propuesta a vuestro grupo, vuestras ideas y vuestro presupuesto.',
        ),
      },
      {
        logo: '/icons/leaf.png',
        title: loc('Espacios con personalidad'),
        description: loc(
          'Buscamos el lugar perfecto para reuniros, brindar y celebrar todo lo que habéis conseguido juntos.',
        ),
      },
      {
        logo: '/icons/stars.png',
        title: loc('Una fiesta con vuestro rollo'),
        description: loc('Música, decoración, photocall y detalles que hablen de vosotros.'),
      },
      {
        logo: '/icons/idea.png',
        title: loc('Recuerdos para siempre'),
        description: loc(
          'Creamos rincones y momentos especiales para que las fotos de ese día no se queden solo en la galería del móvil.',
        ),
      },
    ],
    coverImage: '/general/tipolgyEvents/graduation/hero1.png',
    bleedColor: '#1f2418',
    dossier: '',
  },
  {
    id: 'otros',
    typology: loc('Otros eventos', 'Other events'),
    littleTitleHero: loc('Ideas con identidad', 'Ideas with identity'),
    titleHero: loc('OTROS\nEVENTOS', 'OTHER\nEVENTS'),
    descriptionHero: loc(
      'Bautizos, despedidas, reuniones familiares, inauguraciones o ese evento que todavía no sabes muy bien cómo explicar. Cuéntanos qué tienes en mente y construiremos una propuesta a tu medida.',
    ),
    title: loc('¿Tienes una idea? Vamos a darle forma.', 'Got an idea? Let’s shape it.'),
    description: loc(
      'No todos los eventos caben en una categoría, y eso es precisamente lo divertido. Si tienes algo que celebrar, una idea rondándote la cabeza o ganas de organizar un encuentro diferente, estamos aquí para ayudarte a convertirlo en un plan de verdad.',
    ),
    items: [
      {
        logo: '/icons/people.png',
        title: loc('Celebraciones familiares'),
        description: loc(
          'Bautizos, reuniones y días especiales para juntar a los tuyos y disfrutar de estar todos en el mismo sitio.',
        ),
      },
      {
        logo: '/icons/heart.png',
        title: loc('Despedidas de soltería y soltero'),
        description: loc(
          'Planes pensados para celebrar a lo grande, compartir risas y crear recuerdos antes de una nueva aventura.',
        ),
      },
      {
        logo: '/icons/stars.png',
        title: loc('Inauguraciones y eventos de marca'),
        description: loc(
          'Damos forma a encuentros para presentar proyectos, abrir nuevas etapas y compartir lo que hace especial a tu marca.',
        ),
      },
      {
        logo: '/icons/idea.png',
        title: loc('Eventos personalizados'),
        description: loc(
          '¿Tienes una idea poco convencional? Nos encantan los retos. Diseñamos propuestas desde cero para que el resultado encaje contigo.',
        ),
      },
    ],
    coverImage: '/general/tipolgyEvents/otherEvent/hero1.png',
    bleedColor: '#241810',
    dossier: '',
  },
];

export function getTypology(id: EventTypeSlug): Typology | undefined {
  return typologies.find((t) => t.id === id);
}

export function typologyTitleLines(titleHero: LocalizedString, lang: 'es' | 'en'): string[] {
  return titleHero[lang].split('\n').map((l) => l.trim()).filter(Boolean);
}
