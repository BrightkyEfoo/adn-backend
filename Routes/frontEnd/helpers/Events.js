import { Op } from 'sequelize';
import { Event } from '../../../Database/Sequelize.js';

export const getAllEvents = (req, res) => {
  console.log('events');
  const {limit } = req.query
  console.log('limit', limit)
  Event.findAll({limit : parseInt(limit) || 100 , order:[['beginDay','ASC']]}).then(events => {
    // const ev = events;
    // ev.forEach(e => {
    //   e.document = JSON.parse(e.document);
    // });
    // res.json({ events: ev });
    res.json({events})
  });
};

export const getEvents = (req, res) => {
  console.log('events');
  const begin = new Date(req.body.begin);
  const end = new Date(req.body.end);
  console.log('begin', begin);
  console.log('end', end);
  Event.findAll({
    where : {
      beginDay : {
        [Op.lte]:begin.getDate(),
        // [Op.]
      },
      endDay : {
        [Op.gte]:begin.getDate()
      }
    }
  }).then(events => {
    // const ev = [...events];
    // ev.forEach(e => {
    //   e.document = JSON.parse(e.document);
    // });
    // ev.
    res.json({events})
    // res.json({ events: ev });
  });
};

export const getSomeEvents = (req, res) => {
  // console.log('events111');
  const begin = new Date(req.body.begin);
  const end = new Date(req.body.end);
  console.log('begin', begin);
  console.log('end', end);
  // console.log('begin : ' , begin , "\nend : ",end)
  if (begin && end) {
    console.log('begin : ', begin, '\nend : ', end);
    Event.findAll({
      where: {
        begin: { [Op.between]: [begin, end] },
      },
    }).then(events => {
      const ev = events;
      ev.forEach(e => {
        e.document = JSON.parse(e.document);
      });
      res.json({ events: ev });
    });
  } else {
    Event.findAll().then(events => {
      const ev = events;
      ev.forEach(e => {
        e.document = JSON.parse(e.document);
      });
      res.json({ events: ev });
    });
  }
};
