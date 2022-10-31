const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class GrapeVariety extends Model {} 

GrapeVariety.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'grapevariety'
});

module.exports = GrapeVariety; 