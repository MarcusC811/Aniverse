const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        linkToWatch: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
                unique: false
              }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
)

module.exports = Post;