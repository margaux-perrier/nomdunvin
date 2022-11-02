const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 
const cartController = require('./controller/cartController'); 
const cartCreation = require('./middleware/cartCreation'); 
const userController = require('./controller/userController'); 

//winecontroller
router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

//admin controller
router.post('admin/wine', adminController.createWine);
router.patch('admin/wine/:id', adminController.updateWineById);
router.delete('admin/wine/:id', adminController.deleteWineById);

//user controller
router.post('/signup', userController.signupAction); 
router.post('/login', userController.loginAction); 
router.get('/disconnect', userController.disconnect);

//shopping cart
router.use('/cart', cartCreation); 
router.post('/cart/add/:wineid', cartController.addWineToCart); 
router.post('/cart/update/:wineid', cartController.updateCart); 
router.get('/cart/remove/:wineid', cartController.removeWineToCart); 
router.get('/cart/destroy', cartController.deleteCart); 
router.post('/cart/validate', cartController.validateCart); 

module.exports = router;
