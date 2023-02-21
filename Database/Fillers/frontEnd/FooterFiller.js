import { Footer } from '../../Sequelize.js';

const footers = [
  {
    language: 'EN',
    bottom: {
      left: 'African developement network 2022',
      right: {
        instagram: 'http://instagram.com',
        twitter: 'http://twiter.com',
        facebook: 'http://facebook.com',
      },
    },
    left: {
      head: 'Subscribe to African Development Network',
      main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum laboriosam blanditiis voluptates ut sequi, non nihil, eligendi fuga similique nesciunt, exercitationem accusamus placeat. Animi optio sint deleniti fuga doloremque?',
      placeholder: 'Email address',
      button: 'SUBSCRIBE',
    },
    right: {
      links1: [
        {
          text: '+44 345 678 903',
          url: 'http://localost:3000',
        },
        {
          text: 'ADN@GMAIL.COM',
          url: 'http://localost:3000',
        },
        {
          text: 'FIND A STORE',
          url: 'http://localost:3000',
        },
      ],
      links2: [
        {
          text: 'CONTACT US',
          url: 'http://localost:3000',
        },
        {
          text: 'ORDERING & PAYMENT',
          url: 'http://localost:3000',
        },
        {
          text: 'SHIPPING',
          url: 'http://localost:3000',
        },
        {
          text: 'RETURNS',
          url: 'http://localost:3000',
        },
        {
          text: 'FAQ',
          url: 'http://localost:3000',
        },
        {
          text: 'SIZING GUIDE',
          url: 'http://localost:3000',
        },
      ],
      links3: [
        {
          text: 'ABOUT',
          url: 'http://localost:3000',
        },
        {
          text: 'WORK WITH US',
          url: 'http://localost:3000',
        },
        {
          text: 'PRIVACY POLICY',
          url: 'http://localost:3000',
        },
        {
          text: 'TERMS & CONDITIONS',
          url: 'http://localost:3000',
        },
        {
          text: 'PRESS ENQUIRIES',
          url: 'http://localost:3000',
        },
      ],
    },
  },
];

export const FooterFiller = () => {
  footers.forEach(el => {
    Footer.create({ ...el }).then(footer => console.log(footer.toJSON()));
  });
};
