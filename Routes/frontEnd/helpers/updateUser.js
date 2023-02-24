import { User } from '../../../Database/Sequelize.js';

export const updateUser = (req, res) => {
    const { id } = req.params;
    console.log('req.body', req.body)
    const { userId, userSubmission } = req.body; // ce user id la est celui de l'utilisateur qui initie l'operation
    User.findByPk(parseInt(id))
      .then(userToUpdate => {
        if (!userToUpdate) {
          return res.status(404).json({ msg: 'there is no user to update' });
        }
        User.findByPk(parseInt(userId)).then(admin => {
          if (admin.accessLevel !== req.user.accessLevel) {
            console.log('admin', admin)
            console.log('req.user', req.user)
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
            userToUpdate.update({ ...userSubmission }).then(userUpdated => {
              res.json({ msg: 'successfully updated', user: userUpdated });
            }).catch(err => {
              res.status(400).json({msg :'something went wrong' , err})
            })
          }
        });
      })
      .catch(err => {
        res.status(400).json({ msg: err?.errors[0]?.message, err });
      });
  };
  