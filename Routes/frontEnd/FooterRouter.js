import { Router } from 'express';
import { Footer } from './Footer/Footer.js';


const footerRouter = Router();

Footer(footerRouter);

export default footerRouter;
