const {Wine} = require('../models');

const adminController = {

	async createWine(req, res){
		try {
    
			const { name, description, appellation, size, price, alcohol, vintage, color, avatar, region_id, winemaker_id} = req.body;
    
			if (!name) {
				const error = new Error('"name" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!description) {
				const error = new Error('"description" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!appellation) {
				const error = new Error('"appellation" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!size) {
				const error = new Error('"size" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!color) {
				const error = new Error('"color" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!price) {
				const error = new Error('"price" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!alcohol) {
				const error = new Error('"alcohol" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!vintage) {
				const error = new Error('"vintage" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!avatar) {
				const error = new Error('"avatar" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!winemaker_id) {
				const error = new Error('"winemaker_id" property is missing');
				return res.status(400).json({ message: error.message });
			}
			if (!region_id) {
				const error = new Error('"region_id" property is missing');
				return res.status(400).json({ message: error.message });
			}
    
			const newWine = Wine.build({
				name, 
				description, 
				appellation, 
				size, 
				price,
				alcohol, 
				vintage, 
				color, 
				avatar, 
				region_id, 
				winemaker_id
			});
            
			await newWine.save();
			res.status(201).json(newWine);
            
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	}, 
    
	async updateWineById(req,res){
		try{
			const wineId = req.params.id; 
			const {name, description, appellation, size, price, alcohol, vintage, color, avatar, region_id, winemaker_id} = req.body; 
    
			const wine = await Wine.findByPk(wineId); 
    
			if(!wine){
				const error = new Error(`Wine with id ${wineId} does not exist`); 
				return res.status(404).json({ message: error.message });
			}
    
			if (name) {
				wine.name = name;
			}
			if (description) {
				wine.description = description; 
			}
			if (appellation) {
				wine.appellation = appellation;
			}
			if (size) {
				wine.size = size;  
			}
			if (color) {
				wine.color = color;  
			}
			if (price) {
				wine.price = price;  
			}
			if (alcohol) {
				wine.alcohol = alcohol;  
			}
			if (vintage) {
				wine.vintage = vintage;  
			}
			if (avatar) {
				wine.avatar = avatar;  
			}
			if (winemaker_id) {
				wine.winemaker_id = winemaker_id;
			}
			if (region_id) {
				wine.region_id = region_id;
			}
    
			await wine.save();
			res.status(200).json(wine);
		}catch(error){
			console.error(error);
			res.status(500).json({ message: error.message });
		}
	}, 
    
	async deleteWineById(req,res){
		try{
			const wineId = req.params.id;
			const wine = await Wine.findByPk(wineId);
    
			if (!wine) {
				const error = new Error(`Wine with id ${wineId} not found.`);
				return res.status(404).json({ message: error.message });
			}
    
			await wine.destroy();
			res.status(200).json(wine);
            
		}catch(error){
			console.error(error);
			res.status(500).json({ message: error.message });	
		}
	}

};

module.exports = adminController;