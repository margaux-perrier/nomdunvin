const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 


router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

router.post('/wine', adminController.createWine);
router.patch('/wine/:id', adminController.updateWineById);
router.delete('/wine/:id', adminController.deleteWineById);

module.exports = router;
