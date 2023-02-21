import { AboutPage } from "../../../Database/Sequelize.js";

export const getAboutPage = (req, res) => {
  AboutPage.findOne({ where: { language: req.params.language } })
    .then(page => {
      
      // res.json({ page : page.fullGet() });
      res.json({ page : page });
    })
    .catch(err => {
      res.status(404).json({ msg: 'page not found' , err });
    });
};
