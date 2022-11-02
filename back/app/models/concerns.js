//we define the model ourselves to add 
//the quantity column to the "concerns" association table

const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Concerns extends Model {}

Concerns.init({
	quantity : {
		type : DataTypes.INTEGER, 
		allowNull : true
	}
},{
	sequelize, 
	tableName: 'concerns'
});

module.exports = Concerns; 