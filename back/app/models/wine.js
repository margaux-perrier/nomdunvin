const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Wine extends Model {} 

Wine.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	avatar : {
		type : DataTypes.TEXT, 
		allowNull: true
	}, 
	description : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	appellation : {
		type : DataTypes.TEXT, 
		allowNull: false
	},
	size : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	price : {
		type : DataTypes.DECIMAL, 
		allowNull: false
	}, 
	alcohol : {
		type : DataTypes.DECIMAL, 
		allowNull: false
	}, 
	vintage : {
		type : DataTypes.INTEGER, 
		allowNull: false
	}, 
	color : {
		type : DataTypes.INTEGER, 
		allowNull: false
	},
},{
	sequelize, 
	tableName: 'wine'
});

module.exports = Wine; 