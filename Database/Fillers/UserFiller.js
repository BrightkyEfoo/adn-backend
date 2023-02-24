import { User } from '../Sequelize.js';

const users = [
  {
    firstName: 'JIONGO',
    lastName: 'Junior',
    email: 'hello.dmservices@gmail.com',
    password: 'DMServices!@#123',
    accessLevel: 3,
  },
  {
    firstName: 'EFOO',
    lastName: 'Brightman',
    email: 'brightefoo@gmail.com',
    password: 'DMServices!@#123',
    accessLevel: 3,
  },
  {
    firstName: 'ADN',
    lastName: 'ADN',
    email: 'adn@gmail.com',
    password: 'DMServices!@#123',
    accessLevel: 2,
  },
];

export const userFill = () => {
  return users.forEach(element => {
    User.create(element)
    //   .then(user => console.log(user.toJSON()))
      .catch(err => console.log('err', err));
  });
};
