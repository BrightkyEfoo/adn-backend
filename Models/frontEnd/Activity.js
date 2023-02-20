import { DataTypes, Model, json } from 'sequelize';

const ActivityModel = sequelize => {
  class Activity extends Model {}
  Activity.init(
    {
      language: {
        type: DataTypes.STRING,
        allowNull : false,
      },
      image : {
        type : DataTypes.STRING
      },
      date : {
        type : DataTypes.DATE,
      },
      title : {
        type : DataTypes.STRING
      },
      main : {
        type : DataTypes.STRING
      },
      isRealized : {
        type : DataTypes.BOOLEAN,
        defaultValue : false
      }
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return Activity;
};

export default ActivityModel;
