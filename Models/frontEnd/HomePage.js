import { DataTypes, Model, json } from 'sequelize';

const HomePageModel = sequelize => {
  class HomePage extends Model {}
  HomePage.init(
    {
      language: {
        type: DataTypes.STRING,
        allowNull : false,
        unique : {msg : 'this language is already taken, please select another language or update'}
      },
      section1: {
        type: DataTypes.JSON,
      },
      section2: {
        type: DataTypes.JSON,
      },
      section3: {
        type: DataTypes.JSON,
      },
      section4: {
        type: DataTypes.JSON,
      },
      section5: {
        type: DataTypes.JSON,
      },
      section6: {
        type: DataTypes.JSON,
      },
      section7: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return HomePage;
};

export default HomePageModel;
