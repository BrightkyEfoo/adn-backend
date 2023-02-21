import { Router } from 'express';
import { HomePage } from './Pages/HomePage.js';
import { EventPage } from './Pages/EventPage.js';
import { AboutPage } from './Pages/AboutPage.js';
import { SingleEventPage } from './Pages/SingleEventPage.js';

const pageRouter = Router();

HomePage(pageRouter);
EventPage(pageRouter);
SingleEventPage(pageRouter)
AboutPage(pageRouter)

// Even
export default pageRouter;
