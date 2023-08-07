const { DataTypes } = require('sequelize');
const { connection } = require('../configs/connection');
const {UserModel} = require('./user.model');

const BlogsModel = connection.define('Blogs', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    Type: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },

    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
});


UserModel.hasMany(BlogsModel, {
    foreignKey: 'userId', 
});
BlogsModel.belongsTo(UserModel, {
    foreignKey: 'userId',
});

module.exports = {BlogsModel};