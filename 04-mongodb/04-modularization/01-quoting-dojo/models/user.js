const mongoose = require('mongoose');


const UserSchema= new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    quote: {type: String, required: true, minlength:1, maxlength: 130}
}, {timestamps: true});
// Set Schema in our Models as "User"
const User = mongoose.model('User', UserSchema);


module.exports = User;