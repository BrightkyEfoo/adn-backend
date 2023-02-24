import { User } from '../../../Database/Sequelize.js';

export const deleteUser = (req, res) => {
    const { userId } = req.body; // the userId is the id of the admin and the id is the id of the account to delete
    const {id} = req.params
    if (!userId) return res.status(401).json({ msg: 'you are not allowed' });
    User.findByPk(parseInt(userId)).then(admin => {
      if (!admin) {
        return res.status(401).json({ msg: 'you are not allowed' });
      }
      if (
        req.user.accessLevel !== admin.accessLevel ||
        req.user.accessLevel < 3
      ) {
        return res.status(400).json({ msg: 'not allowed' });
      }
      User.findByPk(parseInt(id)).then(user =>{
          if(!user){
              return res.status(404).json({msg : 'user not found'})
          }
          if(user.accessLevel > 2){
              return res.status(400).json({msg : 'can\'t delete this user'})
          }
          user.destroy().then(_ => {
              return res.json({msg : `user ${user.firstName} deleted successfully` , user})
          })
      }).catch(err => res.status(500).json({msg : err.errors[0]?.message || 'something went wrong' , err}))
    });
  };
  