import { Router } from 'express';
import { NavBar } from './NavBar/navBar.js';


const navBarRouter = Router();

NavBar(navBarRouter);

export default navBarRouter;
