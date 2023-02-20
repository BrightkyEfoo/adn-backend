import { getHomePage } from '../helpers/getHomePage.js';

export const HomePage = (router)=> {
    router.route('/:language/homepage').get(getHomePage)
}
