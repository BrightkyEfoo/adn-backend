import { getSingleEventPage } from '../helpers/getSingleEventPage.js';

export const SingleEventPage = (router)=> {
    router.route('/:language/event/').get(getSingleEventPage)
}
