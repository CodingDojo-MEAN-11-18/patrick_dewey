// Requires
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 3000

// Create Express App
const app = express();

// Use body-parser to parse post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use/Set Static Folder, Views Folder, View Engine
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

// Connect mongoose to mongodb
mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true});
// Models
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

// Routes
app.get('/', function(req, res) {
    res.render('index')
})





// Listen
app.listen(port, ()=>console.log(`Express app running on Port: ${port}`));
