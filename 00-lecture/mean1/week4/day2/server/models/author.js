const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  isAlive: {
    type: Boolean,
    default: true
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {timestamps: true});
module.exports = mongoose.model('Author', AuthorSchema);
