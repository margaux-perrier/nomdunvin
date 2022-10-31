const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 


router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

router.post('admin/wine', adminController.createWine);
router.patch('admin/wine/:id', adminController.updateWineById);
router.delete('admin/wine/:id', adminController.deleteWineById);

module.exports = router;
