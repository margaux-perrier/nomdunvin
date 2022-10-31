const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 


router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);


module.exports = router;
