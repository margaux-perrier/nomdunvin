const { User } = require('../models');
const emailValidator = require('email-validator'); 
const jsonwebtoken = require('jsonwebtoken'); 
const jwtSecret = process.env.JWT_SECRET;
const bcrypt = require('bcrypt'); 

const userController = {

	/** @function 
   * Create new user in database if user doesn't exist 
   * @param {String} email- user's email
   * @param {String} password - user's password
   * @param {String} confirmPassword - user's confirmPassword
   * @param {String} firstname - user's firstname
   * @param {String} lastname- user's lastname
   * @param {String} [address_number] - user adress's number
   * @param {String} [address_street] - user adress's street
   * @param {String} [address_postal] - user adress's postal
   * @param {String} [address_city] - user adress's city
   */
	async signupAction(req, res){
		try {
			const {email, password, confirmPassword, firstname, lastname, address_number, address_street, address_postal, address_city} = req.body; 

			//1. Check the user doesn't exist in the DB.
			const searchedUser = await User.findOne({
				where : {
					email
				}
			});

			if(searchedUser){
				throw new Error('Signup does not work, invalid email or password'); 
			}
            
			//2. Check that the email format is valid with email-validator
			if(!emailValidator.validate(email)){
				throw new Error('Signup does not work, invalid email or password');
			}

			//3. Check that the password and confirmation are identical
			if(password !== confirmPassword){
				throw new Error('Signup does not work, invalid email or password');
			}

			//4. Encrypting the password with bcrypt
			const hashedPassword = bcrypt.hashSync(password, 10); 

			//5. Check that firstname and lastname exist
			if(!firstname){
				throw new Error('Signup does not work, invalid email or password');
			}

			if(!lastname){
				throw new Error('Signup does not work, invalid email or password');
			}

			//6. Create an instance, save it in the database
			const newUser = User.build({
				email : req.body.email,
				password : hashedPassword,
				firstname : req.body.firstname, 
				lastname : req.body.lastname
			}); 

			if(address_number){
				newUser.address_number = Number(address_number);
			}

			if(address_street){
				newUser.address_street = address_street;
			}

			if(address_postal){
				newUser.address_postal = address_postal;
			}

			if(address_city){
				newUser.address_city = address_city;
			}

			await newUser.save(); 
			res.status(200).json(newUser);  

		} catch (error) {
			console.log(error); 
			res.status(401).json({ message: error.message }); 
		}
	}, 

	/** @function 
   * Connect user and create session
   * @param {String} email- user's email
   * @param {String} password - user's password
   */
	async loginAction(req, res){
		try {

			//1. Check the user exist in the DB.
			const searchedUser = await User.findOne({
				where : {
					email : req.body.email
				}
			});
			if(!searchedUser){
				throw new Error('Login does not work, invalid email or password');
			}
			//2. Check the password is valid (vs bdd) with compareSync of bcrypt
			const validPassword = bcrypt.compareSync(req.body.password, searchedUser.password); 
			if(!validPassword){
				throw new Error('Login does not work, invalid email or password');
			}

			//3. Token JWT
			if(searchedUser){
				const jwtContent = { userId: searchedUser.id};
				const jwtOptions = { 
					algorithm: 'HS256', 
					expiresIn: '3h' 
				};
				let token = jsonwebtoken.sign(jwtContent, jwtSecret, jwtOptions);
				console.log('<< 200', searchedUser.email);
				res.status(200).json({ 
					logged: true, 
					token: token,
				}); 
			}
		} catch (error) {
			console.log(error); 
			res.status(401).json({ message: error.message });   
		}
	}, 

	/** @function 
   * Disconnect user and delete session
   */
	disconnect(req,res){
		req.session.user = false;
		res.redirect('/');
	}
};

module.exports = userController; 