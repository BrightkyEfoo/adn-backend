import { getAboutPage } from '../helpers/getAboutPage.js';

export const AboutPage = (router)=> {
    router.route('/:language/aboutpage').get(getAboutPage)
}
