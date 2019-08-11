const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTE
app.get('/', (req,res) => {
	res.send('we are on home');
});

//Connect to DB
mongoose.connect(
	process.env.DB_CONNECTION,
 	{ useNewUrlParser: true },
 	() => console.log('Connected to DB')
 );

//Start listening
app.listen(9000);

