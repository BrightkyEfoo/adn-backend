import { Program } from '../../Sequelize.js';

const programs = Array(7).fill({
  language: 'EN',
  image: 'https://adn-backend-mj63t.ondigitalocean.app//public/homePage/FR/image.png',
  date: new Date(),
  title: 'Pre-incubation program for the African descent community in ottawa',
  main: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro dolorum iste consequatur atque doloremque quidem! Vero magni repellat omnis molestias unde dolorem adipisci sapiente minima est, eos quidem delectus.',
  button: "LET'S TRY",
});

export const ProgramsFiller = () => {
  programs.forEach(el => {
    Program.create({ ...el }).then(program => console.log(program.toJSON()));
  });
};
