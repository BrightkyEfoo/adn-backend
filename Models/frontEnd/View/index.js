import { Router } from 'express';
import { getOnePage, getPage } from './helpers.js';

export const ViewRouter = Router();



ViewRouter.route('/').get(getPage);

ViewRouter.route('/:id').get(getOnePage)