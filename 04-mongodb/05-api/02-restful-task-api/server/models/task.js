const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  }
}, {timestamps: true});
module.exports = mongoose.model('Task', TaskSchema);
