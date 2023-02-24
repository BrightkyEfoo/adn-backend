import { User } from '../../../Database/Sequelize.js';

export const getAllUsers = (req, res) => {
  if(!req.query.userId){
    return !res.status(400).json({msg : 'you should provide your useId'})
  }
  if (req.user.accessLevel <= 2) {
    return res.status(401).json({ msg: 'you are not allowed' });
  }
  User.findAll()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ msg: err?.errors[0]?.message || 'something went wrong', err });
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ msg: 'you should provide your userId' });
  }
  if (req.user.accessLevel <= 2 && userId !== parseInt(id)) {
    return res.status(400).json({ msg: 'you are not allowed' });
  }
  User.findByPk(parseInt(id))
    .then(user => {
      // ici user est l'utilisateur recherché
      const use = user.toJSON();
      if (req.user.accessLevel <= 2) {
        delete use.password;
      }
      return res.json({ msg: 'success', user: use });
    })
    .catch(err => {
      res
        .status(500)
        .json({ msg: err?.errors[0]?.message || 'something went wrong', err });
    });
};
