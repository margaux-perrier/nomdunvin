const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Dish extends Model {} 

Dish.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'dish'
});

module.exports = Dish; 