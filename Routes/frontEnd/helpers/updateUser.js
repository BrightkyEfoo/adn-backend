import { User } from '../../../Database/Sequelize.js';
import bcrypt from 'bcrypt';

export const updateUser = (req, res) => {
  const { id } = req.params;
  console.log('req.body', req.body);
  const { userId, userSubmission, newPassword, verifyPassword } = req.body; // ce user id la est celui de l'utilisateur qui initie l'operation
  User.findByPk(parseInt(id))
    .then(userToUpdate => {
      if (!userToUpdate) {
        return res.status(404).json({ msg: 'there is no user to update' });
      }
      User.findByPk(parseInt(userId)).then(admin => {
        if (admin.accessLevel !== req.user.accessLevel) {
          console.log('admin', admin);
          console.log('req.user', req.user);
          return res.status(401).json({ msg: 'unauthorized' });
        }
        if (admin.accessLevel > 2 || admin.id === userToUpdate.id) {
          if (admin.accessLevel <= 2) {
            if (
              'email' in userSubmission ||
              userSubmission.hasOwnProperty('email')
            ) {
              delete userSubmission.email;
              return res.status(401).json({ mag: 'you are not allowed' });
            }
            if (
              'accessLevel' in userSubmission ||
              userSubmission.hasOwnProperty('accessLevel')
            ) {
              delete userSubmission.accessLevel;
              return res.status(401).json({ mag: 'you are not allowed' });
            }
          }
          if (userId === parseInt(id) && newPassword) {
            if (!verifyPassword) {
              return res
                .status(401)
                .json({ msg: 'you should provide your password first' });
            }

            bcrypt.compare(verifyPassword, userToUpdate.password).then(_ => {
              if (!_) {
                return res.status(401).json({ msg: 'unauthorized' });
              } else {
                bcrypt.hash(verifyPassword, 10).then(hash => {
                  userToUpdate
                    .update({ ...userSubmission, password: hash })
                    .then(userUpdated => {
                      res.json({
                        msg: 'successfully updated',
                        user: userUpdated,
                      });
                    })
                    .catch(err => {
                      res
                        .status(400)
                        .json({ msg: 'something went wrong 1', err });
                    });
                });
              }
            });
          } else {
            if (userSubmission.password) {
              bcrypt.hash(userSubmission.password, 10).then(hash => {
                userToUpdate
                  .update({ ...userSubmission, password: hash })
                  .then(userUpdated => {
                    res.json({
                      msg: 'successfully updated',
                      user: userUpdated,
                    });
                  })
                  .catch(err => {
                    res
                      .status(400)
                      .json({ msg: 'something went wrong 2', err });
                  });
              });
            } else {
              userToUpdate
                  .update({ ...userSubmission })
                  .then(userUpdated => {
                    res.json({
                      msg: 'successfully updated',
                      user: userUpdated,
                    });
                  })
                  .catch(err => {
                    res
                      .status(400)
                      .json({ msg: 'something went wrong 2', err });
                  });
            }
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({ msg: err?.errors[0]?.message, err });
    });
};
