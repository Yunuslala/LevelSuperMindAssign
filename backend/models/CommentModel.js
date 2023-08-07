const { DataTypes } = require('sequelize');
const { connection } = require('../configs/connection');
const {BlogsModel} = require('./blog.model');
const { UserModel } = require('./user.model');

const CommentModel = connection.define('comments', {
    comments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: UserModel,
            key: 'id'
        }
    },
    blogsId: {
        type: DataTypes.INTEGER,
        references: {
            model: BlogsModel,
            key: 'id'
        }
    },
    isAvailable:{
        type:DataTypes.BOOLEAN,
        default:true
    }
});

// Create associations between models
CommentModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'user' });
CommentModel.belongsTo(BlogsModel, { foreignKey: 'blogsId', as: 'Blogs' });

// Define hasMany associations for User and BlogPost models
UserModel.hasMany(CommentModel, { foreignKey: 'userId', as: 'comments' });
BlogsModel.hasMany(CommentModel, { foreignKey: 'blogsId', as: 'comments' });

module.exports = { CommentModel};