const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 


router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);
router.post('/wine', wineController.createWine);
router.patch('/wine/:id', wineController.updateWineById);
router.delete('/wine/:id', wineController.deleteWineById);


module.exports = router;
