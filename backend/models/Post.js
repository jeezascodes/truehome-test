
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	image: String,
	price: String,
	adress: {
		zip: String,
		colonia: String,
		calle: String,
		numero: Number,
	},
	personal: {
		name: String,
		email: String,
		phone: String,
	}

});

module.exports = mongoose.model('Posts', PostSchema);