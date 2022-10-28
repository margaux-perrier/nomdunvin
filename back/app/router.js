const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 

router.get('/', wineController.getAllWines); 

module.exports = router;
