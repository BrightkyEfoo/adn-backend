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
          return res.status(401).json({ msg: 'unauthorized 1' });
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
          //ici

          //fin ici
          if (parseInt(id) === userId) {
            if (newPassword) {
              if (!verifyPassword) {
                return res
                  .status(401)
                  .json({
                    msg: 'you should provide your password in the verify password field',
                  });
              } else {
                bcrypt
                  .compare(verifyPassword, userToUpdate.password)
                  .then(_ => {
                    if (!_) {
                      // userToUpdate.update({loginTryCounter : userToUpdate.loginTryCounter - 1})
                      return res
                        .status(401)
                        .json({
                          msg: 'wrong password filled on verify password field',
                        });
                    } else {
                      bcrypt.hash(newPassword,10).then(hash => {
                        userToUpdate
                          .update({ ...userSubmission, password: hash })
                          .then(userUpdated => {
                            let temp = userUpdated.toJSON();
                            delete temp.password;
                            return res.json({ msg: 'success', user: temp });
                          });
                      });
                    }
                  });
              }
            } else {
              userToUpdate.update({ ...userSubmission }).then(userUpdated => {
                let temp = userUpdated.toJSON();
                delete temp.password;
                return res.json({ msg: 'successfully updated', user: temp });
              });
            }
          } else {
            if (!req.user.accessLevel <= 2) {
              return res
                .status(401)
                .json({
                  msg: 'you are not allowed to set password of another user',
                });
            } else {
              if (newPassword) {
                bcrypt.hash(newPassword,10).then(hash => {
                  userToUpdate
                    .update({ ...userSubmission, password: hash })
                    .then(userUpdated => {
                      let temp = userUpdated.toJSON();
                      delete temp.password;
                      return res.json({ msg: 'success', user: temp });
                    });
                });
              } else if(userSubmission.password){
                bcrypt.hash(userSubmission.password,10).then(hash => {
                  userToUpdate
                    .update({ ...userSubmission, password: hash })
                    .then(userUpdated => {
                      let temp = userUpdated.toJSON();
                      delete temp.password;
                      return res.json({ msg: 'success', user: temp });
                    });
                });
              }else {
                userToUpdate.update({ ...userSubmission }).then(userUpdated => {
                  let temp = userUpdated.toJSON();
                  delete temp.password;
                  return res.json({ msg: 'successfully updated', user: temp });
                });
              }
            }
          }
        }
      });
    })
    .catch(err => {
      res.status(400).json({ msg: err?.errors[0]?.message, err });
    });
};
