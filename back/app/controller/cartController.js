const { Wine, Order, User} = require('../models');

const cartController = {

	/** @function 
   * Validate cart - registered cart session in database
   * @param {Array} cart - user's cart
   */
	async validateCart(req,res){
		try{
			const { cart } = req.body; 
			for(const wine of cart){
				let cart = Order.build({
					user_id : req.token.userId,
					wine_id : wine.id, 
					quantity : wine.quantity
				});
				await cart.save();
			}
			
			let user = await User.findByPk(req.token.userId); 
			if(!user){
				const error = new Error(`User with id ${req.token.userId} does not exist`); 
				console.log('ici.'); 
				return res.status(404).json({message : error.message}); 
			}

			for(const wine of cart){
				const wineToAdd = await Wine.findByPk(wine.id); 
				if(!wineToAdd){
					const error = new Error(`wine with id ${wine.id} does not exist.`); 
					return res.status(404).json({message : error.message}); 
				}
			
				await user.addWines(wineToAdd); 
			}
			
			user = await User.findByPk(req.token.userId, {
				include : 'wines'
			}); 

			res.status(200).json({success : true }); 

		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}

};

module.exports = cartController; 