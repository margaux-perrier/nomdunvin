const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 
const cartController = require('./controller/cartController'); 
const userController = require('./controller/userController'); 


//import middleware
const cartCreation = require('./middleware/cartCreation'); 
const authorizationMiddleware = require('./middleware/authorizationMiddleware');
const filterController = require('./controller/filterController');
//winecontroller
router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

//admin controller
router.post('/admin/wine', adminController.createWine);
router.patch('/admin/wine/:id', adminController.updateWineById);
router.delete('/admin/wine/:id', adminController.deleteWineById);

//user controller
router.post('/signup', userController.signupAction); 
router.post('/login', userController.loginAction); 
// router.get('/disconnect', userController.disconnect);

//shopping cart
router.use('/cart', cartCreation); 
router.post('/cart/add/:wineid', cartController.addWineToCart); 
router.post('/cart/update/:wineid', cartController.updateCart); 
router.get('/cart/remove/:wineid', cartController.removeWineFromCart); 
router.get('/cart/destroy', cartController.deleteCart); 
router.post('/cart/validate', authorizationMiddleware, cartController.validateCart); 

//filter controller
router.get('/culture', filterController.getAllCulture); 
router.get('/region', filterController.getAllRegion); 
router.get('/winemaker', filterController.getAllWinemaker); 
router.get('/style', filterController.getAllStyle); 
router.get('/grapevariety', filterController.getAllGrapevariety); 
router.get('/dish', filterController.getAllDish); 


module.exports = router;
