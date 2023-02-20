import { DataTypes, Model, json } from 'sequelize';

const ProgramModel = sequelize => {
  class Programs extends Model {}
  Programs.init(
    {
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      title: {
        type: DataTypes.STRING,
      },
      main: {
        type: DataTypes.STRING,
      },
      button: {
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
  return Programs;
};

export default ProgramModel;
