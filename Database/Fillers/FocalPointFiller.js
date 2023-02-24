import { FocalPoint } from '../Sequelize.js';

const focalPoint1 = {
  image: 'https://adn-backend-mj63t.ondigitalocean.app//public/images/focalpoint1.jpg',
  firstName: 'TANGUY',
  lastName: 'Blaise Pascal',
  country : 'Focal Point of Douala'
};

export const focalPointFiller = () => {
  for (let i = 0; i < 14; i++) {
    FocalPoint.create({ ...focalPoint1 }).then(focalPoint => {
      console.log('focalPoint', focalPoint.toJSON());
    });
  }
};
