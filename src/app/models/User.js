const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    fullname: { type: String, default: '', required: true },
    username: { type: String, default: '', required: true },
    email: { type: String, default: '', required: true },
    password: { type: String, default: '', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('User', User)