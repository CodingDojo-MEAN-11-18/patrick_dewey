// Requires
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcryptjs');

// Create Express App
const app = express();
// Use Flash Messages
app.use(flash())

// Use Session
app.use(session({
    secret: 'sdkjfhasdl',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// Use body-parser to parse post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use/Set Static Folder, Views Folder, View Engine
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

// Connect mongoose to mongodb
mongoose.connect('mongodb://localhost/dojo_secrets', { useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('Mongo DB Connected'));

// Set up Models
const { Schema } = mongoose;
// Comment Schema
const CommentSchema = new Schema({
    comment: {
        type: String,
        required: [true, 'Comment cannot be empty']
    }
})
const Comment = mongoose.model('Comment', CommentSchema);
// Secret Schema
const SecretSchema = new Schema({
    secret: {
        type: String,
        required: [true, 'Secret cannot be empty']
    },
    comments: [CommentSchema]
})
const Secret = mongoose.model('Secret', SecretSchema);
// User Schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        minlength: 6,
        maxlength: 20
    },
    first_name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 10
    },
    last_name: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 10
    },
    password: {
        type: String,
        required: [true, 'Please provide a name'],
        minlength: 3,
        maxlength: 15
    },
    birthday: {
        type: String,
        required: [true, 'Require Birthdate']
    },
    secrets: [SecretSchema]

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

// Routes
app.get('/', function(req, res) {
    res.render('login');

})

app.post('/register', function(req, res) {
    console.log('creating user...')
    User.find({email: req.body.email})
        .then( query => {
            if(query.length === 0 & req.body.password == req.body.password_conf){
                console.log('email not used')
                console.log('passwords match')
                
            }
        })
        .catch(console.log('theres an error'))

    // res.redirect('/')
})

app.post('/secret', function(req, res) {
    console.log('creating secret...', req.body)
})

app.listen(port, () => console.log(`Express Server running on Port ${port}`));