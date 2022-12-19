require('dotenv').config(); 
const cors = require('cors');
const express = require('express'); 

const app = express(); 

app.use(cors({
	origin : 'http://nomdunvin.margauxperrier.fr'
}));

const PORT = process.env.PORT || 3000; 

const router = require('./app/router'); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

app.listen(PORT, ()=> {
	console.log(`listening on ${PORT}`);
});

