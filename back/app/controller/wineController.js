const {Wine} = require('../models');
	
const wineController = {
	async getAllWines(req,res){
		try{
			const wineList = await Wine.findAll({
				include : [
					{association : 'region'}, 
					{association: 'winemaker'}, 
					{association: 'culture'}, 
					{association: 'styles'}, 
					{association: 'dishes'}, 
				]
			}); 
			res.status(200).json(wineList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	async getOneWineById(req, res){
		try{
			const wineId = req.params.id; 
			const wine = await Wine.findByPk(wineId, {
				include : [
					{association : 'region'}, 
					{association: 'winemaker'}, 
					{association: 'culture'}, 
					{association: 'styles'}, 
					{association: 'dishes'}, 
					{association : 'grapevarieties'}
				]
			});

			if(!wine){
				const error = new Error(`Wine not found with id ${wineId}`); 
				return res.status(404).json({message : error.message}); 
			}

			res.status(200).json(wine);

		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

};
module.exports = wineController;
