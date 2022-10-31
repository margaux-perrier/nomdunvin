const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Cart extends Model{} 

Cart.init({
	id : {
		type : DataTypes.INTEGER, 
		autoIncrement: true,
		primaryKey: true
	}, 
},{
	sequelize, 
	tableName: 'cart'
});

module.exports = Cart; 