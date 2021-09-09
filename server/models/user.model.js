const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const validator = require('validator')

const userSchema = new Schema({
    _id: ObjectId,
    name: {type: String, required: true},
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [ validator.isEmail, 'invalid email' ]
    },
    city: {type: String, required: true},
    country: {type: String, required: true},
    updated_at: Date,
});

module.exports = mongoose.model('User', userSchema, 'users');