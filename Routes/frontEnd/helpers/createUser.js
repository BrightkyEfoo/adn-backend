import { User } from '../../../Database/Sequelize.js';

export const createUser = (req, res) => {
  console.log('req.user', req.user);
  const { firstName, lastName, email, password, accessLevel, userId } =
    req.body;
  if (!userId) return res.status(401).json({ msg: 'you are not allowed' });
  if (!firstName)
    return res.status(400).json({ msg: 'firstName should not be empty' });
  if (!lastName)
    return res.status(400).json({ msg: 'lastName should not be empty' });
  if (!email) return res.status(400).json({ msg: 'email should not be empty' });
  if (!password)
    return res.status(400).json({ msg: 'password should not be empty' });
  if (!accessLevel)
    return res.status(400).json({ msg: 'accessLevel should not be empty' });
  User.findByPk(parseInt(userId)).then(user => {
    if (!user) {
      return res.status(401).json({ msg: 'you are not allowed' });
    }
    if (req.user.accessLevel !== user.accessLevel || req.user.accessLevel < 3) {
      return res.status(400).json({ msg: 'not allowed' });
    }
    if (accessLevel > 2) {
      return res.status(401).json({ msg: 'can\'t create user accesLeve should be lesser than 3' });
    }
    User.create({ firstName, lastName, email, password, accessLevel })
      .then(newUser => {
        res.json({ msg: 'user created successfully', user: newUser.toJSON() });
      })
      .catch(err => {
        res
          .status(500)
          .json({ msg: err.errors[0]?.message || 'something went wrong', err });
      });
  });
};
