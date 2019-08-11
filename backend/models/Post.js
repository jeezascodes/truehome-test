
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	image: String,
	price: String,
	adress: {
		zip: String,
		neighborhood: String,
		street: String,
		number: Number,
	},
	personal: {
		name: String,
		email: String,
		phone: String,
	}

});

module.exports = mongoose.model('Posts', PostSchema);