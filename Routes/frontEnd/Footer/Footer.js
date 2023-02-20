
import { getFooter } from '../helpers/getFooter.js';

export const Footer = (router)=> {
    router.route('/:language').get(getFooter);
}
