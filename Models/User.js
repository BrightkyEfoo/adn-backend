import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt'
// import { maxLoginTries } from '../app.js';
const secret_key = 'DMServices!@#123'
export const maxLoginTries = 5

const UserModel = sequelize => {
  class User extends Model {
    getName = () => {
      return this.firstName + ' ' + this.lastName;
    };
    verifyPassword = pass => {
      return this.password === pass;
    };
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : 'John'
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : 'DOE'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: 'email already taken' },
        validate: {
          isEmail: {
            msg: 'only good email are accepted',
          },
        },
      },
      loginTryCounter : {
        type : DataTypes.INTEGER,
        defaultValue : maxLoginTries,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'adn123',
      },
      accessLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isCorrect: value => {
            console.log('value', value)
            if (![0,1,2,3].includes(value)) {
              throw Error(
                'the value of an accessLevel should be either 0 or 1'
              );
            }
          },
        },
      },
      profilePic:{
        type:DataTypes.STRING,
        defaultValue : 'https://adn-backend-mj63t.ondigitalocean.app//public/images/profile.jpg'
      }
    },
    {
      hooks:{
        afterCreate : (user)=>{
          bcrypt.hash(user.password , 10 , (err , hash)=>{
            user.password = hash
            user.save().then(usertemp => {
              console.log('user', usertemp.toJSON())
            })
          })
        }
      },
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return User;
};

export default UserModel;
