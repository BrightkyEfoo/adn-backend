import { Router } from 'express';
import { Event } from './Events/Events.js';
import { Activity } from './Activity/Activity.js';

const activityRouter = Router();

Activity(activityRouter);

export default activityRouter;
