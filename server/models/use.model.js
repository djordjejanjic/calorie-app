const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, minLength: 3, unique: true},
    password: {type: String, required: true, minLength: 7, unique: false},
    email: {type: String, required: true, unique: false}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
