import { Activity } from '../../../Database/Sequelize.js';

export const getSomeActivities = (req, res) => {
  const { order, number, isRealized } = req.query; //here we get strings only
  if (number) {
    if (order) {
      //here we got limit and order
      Activity.findAll({
        where: { isRealized: isRealized ? isRealized : false },
        limit: parseInt(number),
        order: [['date', order.toUpperCase()]],
      }).then(activities => {
        res.json({ activities });
      });
    } else {
      // here we got limit but no order
      Activity.findAll({
        where: { isRealized: isRealized ? isRealized : false },
        limit: parseInt(number),
      }).then(activities => {
        res.json({ activities });
      });
    }
  } else {
    if (order) {
      // here we got order but no limit
      Activity.findAll({
        where: { isRealized: isRealized ? isRealized : false },
        order: [['date', order.toUpperCase()]],
      }).then(activities => {
        res.json({ activities });
      });
    } else {
      // here we don't have neither order nor limit
      Activity.findAll({
        where: { isRealized: isRealized ? isRealized : false },
      }).then(activities => {
        res.json({ activities });
      });
    }
  }
//   res.json({ msg: 'yo' });
};
