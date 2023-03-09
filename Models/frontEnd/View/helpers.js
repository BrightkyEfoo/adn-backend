
import { View } from "../../../Database/Sequelize.js";

export const getPage = (req, res) => {
  const { limit, order } = req.query;
  const { name, language } = req.query;

  if (name && language) {
    View.findOne({ where: { name, language } })
      .then(view => {
        res.json({ msg: 'success', view });
      })
      .catch(err => {
        res.status(400).json({ msg: 'something went wrong', err });
      });
  } else {
    if (order && order !== 'ASC' && order !== 'DESC') {
      return res.status(400).json({ msg: 'bad entry for order in query' });
    }
    View.findAll({
      limit: limit || 100,
      order: [['name', order || 'DESC']],
    })
      .then(views => {
        res.json({ msg: 'success', views });
      })
      .catch(err => {
        res.status(400).json({ msg: 'something went wrong', err });
      });
  }
};

export const getOnePage = (req, res) => {
  const id = parseInt(req.params.id);
  View.findByPk(id)
    .then(view => {
      res.json('success', view);
    })
    .catch(err => {
      res.status(400).json({ msg: 'something went wrong', err });
    });
};
