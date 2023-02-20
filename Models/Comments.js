import { DataTypes, Model } from 'sequelize';

const CommentModel = sequelize => {
  class Comment extends Model {
  }
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey : true
      },
      main: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : 'John'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : 'DOE'
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : 'johndoe@example.com',
        validate: {
          isEmail: {
            msg: 'only good email are accepted',
          },
        },
      },
      website: {
        type: DataTypes.STRING,
        // allowNull: false,
        defaultValue: 'http://localhost:3000',
      },
    },
    {
      sequelize,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
  );

  return Comment;
};

export default CommentModel;
