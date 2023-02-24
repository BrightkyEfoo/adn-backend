import jwt from "jsonwebtoken";
import { User } from "../../../Database/Sequelize.js";
import { private_key } from "../../../auth/private_key.js";
import bcrypt from 'bcrypt';


export const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } })
    .then(user => {
      if (user.loginTryCounter > 0) {
        if (user) {
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return res.status(400).json({ msg: 'something went wrong' });
            }
            if (result) {
              const token = jwt.sign(
                {
                  userId: user.id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  accessLevel: user.accessLevel,
                },
                private_key,
                {
                    expiresIn : '24h'
                }
              );
              user.loginTryCounter = 5;
              const userTemp = user.toJSON();
              delete userTemp.password;
              user.save().then(() => {
                res.json({
                  msg: 'successfully connected',
                  user: userTemp,
                  token,
                });
              });
            } else {
              user.loginTryCounter = user.loginTryCounter - 1;
              const count = user.loginTryCounter;
              user.save().then(() => {
                return res.status(401).json({ msg: 'wrong password', count });
              });
            }
          });
        } else {
          return res.status(404).json({
            msg: `It's look like there is no user linked with that email`,
          });
        }
      } else {
        return res
          .status(401)
          .json({ msg: 'you are not authorized. please contact your admin' });
      }
    })
    .catch(err => {
      res.status(400).json({
        msg: `something went wrong`,
        err,
      });
    });
};
