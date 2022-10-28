const { Model, DataTypes} = require('sequelize'); 
const sequelize = require('../database'); 

class Style extends Model {} 

Style.init({
	name : {
		type : DataTypes.TEXT, 
		allowNull: false
	}
},{
	sequelize, 
	tableName: 'style'
});

module.exports = Style; 