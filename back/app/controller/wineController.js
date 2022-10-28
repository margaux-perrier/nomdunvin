const {Wine} = require('../models');
	
const wineController = {
	async getAllWines(req,res){
		try{
			const wineList = await Wine.findAll(); 
			res.status(200).json(wineList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}
};

module.exports = wineController;
