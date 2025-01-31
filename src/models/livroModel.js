const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    author: {
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
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: 0,
            max: 10,
        },
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: true,  
        defaultValue: undefined,
    },
}, { timestamps: true });

module.exports = Book;
