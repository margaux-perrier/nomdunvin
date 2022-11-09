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

//Asssociations to wine
router.post('/wine/:id/grapevariety', adminController.associateGrapeVarietyToWine);
router.post('/wine/:id/style', adminController.associateStyleToWine);  
router.post('/wine/:id/culture', adminController.associateCultureToWine);  
router.post('/wine/:id/dish', adminController.associateDishToWine);
router.patch('/wine/:id/grapevariety', adminController.removeGrapeVarietyToWine);
router.patch('/wine/:id/style', adminController.removeStyleToWine);
router.patch('/wine/:id/culture', adminController.removeCultureToWine);
router.patch('/wine/:id/dish', adminController.removeDishToWine);

module.exports = router;
