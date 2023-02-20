import { getSomeActivities } from "../helpers/Activities.js";


export const Activity = (router)=> {
    router.route('/').get(getSomeActivities);
}
