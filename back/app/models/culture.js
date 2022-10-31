const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Culture extends Model {} 

Culture.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'culture'
});

module.exports = Culture; 