const {successRes, errorRes} = require('../common/response')
const postService = require('../services/post.services')

exports.createPost = async function (req, res, next) {
    postService.createPost(req.body)
        .then(successRes(res))
        .catch((err) => errorRes(res, err));
}

exports.getPosts = async function (req, res, next) {
    postService.getPosts()
        .then((posts) => successRes(res, posts))
        .catch((err) => errorRes(res, err));
}

exports.updatePost = async function (req, res, next) {
    postService.updatePost(req)
        .then((posts) => successRes(res, posts))
        .catch((err) => errorRes(res, err));
}

exports.deletePost = async function (req, res, next) {
    postService.deletePost(req)
        .then(() => successRes(res))
        .catch((err) => errorRes(res, err));
}