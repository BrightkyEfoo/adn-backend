import { Event } from "../../../Database/Sequelize.js";

export const getAnEvent = (req, res) => {
    console.log('events');
    Event.findOne({where:{id : req.params.eventId}}).then(event => {
      // const ev = event;
      res.json({ event });
    });
  };