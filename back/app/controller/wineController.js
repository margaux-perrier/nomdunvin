const {Wine} = require('../models');

const wineController = {

	/** @function 
   * Retrieve all wines with region, winemaker, culture, styles and dishes
   * @returns {[]} array containing all wines.
   */
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

	/** @function 
   * Retrieves wine corresponding to the id
   * @param {number} id 
   * @returns {(Object)} wine
   */
	async getOneWineById(req, res){
		try{
			const wineId = Number(req.params.id); 
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
