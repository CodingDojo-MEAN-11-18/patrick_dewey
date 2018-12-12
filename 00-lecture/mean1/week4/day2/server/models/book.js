const mongoose = require('mongoose');
const { Schema } = mongoose;
const BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  year: Number,
  publisher: String,
},{timestamps: true});

module.exports = mongoose.model('Book', BookSchema);
