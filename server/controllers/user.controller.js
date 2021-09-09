const {successRes, errorRes} = require('../common/response')
const userService = require('../services/user.services')

exports.createUser = async function (req, res, next) {
    userService.createUser(req.body)
        .then(successRes(res))
        .catch((err) => errorRes(res, err));
}

exports.getUsers = async function (req, res, next) {
    userService.getUsers(req)
        .then((users) => successRes(res, users))
        .catch((err) => errorRes(res, err));
}

exports.updateUser = async function (req, res, next) {
    userService.updateUser(req)
        .then((users) => successRes(res, users))
        .catch((err) => errorRes(res, err));
}

exports.deleteUser = async function (req, res, next) {
    userService.deleteUser(req)
        .then(successRes(res))
        .catch((err) => errorRes(res, err));
}
