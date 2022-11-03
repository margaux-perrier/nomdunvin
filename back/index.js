require('dotenv').config(); 
const cors = require('cors');
const express = require('express'); 

const app = express(); 
app.use(cors());
const session = require('express-session');
const PORT = process.env.PORT || 3000; 

const router = require('./app/router'); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
	secret: process.env.SESSION_SECRET, 
	resave: true, // automatic saving of the session at the end of the request
	saveUninitialized: true, // create a session for the user in all cases, even if it is emptye
}));

app.use(router);

app.listen(PORT, ()=> {
	console.log(`listening on ${PORT}`);
});

