import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
// import { maxLoginTries } from '../app.js';
const secret_key = 'DMServices!@#123';
export const maxLoginTries = 5;

const DoctorModel = sequelize => {
  class Doctor extends Model {
  }
  Doctor.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'John',
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'DOE',
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      position: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return Doctor;
};

export default DoctorModel;
