const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller')

router.get('/', PostController.getPosts)
router.get('/:id', PostController.getPosts)
router.post('/create', PostController.createPost)
router.post('/delete/:id', PostController.deletePost)
router.post('/update/:id', PostController.updatePost)

module.exports = router;