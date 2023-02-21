import { DataTypes, Model } from 'sequelize';

const FocalPointModel = sequelize => {
  class FocalPoint extends Model {
    getName = () => {
      return this.firstName + ' ' + this.lastName;
    };
  }
  FocalPoint.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
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
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'DOE',
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return FocalPoint;
};

export default FocalPointModel;
