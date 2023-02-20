import { EventPage } from "../../Sequelize.js";

const eventPages = [
  {
    language: 'EN',
    head: {
      image: 'https://adn-api-ugp3.onrender.com/public/images/background.jpg',
      title: 'Our Events',
    },
    section1: {
      title: 'Check out our calendar',
    },
    section2: {
      title: 'Our Events',
    },
    section3: {
      title: 'Our Past Programs',
    },
    section4: {
      left: {
        main: 'Subscribe to our newsletter today!',
        placeholder: 'Email Address',
        button: 'SUBSCRIBE',
      },
      right: {
        image: 'https://adn-api-ugp3.onrender.com/public/images/post.jpeg',
        title: 'Check out our latest news post.',
        main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum nihil accusamus quasi voluptatem ipsa tempore? Ab laborum laudantium nulla mollitia fuga explicabo omnis quos doloribus? Veniam eaque similique ducimus.',
        button: 'MORE',
      },
    },
  },
];


export const eventPageFiller = ()=>{
    eventPages.forEach(a => {
        EventPage.create({...a}).then(eventpage => console.log(eventpage.toJSON()))
    })
}
