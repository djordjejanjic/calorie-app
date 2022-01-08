const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    calories: {type: Number, required: true},
    date: {type: Date, required: true},
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
