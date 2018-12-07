// Require Mongoose
const mongoose = require('mongoose');

// Create new Schema

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Posts must contain a name"]},
    content: {type: String, required: [true, "comments must have content"]}
}, {timestamps: true});
const PostSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Posts must contain a name"]},
    content: {type: String, required: [true, "Posts must have content"]},
    comments: [CommentSchema]
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);
const Post = mongoose.model('Post', PostSchema);

