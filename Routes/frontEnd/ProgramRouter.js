import { Router } from 'express';
import { Program } from './Programs/Program.js';

const progamRouter = Router();

Program(progamRouter);

export default progamRouter;
