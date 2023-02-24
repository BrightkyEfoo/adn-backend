import { Activity } from '../../Sequelize.js';

const activities = Array(8).fill({
  language: 'EN',
  image: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/activity.jpg',
  date: new Date(),
  main : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat laboriosam reprehenderit odit asperiores quasi voluptatum laborum sed, laudantium provident libero magni perferendis eligendi molestias aspernatur ratione quia officia soluta?',
  title: 'Activity',
});

export const ActivityFiller = () => {
  activities.forEach(el => {
    Activity.create({ ...el }).then(activity => {
      console.log(activity.toJSON());
    });
  });
};
