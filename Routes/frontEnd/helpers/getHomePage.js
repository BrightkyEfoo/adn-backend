import { HomePage } from "../../../Database/Sequelize.js";

export const getHomePage = (req, res) => {
  HomePage.findOne({ where: { language: req.params.language } })
    .then(page => {
      const pa = page.toJSON()
      let i = 0
      for(i = 1 ; i <= 7 ; i++){
        pa['section'+i] = JSON.parse(pa['section'+i])
      }
      console.log('page', page)
      res.json({ page : pa });
    })
    .catch(err => {
      res.status(404).json({ msg: 'page not found' });
    });
};
