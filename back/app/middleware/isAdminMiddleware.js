const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET; 

const isAdminMiddleware = (req,res,next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		req.token = jsonwebtoken.verify(token, jwtSecret);
	
		if(req.token.role === 'admin'){
			next();
		}else{
			throw new Error('Only admin allowed to access this page');
		}
	} catch (error) {
		console.log(error); 
		res.status(401).json({ message: error.message });
	}
};

module.exports = isAdminMiddleware;
