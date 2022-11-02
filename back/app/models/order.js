//we define the model ourselves to add 
//the quantity column to the "concerns" association table

const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Order extends Model {}

Order.init({
	quantity : {
		type : DataTypes.INTEGER, 
		allowNull : true
	}
},{
	sequelize, 
	tableName: 'order'
});

module.exports = Order; 