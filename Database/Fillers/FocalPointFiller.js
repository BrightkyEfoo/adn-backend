import { FocalPoint } from '../Sequelize.js';

const focalPoint1 = {
  image: 'http://localhost:9001/public/images/focalpoint1.jpg',
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
