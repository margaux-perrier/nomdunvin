const Wine = require('./wine'); 
const Culture = require('./culture');
const Dish = require ('./dish'); 
const Region = require('./region');
const GrapeVariety = require('./grapevariety'); 
const Style = require('./style'); 
const User = require('./user'); 
const Winemaker = require('./winemaker');
const Cart = require('./cart'); 
const Concerns = require('./concerns'); 

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

// Association between wine and cart - many-to-many
Cart.belongsToMany(Wine, {
	as : 'wines', 
	through: Concerns, 
	foreignKey: 'cart_id', 
	otherKey: 'wine_id',
	timestamps: false, 
});

Wine.belongsToMany(Cart, {
	as : 'carts', 
	through: Concerns, 
	foreignKey: 'wine_id', 
	otherKey: 'cart_id',
	timestamps: false, 
});

//Association between user and cart - one to many
User.hasMany(Cart, {
	foreignKey: 'user_id', 
	as : 'carts'
});

Cart.belongsTo(User, {
	as: 'user', 
	foreignKey: 'user_id'
});

module.exports = {
	Wine,
	Winemaker, 
	User,
	Cart, 
	Region, 
	GrapeVariety,
	Culture, 
	Dish, 
	Style, 
	Concerns
};
