const { Culture, Region, Winemaker, Dish, Style, GrapeVariety} = require('../models');

const filterController = {

	/** @function 
   * Retrieve all culture
   * @returns {[]} array containing all culture.
   */
	async getAllCulture(req,res){
		try{
			const cultureList = await Culture.findAll();

			res.status(200).json(cultureList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	},

	/** @function 
   * Retrieve all region
   * @returns {[]} array containing all region.
   */
	async getAllRegion(req,res){
		try{
			const regionList = await Region.findAll();
			res.status(200).json(regionList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	/** @function 
   * Retrieve all winemaker
   * @returns {[]} array containing all winemaker.
   */
	async getAllWinemaker(req,res){
		try{
			const winemakerList = await Winemaker.findAll();
			res.status(200).json(winemakerList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	/** @function 
   * Retrieve all dish
   * @returns {[]} array containing all dish.
   */
	async getAllDish(req,res){
		try{
			const dishList = await Dish.findAll();
			res.status(200).json(dishList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	/** @function 
   * Retrieve all grapevariety
   * @returns {[]} array containing all grapevariety.
   */
	async getAllGrapevariety(req,res){
		try{
			const grapevarietyList = await GrapeVariety.findAll();
			res.status(200).json(grapevarietyList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 

	/** @function 
   * Retrieve all style
   * @returns {[]} array containing all style.
   */
	async getAllStyle(req,res){
		try{
			const styleList = await Style.findAll();
			res.status(200).json(styleList); 
		}catch(error){
			console.error(error); 
			res.status(500).json({message : error.message}); 
		}
	}, 


};

module.exports = filterController;