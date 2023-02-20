import { getEventPage } from '../helpers/getEventPage.js';
// import { getHomePage } from '../helpers/getHomePage.js';

export const EventPage = (router)=> {
    router.route('/:language/eventpage').get(getEventPage);
}
