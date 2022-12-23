const {Router} = require('express'); 
const router = Router(); 

const wineController = require('./controller/wineController'); 
const adminController = require('./controller/adminController'); 
const cartController = require('./controller/cartController'); 
const userController = require('./controller/userController'); 
const filterController = require('./controller/filterController');

//import middleware
const authorizationMiddleware = require('./middleware/authorizationMiddleware');
const isAdminMiddleware = require('./middleware/isAdminMiddleware'); 

//verify le token 
router.get('/verify', userController.verifyToken); 

//winecontroller
router.get('/', wineController.getAllWines); 
router.get('/wine/:id', wineController.getOneWineById);

//admin controller
router.post('/admin/wine', isAdminMiddleware, adminController.createWine);
// router.patch('/admin/wine/:id', isAdminMiddleware, adminController.updateWineById);
router.delete('/admin/wine/:id', isAdminMiddleware, adminController.deleteWineById);

//user controller
router.post('/signup', userController.signupAction); 
router.post('/login', userController.loginAction); 


//shopping cart 
router.post('/cart/validate', authorizationMiddleware, cartController.validateCart); 

//filter controller
router.get('/culture', filterController.getAllCulture); 
router.get('/region', filterController.getAllRegion); 
router.get('/winemaker', filterController.getAllWinemaker); 
router.get('/style', filterController.getAllStyle); 
router.get('/grapevariety', filterController.getAllGrapevariety); 
router.get('/dish', filterController.getAllDish); 

//Asssociations to wine
router.post('/admin/wine/:id/grapevariety', adminController.associateGrapeVarietyToWine);
router.post('/admin/wine/:id/style', adminController.associateStyleToWine);  
router.post('/admin/wine/:id/culture', adminController.associateCultureToWine);  
router.post('/admin/wine/:id/dish', adminController.associateDishToWine);
router.patch('/admin/wine/:id/grapevariety', adminController.removeGrapeVarietyToWine);
router.patch('/admin/wine/:id/style', adminController.removeStyleToWine);
router.patch('/admin/wine/:id/culture', adminController.removeCultureToWine);
router.patch('/admin/wine/:id/dish', adminController.removeDishToWine);


module.exports = router;

