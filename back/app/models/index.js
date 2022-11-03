const Wine = require('./wine'); 
const Culture = require('./culture');
const Dish = require ('./dish'); 
const Region = require('./region');
const GrapeVariety = require('./grapevariety'); 
const Style = require('./style'); 
const User = require('./user'); 
const Winemaker = require('./winemaker'); 
const Order = require('./order'); 

//Association between region and wine - one to many
Region.hasMany(Wine, {
	foreignKey: 'region_id', 
	as : 'wines'
});


Wine.belongsTo(Region, {
	as: 'region', 
	foreignKey: 'region_id'
});

//Association between wine and winemaker - one to many
Winemaker.hasMany(Wine, {
	foreignKey : 'winemaker_id', 
	as : 'wines'
});

Wine.belongsTo(Winemaker, {
	foreignKey: 'winemaker_id', 
	as : 'winemaker'
});

//Association between style and wine - many-to-many
Wine.belongsToMany(Style, {
	as: 'styles', 
	through: 'taste', 
	foreignKey: 'wine_id',
	otherKey: 'style_id', 
});

Style.belongsToMany(Wine, {
	as: 'wines', 
	through: 'taste', 
	foreignKey: 'style_id',
	otherKey: 'wine_id',
});

//Association between dish and wine - many-to-many
Dish.belongsToMany(Wine, {
	as: 'wines', 
	through: 'eat_with', 
	foreignKey: 'dish_id',
	otherKey: 'wine_id', 
});

Wine.belongsToMany(Dish, {
	as: 'dishes', 
	through: 'eat_with', 
	foreignKey: 'wine_id',
	otherKey: 'dish_id', 
});

//Association between grapevariety and wine - many-to-many
GrapeVariety.belongsToMany(Wine, {
	as: 'wines', 
	through: 'compose', 
	foreignKey: 'grapevariety_id',
	otherKey: 'wine_id', 
});

Wine.belongsToMany(GrapeVariety, {
	as: 'grapevarieties', 
	through: 'compose', 
	foreignKey: 'wine_id',
	otherKey: 'grapevariety_id', 
});

//Association between culture and wine - many-to-many
Culture.belongsToMany(Wine, {
	as: 'wines', 
	through: 'cultivate', 
	foreignKey: 'culture_id',
	otherKey: 'wine_id', 
});

Wine.belongsToMany(Culture, {
	as: 'culture', 
	through: 'cultivate', 
	foreignKey: 'wine_id',
	otherKey: 'culture_id', 
});

// Association between wine and user - many-to-many
User.belongsToMany(Wine, {
	as : 'wines', 
	through: Order, 
	foreignKey: 'user_id', 
	otherKey: 'wine_id',
});

Wine.belongsToMany(User, {
	as : 'users', 
	through: Order, 
	foreignKey: 'wine_id', 
	otherKey: 'user_id',
});


module.exports = {
	Wine,
	Winemaker, 
	User,
	Region, 
	GrapeVariety,
	Culture, 
	Dish, 
	Style, 
	Order
};
