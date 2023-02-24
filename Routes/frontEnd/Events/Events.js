import auth from '../../../auth/auth.js';
import {
  createEvent,
  deleteAnEvent,
  getAllEvents,
  getEvents,
  getSomeEvents,
  updatAnEvent,
} from '../helpers/Events.js';
import { getAnEvent } from '../helpers/getAnEvent.js';


export const Event = router => {
  router.route('/').get(getAllEvents).post(getSomeEvents);
  router.route('/:eventId').get(getAnEvent);
  router.route('/actual').post(getEvents);
  router.use(auth);
  router.route('/settings').post(createEvent);
  router.route('/:eventId').delete(deleteAnEvent).put(updatAnEvent)

};
