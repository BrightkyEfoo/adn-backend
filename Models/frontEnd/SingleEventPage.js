import { DataTypes, Model } from 'sequelize';

const SingleEventPageModel = sequelize => {
  class SingleEventPage extends Model {
    fullGet() {
      let temp = { ...this.toJSON() };
      temp.detailsSection = JSON.parse(temp.detailsSection);
      temp.commentSection = JSON.parse(temp.commentSection);
      return temp;
    }
  }
  SingleEventPage.init(
    {
      language: {
        type: DataTypes.STRING,
      },
      detailsSection: {
        type: DataTypes.JSON,
      },
      commentSection: {
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
  return SingleEventPage;
};

export default SingleEventPageModel;
