// Require Mongoose
const mongoose = require('mongoose');


// Create new Schema

const DogSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    breed: {type: String, required: true, minlength: 3, maxlength: 15},
    trick: {type: String, required: true, minlength: 3},
    age: {type: Number, min: 1, max: 30}
}, {timestamps: true});

const Dog = mongoose.model('Dog', DogSchema);

module.exports = Dog;

