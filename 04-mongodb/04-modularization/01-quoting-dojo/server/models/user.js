const mongoose = require('mongoose');
const { Schema  } = mongoose;

const UserSchema= new Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: {type: String, required: true, minlength:1, maxlength: 130}
}, {timestamps: true});

// Set Schema in our Models as "User"

module.exports = mongoose.model('User', UserSchema);

