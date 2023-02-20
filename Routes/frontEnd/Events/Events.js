import { getAllEvents, getEvents, getSomeEvents } from "../helpers/Events.js"
import { getAnEvent } from "../helpers/getAnEvent.js"


export const Event = (router)=> {
    router.route('/').get(getAllEvents).post(getSomeEvents)
    router.route('/:eventId').get(getAnEvent)
    router.route('/actual').post(getEvents)
}
