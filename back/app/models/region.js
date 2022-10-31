const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Region extends Model {} 

Region.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'region'
});

module.exports = Region; 