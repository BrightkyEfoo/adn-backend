import { Navbar } from '../../Sequelize.js';

const navBars = [
  {
    language: 'EN',
    section1: ['LOGIN', 'EN|FR'],
    section2: {
      email: 'ADN@GMAIL.COM',
      youtube: 'http://youtube.com',
      twitter: 'http://twitter.com',
      facebook: 'http://facebook.com',
    },
    logo: 'https://adn-backend-mj63t.ondigitalocean.app//public/homePage/FR/logo.png',
    links: [
      {
        title: 'Home',
        url: '/',
      },
      {
        title: 'About',
        url: '/about',
      },
      {
        title: 'Events',
        url: '/events',
      },
      {
        title: 'Activities',
        url: '/activities',
      },
      {
        title: 'Partners',
        url: '/partners',
      },
      {
        title: 'Opportunities',
        url: '/opportunities',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
    ],
    button: {
      title: 'BLACK EXCELLENCE CENTER',
      url: 'https://adn.dmservices.dev',
    },
  },
];

export const NavBarFiller = () => {
  navBars.forEach(el => {
    Navbar.create({ ...el }).then(navBar => {
      console.log(navBar.toJSON());
    });
  });
};
