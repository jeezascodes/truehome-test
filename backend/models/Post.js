const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	image: String,
	price: String,
	adress: Array,
	personal: Array

});

module.exports = mongoose.model('Posts', PostSchema);