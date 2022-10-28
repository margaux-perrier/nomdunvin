const { Model} = require('sequelize'); 
const sequelize = require('../database'); 

class Cart extends Model{} 

Cart.init({
	
},{
	sequelize, 
	tableName: 'cart'
});

module.exports = Cart; 