const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const postSchema = new Schema({
    _id: ObjectId,
    title: {type: String, required: true},
    content: {type: String, required: true},
    posted_by: {type: String, required: true},
    updated_at: Date,
});

module.exports = mongoose.model('Post', postSchema, 'posts');