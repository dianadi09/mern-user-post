const User = require('../models/user.model')
const mongoose = require('mongoose')

exports.createUser = async function (body) {
    console.log(body.name);
    const data = {
        _id: new mongoose.Types.ObjectId(),
        name: body.name,
        email: body.email,
        city: body.city,
        country: body.country,
    }

    const newUser = new User(data);
    return newUser.save();
}

exports.getUsers = async function (req={}) {
    let users = [];
    if(req.params && req.params.id) {
        await User.findById(req.params.id)
            .then(user => {users.push(user)});
    } else {
        users = await User.find()
    }
    return users;
}

exports.updateUser = async function (req) {
    User.findById(req.params.id)
        .then(user => {
            user.name = req.body.name;
            user.email = req.body.email;
            user.city = req.body.city;
            user.country = req.body.country;

            return user.save();
        });
}

exports.deleteUser = async function (req) {
    return User.findByIdAndDelete(req.params.id);
}