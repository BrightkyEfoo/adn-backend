import { Doctor } from '../Sequelize.js';

const doctors = new Array(6).fill({
  firstName: 'Andre Gallo',
  lastName: 'AZAMBOU',
  profilePic: 'https://adn-backend-mj63t.ondigitalocean.app/public/images/profile.jpg',
  position: 'ADM Promoter and Chairman of the Board of Directors',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a sapien eget quam fringilla dapibus. Proin fringilla, lacus nec facilisis posuere, sapien metus tincidunt lacus, eu interdum nibh enim nec odio. Aenean bibendum aliquam nibh, at consequat turpis mattis et. Pellentesque habitant morbi tristique sen',
});

export const DoctorsFiller = () => {
  doctors.forEach((el,i )=> {
    Doctor.create(el)
      .then(doctor => {
        console.log('doctor',i);
      })
      .catch(err => {
        console.log('err', err);
      });
  });
};
