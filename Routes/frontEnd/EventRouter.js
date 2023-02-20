import { Router } from 'express';
import { Event } from './Events/Events.js';

const eventRouter = Router();

Event(eventRouter);

export default eventRouter;
