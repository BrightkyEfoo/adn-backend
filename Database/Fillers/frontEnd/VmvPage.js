import { View } from "../../Sequelize.js";

const VmvPages = [
  {
    language: 'EN',
    name: 'vmvpage',
    content: {
      head: {
        title: 'Vision, Missions, Values',
        image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
      },
      image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background3.webp',
      sections: [
        {
          title: {
            value: 'Our Mission',
            color: 'rgb(38, 69, 38)',
          },
          main: {
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque volutpat massa ut convallis. Phasellus sed luctus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vehicula ipsum at interdum posuere. Duis vel mi scelerisque, scelerisque metus ac, pulvinar tortor. Ut euismod justo vel augue pretium, et lacinia magna condimentum. Nunc fringilla, est a fringilla pulvinar, sapien dui blandit tortor, quis luctus neque mauris quis turpis. Proin sed hendrerit turpis. Sed malesuada sapien sit amet diam lacinia suscipit. Morbi eget ex sapien. Maecenas ac vulputate elit. Integer sodales mollis lacinia. Cras feugiat nunc eu aliquet cursus. Morbi sed tempor dolor. Nunc pretium molestie mi, sed posuere nisi aliquet id.',
            color: 'rgb(38, 69, 38)',
          },
          image: {
            url: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
            position: 'left',
          },
          backgroundColor: 'white',
        },

        {
          title: {
            value: 'Our Vision',
            color: 'white',
          },
          main: {
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque volutpat massa ut convallis. Phasellus sed luctus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vehicula ipsum at interdum posuere. Duis vel mi scelerisque, scelerisque metus ac, pulvinar tortor. Ut euismod justo vel augue pretium, et lacinia magna condimentum. Nunc fringilla, est a fringilla pulvinar, sapien dui blandit tortor, quis luctus neque mauris quis turpis. Proin sed hendrerit turpis. Sed malesuada sapien sit amet diam lacinia suscipit. Morbi eget ex sapien. Maecenas ac vulputate elit. Integer sodales mollis lacinia. Cras feugiat nunc eu aliquet cursus. Morbi sed tempor dolor. Nunc pretium molestie mi, sed posuere nisi aliquet id.',
            color: 'white',
          },
          image: {
            url: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
            position: 'left',
          },
          backgroundColor: 'rgb(38, 69, 38)',
        },

        {
          title: {
            value: 'Our Values',
            color: 'rgb(38, 69, 38)',
          },
          main: {
            value:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque volutpat massa ut convallis. Phasellus sed luctus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vehicula ipsum at interdum posuere. Duis vel mi scelerisque, scelerisque metus ac, pulvinar tortor. Ut euismod justo vel augue pretium, et lacinia magna condimentum. Nunc fringilla, est a fringilla pulvinar, sapien dui blandit tortor, quis luctus neque mauris quis turpis. Proin sed hendrerit turpis. Sed malesuada sapien sit amet diam lacinia suscipit. Morbi eget ex sapien. Maecenas ac vulputate elit. Integer sodales mollis lacinia. Cras feugiat nunc eu aliquet cursus. Morbi sed tempor dolor. Nunc pretium molestie mi, sed posuere nisi aliquet id.',
            color: 'rgb(38, 69, 38)',
          },
          image: {
            url: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
            position: 'left',
          },
          backgroundColor: 'rgb(203, 208, 203)',
        },

        {
            title: {
              value: 'Our Funding',
              color: 'rgb(38, 69, 38)',
            },
            main: {
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque volutpat massa ut convallis. Phasellus sed luctus ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vehicula ipsum at interdum posuere. Duis vel mi scelerisque, scelerisque metus ac, pulvinar tortor. Ut euismod justo vel augue pretium, et lacinia magna condimentum. Nunc fringilla, est a fringilla pulvinar, sapien dui blandit tortor, quis luctus neque mauris quis turpis. Proin sed hendrerit turpis. Sed malesuada sapien sit amet diam lacinia suscipit. Morbi eget ex sapien. Maecenas ac vulputate elit. Integer sodales mollis lacinia. Cras feugiat nunc eu aliquet cursus. Morbi sed tempor dolor. Nunc pretium molestie mi, sed posuere nisi aliquet id.',
              color: 'rgb(38, 69, 38)',
            },
            image: {
              url: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/background.jpg',
              position: 'right',
            },
            backgroundColor: 'white',
          },
      ],
    },
  },
];


export const VmvPageFiller = ()=>{
    VmvPages.forEach((el , i)=>{
        View.create(el).then(vmvPage => {
            console.log('vmvPage', i);
        })
    })
}
