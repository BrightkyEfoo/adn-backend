import { Comment } from '../Sequelize.js';
const comments = [
  {
    main: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, corrupti saepe tempore blanditiis quisquam voluptatem voluptates temporibus impedit porro voluptate aliquam doloremque odit odio deleniti quas eligendi quaerat sit nesciunt.',
    name: 'john DOE',
    email: 'johndoe@example.com',
    website: 'https://adn.dmservices.dev',
  },
];

export const commentFiller = () => {
  for (let i=0; i < 10; i++) {
    Comment.create(comments[0])
      .then(comment => console.log(comment.toJSON()))
      .catch(err => console.log(err));
  }
};
