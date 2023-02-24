import { Op } from 'sequelize';
import { Event } from '../../../Database/Sequelize.js';

export const getAllEvents = (req, res) => {
  console.log('events');
  const { limit } = req.query;
  console.log('limit', limit);
  Event.findAll({
    limit: parseInt(limit) || 100,
    order: [['beginDay', 'ASC']],
  }).then(events => {
    // const ev = events;
    // ev.forEach(e => {
    //   e.document = JSON.parse(e.document);
    // });
    // res.json({ events: ev });
    res.json({ events });
  });
};

export const getEvents = (req, res) => {
  console.log('events');
  const begin = new Date(req.body.begin);
  const end = new Date(req.body.end);
  console.log('begin', begin);
  console.log('end', end);
  Event.findAll({
    where: {
      beginDay: {
        [Op.lte]: begin.getDate(),
        // [Op.]
      },
      endDay: {
        [Op.gte]: begin.getDate(),
      },
    },
  }).then(events => {
    // const ev = [...events];
    // ev.forEach(e => {
    //   e.document = JSON.parse(e.document);
    // });
    // ev.
    res.json({ events });
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
      // const ev = events;
      // ev.forEach(e => {
      //   e.document = JSON.parse(e.document);
      // });
      // res.json({ events: ev });
      res.json({ events });
    });
  } else {
    Event.findAll().then(events => {
      // const ev = events;
      // ev.forEach(e => {
      //   e.document = JSON.parse(e.document);
      // });
      // res.json({ events: ev });
      res.json({ events });
    });
  }
};

export const createEvent = (req, res) => {
  const {
    userId,
    language,
    name,
    begin,
    end,
    organizer,
    category,
    description,
    email,
    website,
    location,
    phone,
    image,
  } = req.body;
  if (!userId) {
    return res.status(400).json({ msg: 'you should provide your userId' });
  }
  if (req.user.accessLevel < 2) {
    return res.status(401).json({ msg: 'you are not authorized' });
  }
  if (
    !language ||
    !name ||
    !begin ||
    !end ||
    !organizer ||
    !category ||
    !description ||
    !email ||
    !website ||
    !phone ||
    !location ||
    !image
  ) {
    return res.status(400).json({ msg: 'all fields are required' });
  }
  // if(!req.body.)
  console.log('req.body', req.body);
  const Begin = new Date(begin);
  const End = new Date(end);
  Event.create({
    language,
    begin: Begin,
    end: End,
    beginDay: Begin.getDate(),
    endDay: End.getDate(),
    name,
    image,
    email,
    location,
    link: website,
    phone,
    main: description,
    category,
  })
    .then(event => {
      return res.json({ msg: 'event create successfully', event });
    })
    .catch(err => {
      res.status(400).json({ msg: 'something went wrong', err });
    });
  // res.json({url : 'http://localhost:9000/public/images/' + req.file.filename})
};

export const deleteAnEvent = (req, res) => {
  const { userId } = req.query;
  const { eventId } = req.params;
  if (!userId) {
    return res.status(400).json({ msg: 'you should provide your userId' });
  }
  if (req.user.accessLevel < 2) {
    return res.json({ msg: 'you are not allowed' });
  }
  Event.findByPk(parseInt(eventId))
    .then(event => {
      if (!event) {
        return res
          .status(404)
          .json({ msg: 'no event found for the id ' + eventId });
      }
      event
        .destroy()
        .then(_ => {
          res.json({ msg: 'successfully deleted', event });
        })
        .catch(() => {
          return new Error('something went wrong');
        });
    })
    .catch(err => {
      return res.status(404).json({ msg: 'something went wrong', err });
    });
};

export const updatAnEvent = (req, res) => {
  const { userId } = req.body;
  console.log('userId', req.body)
  const eventSubmited = req.body.event
  console.log('eventSubmited', eventSubmited)
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({ msg: 'you should provide the eventId' });
  }
  if (!userId) {
    return res.status(400).json({ msg: 'you should provide your userId' });
  }
  if(!eventSubmited.begin){
    return res.status(400).json({msg : 'all fields are requiered'})
  }
  Event.findByPk(parseInt(eventId)).then(eventToUpdate => {
    const begin = new Date(eventSubmited.begin)
    const end = new Date(eventSubmited.end)
    eventToUpdate.update({...eventSubmited , beginDay : begin.getDate() , endDay : end.getDate() , begin,end }).then(eventUpdated => {
      return res.json({msg : 'successfully updated' , event : eventUpdated})
    }).catch(err =>{
      return res.status(400).json({msg : 'something went wrong' , err})
    })
  }).catch(err => {
    res.status(404).json({msg : 'any event found' , err})
  })
};
