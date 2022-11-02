const { Wine, Order, User} = require('../models');

const cartController = {

	
	async addWineToCart(req,res){
		try{
			const wineIdUrl = Number(req.params.wineid); //id du vin que l'on veut ajouter au panier
			const quantity = Number(req.body.quantity); //quantity récupérée dans le formulaire vaut 1 minimum.
			//on regarde si le vin que l'on veut ajouter au panier n'est pas déjà dans le panier
			const foundWine = req.session.cart.find((wine) => {
				return wine.id === wineIdUrl; 
			});

			//Si il n'y est pas, on ajoute le vin dans la session. 
			if(!foundWine){
				const wineToAdd = await Wine.findByPk(wineIdUrl);
			
				wineToAdd.dataValues['quantity'] = quantity; //on ajoute à l'objet wine la propriété quantity
				req.session.cart.push(wineToAdd);
				res.status(200).json(req.session.cart); 

			}else{
			//Si il y est, on adapte la quantité 
				foundWine['quantity'] += quantity;
				res.status(200).json(req.session.cart); 
			}
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	//3. Modifier quantité d'un vin à partir de la page panier => quantité peut augmenter ou diminuer; quantité minimale = 1
	updateCart(req,res){
		try{
			const wineIdUrl = Number(req.params.wineid);
			const quantity = req.body.quantity; 

			//on cherche le vin dans la session. 
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

	//4. Supprimer un vin du panier => bouton
	removeWineToCart(req,res){
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

	//5. Vider le panier => bouton
	deleteCart(req,res){
		try{
			req.session.cart =[]; 
			res.status(200).json(req.session.cart); 
		}catch(error){
			console.log(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	async validateCart(req,res){
		try{
		
			for(const wine of req.session.cart){
				let cart = Order.build({
					user_id : req.session.user.id,
					wine_id : wine.id, 
					quantity : wine.quantity
				});
				await cart.save();
			}
			
			let user = await User.findByPk(1); 
			if(!user){
				const error = new Error(`User with id ${req.session.user.id} does not exist`); 
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
			
			user = await User.findByPk(req.session.user.id, {
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