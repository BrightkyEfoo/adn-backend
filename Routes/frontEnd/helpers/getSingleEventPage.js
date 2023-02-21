import { SingleEventPage } from '../../../Database/Sequelize.js';
import SingleEventPageModel from '../../../Models/frontEnd/SingleEventPage.js';
// import { SingleEventPage } from '../Pages/SingleEventPage.js';

export const getSingleEventPage = (req, res) => {
    console.log(req.params.language)
  SingleEventPage.findOne({ where: { language: req.params.language } })
    // .then(singleEventpage => res.json({ ...singleEventpage.fullGet() }))
    .then(singleEventpage => res.json({ ...singleEventpage }))
    .catch(err => res.status(404).json({ ...err }));
};
