const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Winemaker extends Model {} 

Winemaker.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'winemaker'
});

module.exports = Winemaker; 