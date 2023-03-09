import { DataTypes, Model } from 'sequelize';

const NavBarModel = sequelize => {
  class Navbar extends Model {}
  Navbar.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
      },
      language : {
        type : DataTypes.STRING
      },
      section1: {
        type: DataTypes.JSON,
      },
      section2: {
        type: DataTypes.JSON,
      },
      logo: {
        type: DataTypes.STRING,
      },
      links: {
        type: DataTypes.JSON,
      },
      button: {
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
  return Navbar;
};

export default NavBarModel;
