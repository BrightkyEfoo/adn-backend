import { EventPage } from "../../../Database/Sequelize.js";

export const getEventPage = (req, res) => {
    console.log('language : ', req.params.language)
    EventPage.findOne({ where: { language: req.params.language } })
      .then(page => {
        res.json({ page : page.fullGet() });
      })
      .catch(err => {
        res.status(404).json({ msg: 'page not found' });
      });
  };
  