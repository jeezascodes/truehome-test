const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req,res) => {
	try{
		const posts = await Post.find();
		res.json(posts)
	}catch(err) {
		res.json({message: err})
	}
});


//SUBMIT POST
router.post('/', async (req,res) => {
	const post = new Post({
		image: req.body.image,
		price: req.body.price,
		adress: req.body.adress,
		personal: req.body.personal
	});

	try{
		const savedPost = await post.save();
		res.json(savedPost);	
	}catch(err) {
		res.json({message: err})	
	}
});

//SPECIFIC POST 
router.get('/:postId', async (req,res) => {
	
	try{
		const post = await Post.findById(req.params.postId);
		res.json(post);	
	}catch(err) {
		res.json({message: err});	
	}
});

//Update post 
router.patch('/:postId', async (req,res) => {
	try{
		const updatedPost = await Post.updateOne(
			{ _id: req.params.postId }, 
			{ $set: {image: req.body.image,price: req.body.price,adress: req.body.adress,personal: req.body.personal} }
		);
		res.json(updatedPost);
	}catch(err){
		res.json({message: err});
	}
	
});

module.exports = router;
