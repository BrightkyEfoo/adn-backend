import { DataTypes, Model, json } from 'sequelize';

const EventModel = sequelize => {
  class Event extends Model {
    fullGet() {
      let temp = { ...this.toJSON() };
      temp.document = JSON.parse(temp.document);
      return temp;
    }
  }
  Event.init(
    {
      language: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique : {msg : 'this language is already taken, please select another language or update'}
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: 'EVENT NAME',
      },
      beginDay: {
        type: DataTypes.INTEGER,
      },
      endDay: {
        type: DataTypes.INTEGER,
      },
      category: {
        type: DataTypes.STRING,
      },
      organizer: {
        type: DataTypes.STRING,
        defaultValue: 'ADN',
      },
      video: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: 'http://localhost:9001/public/homePage/FR/image.png',
      },
      main: {
        type: DataTypes.STRING,
        defaultValue:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quo iure eum iste. Eum, accusantium?',
      },
      begin: {
        type: DataTypes.DATE,
      },
      end: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      link: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      document: {
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
  return Event;
};

export default EventModel;
