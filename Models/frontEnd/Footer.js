import { DataTypes, Model } from 'sequelize';

const FooterModel = sequelize => {
  class Footer extends Model {}
  Footer.init(
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
      bottom: {
        type: DataTypes.JSON,
      },
      left: {
        type: DataTypes.JSON,
      },
      right: {
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
  return Footer;
};

export default FooterModel;
