import express from 'express';
import { dbInit } from './Database/Sequelize.js';
import pageRouter from './Routes/frontEnd/PageRouter.js';
import eventRouter from './Routes/frontEnd/EventRouter.js';
import footerRouter from './Routes/frontEnd/FooterRouter.js';
import cors from 'cors'
import navBarRouter from './Routes/frontEnd/NavbarRouter.js';
import activityRouter from './Routes/frontEnd/ActivityRouter.js';
import programRouter from './Routes/frontEnd/ProgramRouter.js';
import { focalPointRouter } from './Routes/frontEnd/FocalPoints/index.js';
const app = express();
const port = process.env.PORT || 9001;

app.use(cors({
  origin: '*'
}));

app.use(express.json()).use('/public',express.static('./public'))
dbInit()
console.log(pageRouter)

app.get('/', (req, res) => {
  res.send('hello, welcome to adn backend by DMServices');
});

app.use('/page', pageRouter)
app.use('/event', eventRouter)
app.use('/footer', footerRouter)
app.use('/navbar', navBarRouter)
app.use('/activity', activityRouter)
app.use('/programs', programRouter)
app.use('/focalpoints',focalPointRouter)

app.listen(port, ()=>console.log(`our server is running on port ${port}`));
