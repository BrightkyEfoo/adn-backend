import { getSomePrograms } from "../helpers/Programs.js";


export const Program = (router)=> {
    router.route('/').get(getSomePrograms);
}
