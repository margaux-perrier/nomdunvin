const { Wine, Order, User} = require('../models');

const cartController = {

	/**  @function 
   * Add wine to cart session  - when user add wine to cart from the home page or product page
   * @param {Number}  wineIdUrl- Id of the wine
   * @param {Number}  quantity - quantity of wine add to cart
   */
	async addWineToCart(req,res){
	
		try{
		
			const wineIdUrl = Number(req.params.wineid); 
			const quantity = Number(req.body.quantity); 
			
			//check if the wine you want to add to the basket is not already in the basket
			const foundWine = req.session.cart.find((wine) => {
				return wine.id === wineIdUrl; 
			});

			// If not, we add the wine in the session. 
			if(!foundWine){
				const wineToAdd = await Wine.findByPk(wineIdUrl);
			
				wineToAdd.dataValues['quantity'] = quantity; //add the quantity property to the wine object
				req.session.cart.push(wineToAdd);
				res.status(200).json(req.session.cart); 

			}else{
			// If it is there, we adapt the quantity 
				foundWine['quantity'] += quantity;
				res.status(200).json(req.session.cart); 
			}
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	
	/** @function 
   * Modify quantity of wine with id in cart session - when user modify wine's quantity from the cart page
   * @param {Number}  wineIdUrl- Id of the wine
   * @param {Number}  quantity - quantity of wine add to cart
   */
	updateCart(req,res){
		try{
			const wineIdUrl = Number(req.params.wineid);
			const quantity = req.body.quantity; 

			//We are looking for the wine in the session. 
			const foundWine = req.session.cart.find((wine) => {
				return wine.id === wineIdUrl; 
			});

			if(!foundWine){
				const error = new Error(`wine with id ${wineIdUrl} does not exist in the cart session`); 
				return res.status(500).json({ message: error.message });
			}

			foundWine['quantity'] = quantity; 
			res.status(200).json(req.session.cart); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 	
		}
	}, 

	/** @function 
   * Remove wine with id from the session cart - when user remove wine from cart
   * @param {Number}  wineIdUrl- Id of the wine
   */
	removeWineFromCart(req,res){
		try{
			const wineIdUrl = Number(req.params.wineid); 
			req.session.cart = req.session.cart.filter((wine)=>{
				return wine.id !== wineIdUrl; 
			});
			res.status(200).json(req.session.cart);
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 	
		}
	}, 

	/** @function 
   * Empty cart - empty cart session
   */
	deleteCart(req,res){
		try{
			req.session.cart =[]; 
			res.status(200).json(req.session.cart); 
		}catch(error){
			console.log(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	/** @function 
   * Validate cart - registered cart session in database
   */
	async validateCart(req,res){
		try{
		
			for(const wine of req.session.cart){
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

			for(const wine of req.session.cart){
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

			res.status(200).json(user); 

		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}

};

module.exports = cartController; 