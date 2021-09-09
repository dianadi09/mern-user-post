const Post = require('../models/post.model')
const mongoose = require('mongoose')

exports.createPost = async function (body) {
    const data = {
        _id: new mongoose.Types.ObjectId(),
        title: body.title,
        content: body.content,
        posted_by: body.posted_by,
        updated_at: new Date(),
    }

    const newPost = new Post(data);
    return newPost.save();
}

exports.getPosts = async function (req={}) {
    let posts = [];
    if(req.params && req.params.id) {
        await Post.findById(req.params.id)
            .then(post => {posts.push(post)});
    } else {
        posts = await Post.find()
    }
    return posts;
}

exports.updatePost = async function (req) {
    Post.findById(req.params.id)
        .then((post) => {
            post.title = req.body.title;
            post.content = req.body.content;
            post.updated_at = new Date();

            return post.save();
        });
}

exports.deletePost = async function (req) {
    return Post.findByIdAndDelete(req.params.id);
}