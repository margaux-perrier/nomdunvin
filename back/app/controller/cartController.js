const { Wine, Cart} = require('../models');

const cartController = {

	//Cas à gérer : 
	//1. Ajout au panier à partir de la page d'accueil => quantité ajoutée = 1 max.
	//2. Ajout au panier à partir de la page produit => quantité ajoutée = x.  
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
			
				wineToAdd.dataValues['quantity'] = quantity; 
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
			//Création du nouveau panier
			let newCart = Cart.build({
				user_id : 1 // à changer avec req.session.user.id
			});
			await newCart.save();
 
			// let wine_id;
			// let quantity;
			// const listWine = req.session.cart.map((wine)=> ({
			// 	wine_id : wine.id, 
			// 	quantity : wine.quantity, 
			// })); 
			console.log('PANIER SESSION', req.session.cart); 

			// for(const wine of req.session.cart){
			// 	await newCart.addWines({wine_id : [wine.id]});
			// }

			for(const wine of req.session.cart){
				await newCart.addWines(wine);
			}
			
			newCart = await Cart.findOne({
				where : {
					user_id : 1
				}
			});
			
			res.status(200).json(req.session.cart); 



		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}

};

module.exports = cartController; 