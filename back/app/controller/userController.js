const { User } = require('../models');
const emailValidator = require('email-validator'); 
const bcrypt = require('bcrypt'); 

const userController = {

	async signupAction(req, res){
		try {
			//1. Check the user doesn't exist in the DB.
			const searchedUser = await User.findOne({
				where : {
					email : req.body.email
				}
			});

			if(searchedUser){
				throw new Error('Signup does not work, invalid email or password'); 
			}
            
			//2. Check that the email format is valid with email-validator
			if(!emailValidator.validate(req.body.email)){
				throw new Error('Signup does not work, invalid email or password');
			}

			//3. Check that the password and confirmation are identical
			if(req.body.password !== req.body.confirmPassword){
				throw new Error('Signup does not work, invalid email or password');
			}

			//4. Encrypting the password with bcrypt
			const hashedPassword = bcrypt.hashSync(req.body.password, 10); 

			//5. Create an instance, save it in the database
			const newUser = User.build({
				email : req.body.email,
				password : hashedPassword,
				firstname : req.body.firstname, 
				lastname : req.body.lastname
			}); 

			newUser.save(); 
			res.status(200).json(newUser);  

		} catch (error) {
			console.log(error); 
			res.status(401); 
		}
	}, 

	async loginAction(req, res){
		try {
			//1. Check the user doesn't exist in the DB.
			const searchedUser = await User.findOne({
				where : {
					email : req.body.email
				}
			});
			if(!searchedUser){
				throw new Error('Signin does not work, invalid email or password');
			}
			//2. Check the password is valid (vs bdd) with compareSync of bcrypt
			const validPassword = bcrypt.compareSync(req.body.password, searchedUser.password); 
			if(!validPassword){
				throw new Error('Signin does not work, invalid email or password');
			}

			//3. If everything is ok, we add the user in a session. 
			req.session.user = searchedUser.dataValues;

			//4. For security reasons, the session password is deleted
			delete req.session.user.password;

			res.status(200).json(req.session.user);  

			if(searchedUser.role === 'admin'){
				res.redirect('/admin'); 	
			}else{
				res.redirect('/'); 
			}

		} catch (error) {
			console.log(error); 
			res.status(401);   
		}
	}, 

	disconnect(req,res){
		req.session.user = false;
		res.redirect('/');
	}
};

module.exports = userController; 