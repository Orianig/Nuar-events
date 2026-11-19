export type ReviewItem = {
  quote: string;
  name: string;
  detail?: string;
  avatar?: string;
};

/**
 * Reseñas públicas de Google Maps — Nuar Events (Valencia).
 * Solo se incluyen reseñas con texto (15 de 20; el resto son valoración sin comentario).
 * Avatares descargados desde perfiles públicos de Google.
 */
export const reviews: ReviewItem[] = [
  {
    name: 'Alana Pérez Molina',
    detail: 'Despedida de solteros',
    avatar: '/reviews/avatars/alana-perez-molina.jpg',
    quote:
      'Estas chicas son maravillosas, las contratamos para una despedida de solteros conjunta y se encargan de todo, hasta el último detalle, no tuvimos que hacer nada, solo disfrutar. Recomendables 100% muy simpáticas, atentas, discretas y resolutivas, un 10!',
  },
  {
    name: 'Gina Perez',
    detail: 'Despedida de solteros',
    avatar: '/reviews/avatars/gina-perez.jpg',
    quote:
      'Un 100 para ellas!! Nos organizaron nuestra despedida de solteros y no pudimos pasarlo mejor, no nos faltó ni un detalle, estuvieron súper pendientes de que no faltara nada y que no tuviésemos que hacer nosotros nada. 200% recomendables. ¡Mil gracias por todo!',
  },
  {
    name: 'Lara Benavent Climent',
    detail: 'Graduación',
    avatar: '/reviews/avatars/lara-benavent-climent.jpg',
    quote:
      'Las chicas nos organizaron una graduación y fue increíble!! Muy divertido y entretenido, aparte de precioso. Un trato excelente y además muy resolutivas ante los problemas. ¡Muy muy recomendado!',
  },
  {
    name: 'Oriana Espinoza',
    detail: 'Graduación',
    avatar: '/reviews/avatars/oriana-espinoza.jpg',
    quote:
      '¡Excelente todo! Organizaron la graduación de mi clase y todos quedamos sin palabras. Súper responsables, organización impecable y todo quedó como queríamos y mejor.',
  },
  {
    name: 'Victoria Amat Sempere',
    detail: 'Evento con Nuar',
    avatar: '/reviews/avatars/victoria-amat-sempere.jpg',
    quote:
      'Fue una experiencia increíble, repetiría una y mil veces con esta empresa. Se encargó de todo y eso me hizo poder disfrutar sin estar atenta de ningún detalle. Recomiendo 100% trabajar con ellas por la confianza y seguridad que te dan, aparte de ser un amor ambas como personas.',
  },
  {
    name: 'Valentina Boadas',
    detail: 'Graduación de máster en Valencia',
    avatar: '/reviews/avatars/valentina-boadas.jpg',
    quote:
      'Amé NUAR, fueron las encargadas de la organización de la cena y fiesta de graduación de mi máster de marketing en Valencia, y la experiencia fue genial. No solo fue súper linda la decoración, la recepción y la elección del lugar, sino que se encargaron de cada mínimo detalle y yo solo tuve que llegar a disfrutar. Sin duda, las mejores!',
  },
  {
    name: 'Marta Marin',
    detail: 'Graduación',
    avatar: '/reviews/avatars/marta-marin.jpg',
    quote:
      'El día más importante, el cual fue mi graduación, Nuar Events hicieron de la noche una de las mejores veladas. Por más noches como esta.',
  },
  {
    name: 'Miguel Salas',
    detail: 'Graduación de máster · Pelicano',
    avatar: '/reviews/avatars/miguel-salas.jpg',
    quote:
      'Paola y su hermana organizaron un evento espectacular para nuestra graduación de nuestro máster. Todo fue excelente y bien gestionado, tanto el restaurante (Pelicano) como el transporte hacia allá y de vuelta a Valencia. Las tendré en cuenta cuando quiera organizar algún evento.',
  },
  {
    name: 'Manuel G C',
    detail: 'Evento con Nuar',
    avatar: '/reviews/avatars/manuel-g-c.jpg',
    quote:
      'Paola una máquina y sus compañeras maravillosas, muy trabajadoras y profesionales. La verdad que 10/10, olé con olé.',
  },
  {
    name: 'Gabriel Molina',
    detail: 'Evento corporativo en Valencia',
    avatar: '/reviews/avatars/gabriel-molina.jpg',
    quote:
      'Recibí el encargo de organizar con muy poco tiempo de antelación un evento en Valencia con el equipo directivo de mi empresa, que es internacional y con unos requerimientos algo especiales. Contacté con Nuar y tengo que decir que Paola y Oriana se desvivieron hasta conseguir que el evento saliese perfecto. Da gusto ver a emprendedoras imaginativas, valientes, que se lo curran y entregan un servicio excelente. Enhorabuena equipo Nuar, seguid así que llegaréis lejos.',
  },
  {
    name: 'Maria Paula Umbarila Barajas',
    detail: 'Graduación',
    avatar: '/reviews/avatars/maria-paula-umbarila.jpg',
    quote:
      'Nuar Events es impecable en la organización de eventos. Nuestra graduación fue un éxito gracias a ellas. Súper recomendado.',
  },
  {
    name: 'Vanessa Ovalles',
    detail: 'Evento con Nuar',
    avatar: '/reviews/avatars/vanessa-ovalles.jpg',
    quote: 'Increíble todo lo que hacen, ¡los mejores en eventos!',
  },
  {
    name: 'Nicolás Rojas',
    detail: 'Evento con Nuar',
    avatar: '/reviews/avatars/nicolas-rojas.jpg',
    quote: 'Increíble.',
  },
  {
    name: 'Alex Tornero Rodriguez',
    detail: 'Despedida de boda',
    avatar: '/reviews/avatars/alex-tornero.jpg',
    quote:
      'Nos prepararon nuestros amigos la despedida de boda y no nos faltó de nada: ni bebida ni comida, juegos entretenidos, música y demás, y gran sitio. Un gran servicio y gran atención por parte de las 2 chicas que nos atendieron muy bien en todo momento. Gracias por todo.',
  },
  {
    name: 'Vi Chirivella',
    detail: 'Despedida',
    avatar: '/reviews/avatars/vi-chirivella.jpg',
    quote:
      'Estuvimos este sábado de despedida y confiamos en este equipo para el evento, ¡no pudo estar más perfecto! De 10. Sin duda contactaremos para próximos eventos.',
  },
];
