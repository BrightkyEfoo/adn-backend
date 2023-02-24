import { Event } from '../../Sequelize.js';
const date = new Date();
const Events = [
  {
    language: 'EN',
    begin: new Date(2023,2,20),
    end: new Date(2023,2,21),
    name : 'CENTER OF EXCELENCE IN YOUTH ENTREPENEURSHIP IN CANADA',
    video: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/video.mp4',
    image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/event1.png',
    email: 'johnDoe@example.com',
    //sur location, les $br$ vont permettre de sectionner le texte
    location: '303 Kendall Avenue, $br$ K1L 7S7; OTTAWA, Ontario, Canada',
    link: 'https://adn-backend-mj63t.ondigitalocean.app',
    phone: '+1(343)777-6862',
    main : "Centre d'excellence en entrepreneuriat pour les jeunes au canada. Vous etes jeune et vous avez un projet ?",
    category : 'Formation au leadership',
    document: {
      logo: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
      heads1: [
        "CENTRE D'EXCELLENCE EN",
        'ENTREPRENEURIAT',
        'POUR LES JEUNES AU CANADA',
      ],
      heads2: [
        'VOUS ETES JEUNE ET VOUS AVEZ UN PROJET ?',
        'APPEL A CNDIDATURE POUR CONCOURS ENTREPRENARIAUX',
      ],
      left: {
        section1: {
          head: 'ENTRPRENEUR(ES)',
          main: [
            '- EN DEMARRAGE;',
            '- EN BESOIN DE CROISSANCE;',
            '- ENTREPRENEURS INNOVANTS;',
            "- PORTEURS D'IDEES DE PROJETS;",
          ],
        },
        section2: {
          heads: 'CE CONCOURS EST LE VOTRE',
          main: {
            head: 'DATE LIMITE DE SOUMISSION DE CANDIDATURE',
            date: 'LE 10 MARS 2023',
            location:
              '303 Kendall Avenue, $br$ K1L 7S7; OTTAWA, Ontario, Canada',
          },
        },
        section3: {
          head: 'CONTACTEZ-NOUS',
          email: 'johnDoe@example.com',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
          phone: '+1(343)777-6862',
        },
      },
    },
  },
  {
    language: 'FR',
    begin: new Date(2022,11,23,17),
    end: new Date(2022,11,23,19,30),
    image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/event2.jpeg',
    video: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/video.mp4',
    email: 'johnDoe@example.com',
    name:'PRACTICAL WORKSHOP training for entrepreneurs',
    //sur location, les $br$ vont permettre de sectionner le texte
    location: 'College the city, room E1150,$br$Andre-lortie amphitheater (pavillon)',
    desc:'How to benefit',
    // organizer : ''
    main :'How to benefit dgital marketing in the social media erea. Focudia in collaboration with ADN and la cite,is organizing a practical training workshop for entrepreneurs',
    category : 'Formation au leadership',
    link: 'https://adn-backend-mj63t.ondigitalocean.app',
    phone: '+1(343)777-6862',
    document: {
      logo: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
      heads1: [
        "CENTRE D'EXCELLENCE EN",
        'ENTREPRENEURIAT',
        'POUR LES JEUNES AU CANADA',
      ],
      heads2: [
        'VOUS ETES JEUNE ET VOUS AVEZ UN PROJET ?',
        'APPEL A CNDIDATURE POUR CONCOURS ENTREPRENARIAUX',
      ],
      left: {
        section1: {
          head: 'ENTRPRENEUR(ES)',
          main: [
            '- EN DEMARRAGE;',
            '- EN BESOIN DE CROISSANCE;',
            '- ENTREPRENEURS INNOVANTS;',
            "- PORTEURS D'IDEES DE PROJETS;",
          ],
        },
        section2: {
          heads: 'CE CONCOURS EST LE VOTRE',
          main: {
            head: 'DATE LIMITE DE SOUMISSION DE CANDIDATURE',
            date: 'LE 10 MARS 2023',
            location:
              '303 Kendall Avenue, $br$ K1L 7S7; OTTAWA, Ontario, Canada',
          },
        },
        section3: {
          head: 'CONTACTEZ-NOUS',
          email: 'johnDoe@example.com',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
          phone: '+1(343)777-6862',
        },
      },
    },
  },
  {
    language: 'FR',
    begin: new Date('2023-02-20T07:00:00.000Z'),
    end: new Date('2023-02-26T08:00:00.000Z'),
    image : 'https://adn-backend-mj63t.ondigitalocean.app/public/images/event2.jpeg',
    video: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/video.mp4',
    email: 'johnDoe@example.com',
    //sur location, les $br$ vont permettre de sectionner le texte
    location: '303 Kendall Avenue, $br$ K1L 7S7; OTTAWA, Ontario, Canada',
    link: 'https://adn-backend-mj63t.ondigitalocean.app',
    category : 'Formation au leadership',
    phone: '+1(343)777-6862',
    document: {
      logo: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
      heads1: [
        "CENTRE D'EXCELLENCE EN",
        'ENTREPRENEURIAT',
        'POUR LES JEUNES AU CANADA',
      ],
      heads2: [
        'VOUS ETES JEUNE ET VOUS AVEZ UN PROJET ?',
        'APPEL A CNDIDATURE POUR CONCOURS ENTREPRENARIAUX',
      ],
      left: {
        section1: {
          head: 'ENTRPRENEUR(ES)',
          main: [
            '- EN DEMARRAGE;',
            '- EN BESOIN DE CROISSANCE;',
            '- ENTREPRENEURS INNOVANTS;',
            "- PORTEURS D'IDEES DE PROJETS;",
          ],
        },
        section2: {
          heads: 'CE CONCOURS EST LE VOTRE',
          main: {
            head: 'DATE LIMITE DE SOUMISSION DE CANDIDATURE',
            date: 'LE 10 MARS 2023',
            location:
              '303 Kendall Avenue, $br$ K1L 7S7; OTTAWA, Ontario, Canada',
          },
        },
        section3: {
          head: 'CONTACTEZ-NOUS',
          email: 'johnDoe@example.com',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
          phone: '+1(343)777-6862',
        },
      },
    },
  },
];
const EventFiller = () => {
  Events.forEach(element => {
    Event.create({ ...element }).then(page => console.log(page.toJSON()));
  });
  // Events.forEach(element => {
  //   Event.create({ ...element }).then(page => console.log(page.toJSON()));
  // });
};

export default EventFiller;
