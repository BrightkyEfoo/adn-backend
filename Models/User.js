import { DataTypes, Model } from 'sequelize';

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
            if (![0,1,2,3].includes(value)) {
              throw Error(
                'the value of an accessLevel should be either 0 or 1'
              );
            }
          },
        },
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return User;
};

export default UserModel;
