const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 
const cartController = require('./controller/cartController'); 
const cartCreation = require('./middleware/cartCreation'); 
//winecontroller
router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

//admin controller
router.post('admin/wine', adminController.createWine);
router.patch('admin/wine/:id', adminController.updateWineById);
router.delete('admin/wine/:id', adminController.deleteWineById);

//shopping cart
router.use('/cart', cartCreation); 
router.post('/cart/add/:wineid', cartController.addWineToCart); 
router.post('/cart/update/:wineid', cartController.updateCart); 
router.get('/cart/remove/:wineid', cartController.removeWineToCart); 
router.get('/cart/destroy', cartController.deleteCart); 
router.post('/cart/validate', cartController.validateCart); 

module.exports = router;
