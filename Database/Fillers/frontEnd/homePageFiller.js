import { HomePage } from '../../Sequelize.js';

const homePages = [
  {
    language: 'EN',
    section1: {
      image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
      main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttons: [`LET'S TRY`, `MORE`],
    },
    section2: {
      main: 'Our Partners',
      partners: [
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner1.jpeg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner2.jpeg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner3.jpg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner4.jpeg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner1.jpeg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/partner2.jpeg',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
      ],
    },
    section3: {
      title: 'Our Events',
      head1: 'Our Next Event',
      head2: 'Our Last Event',
    },
    section4: {
      left: {
        main: 'Subscribe to our newsletter today!',
        placeholder: 'Email Address',
        button: 'SUBSCRIBE',
      },
      right: {
        image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/post.jpeg',
        title: 'Check out our latest news post.',
        main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum nihil accusamus quasi voluptatem ipsa tempore? Ab laborum laudantium nulla mollitia fuga explicabo omnis quos doloribus? Veniam eaque similique ducimus.',
        button: 'MORE',
      },
    },
    section5: {
      title: 'Our Activities',
    },
    section6: {
      title: 'Our Programs',
    },
    section7: {
      title: 'Our Team',
      teams: [
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/team.jpg',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],
    },
  },
  {
    language: 'FR',
    section1: {
      image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
      main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      buttons: [`ESSAYONS`, `PLUS`],
    },
    section2: {
      main: 'Nos partenaires',
      partners: [
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          link: 'https://adn-backend-mj63t.ondigitalocean.app',
        },
      ],
    },
    section3: {
      title: 'Nos évenements',
      head1: 'Notre Prochain Evenement',
      head2: 'Notre Dernier Evenement',
    },
    section4: {
      left: {
        main: `Souscrivez à nos newsletters dès aujourd'hui!`,
        placeholder: 'Email Address',
        button: 'SUBSCRIBE',
      },
      right: {
        image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
        title: `Découvrez notre dernier article d'actualité.`,
        main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum nihil accusamus quasi voluptatem ipsa tempore? Ab laborum laudantium nulla mollitia fuga explicabo omnis quos doloribus? Veniam eaque similique ducimus.',
        button: 'PLUS',
      },
    },
    section5: {
      title: 'Nos activités',
    },
    section6: {
      title: 'Nos Programmes',
    },
    section7: {
      title: 'Notre Equipe',
      teams: [
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'https://adn-backend-mj63t.ondigitalocean.app/public/homePage/FR/image.png',
          displayName: 'Name Surname',
          grade: 'Co-founder & CTO',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],
    },
  },
];
const homePageFiller = () => {
  return homePages.forEach(element => {
    HomePage.create({ ...element }).then(page => console.log(page.toJSON()));
  });
};

export default homePageFiller;
