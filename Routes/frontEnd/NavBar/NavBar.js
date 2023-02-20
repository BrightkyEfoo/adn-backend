
import { getNavBar } from '../helpers/getNavBar.js';

export const NavBar = (router)=> {
    router.route('/:language').get(getNavBar);
}
