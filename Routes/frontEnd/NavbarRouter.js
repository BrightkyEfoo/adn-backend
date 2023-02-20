import { Router } from 'express';
import { NavBar } from './NavBar/NavBar.js';


const navBarRouter = Router();

NavBar(navBarRouter);

export default navBarRouter;
