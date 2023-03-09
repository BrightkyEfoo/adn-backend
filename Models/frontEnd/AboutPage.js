import { DataTypes, Model } from 'sequelize';

const AboutPageModel = sequelize => {
  class AboutPage extends Model {
    fullGet() {
      let temp = { ...this.toJSON() };
      temp.head = JSON.parse(temp.head);
      temp.section1 = JSON.parse(temp.section1);
      // temp.section4 = JSON.parse(temp.section4);
      temp.section3 = JSON.parse(temp.section3);
      temp.section2 = JSON.parse(temp.section2);
      return temp;
    }
  }
  AboutPage.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
      },
      language: {
        type: DataTypes.STRING,
      },
      head: {
        type: DataTypes.JSON,
      },
      section1: {
        type: DataTypes.JSON,
      },
      section2: {
        type: DataTypes.JSON,
      },
      section3: {
        type: DataTypes.JSON,
      }
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );
  return AboutPage
};

export default AboutPageModel;
