const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class User extends Model {} 

User.init({
	email : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	firstname : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	lastname : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	password : {
		type : DataTypes.TEXT, 
		allowNull: false
	}, 
	avatar : {
		type : DataTypes.TEXT, 
		allowNull: true
	}, 
	role : {
		type : DataTypes.TEXT, 
		allowNull: true
	}, 
	address_number : {
		type : DataTypes.INTEGER, 
		allowNull: true
	}, 
	address_street : {
		type : DataTypes.TEXT, 
		allowNull: true
	}, 
	address_postal : {
		type : DataTypes.INTEGER, 
		allowNull: true
	}, 
	address_city : {
		type : DataTypes.TEXT, 
		allowNull: true
	}, 
},{
	sequelize, 
	tableName: 'user'
});

module.exports = User; 