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
app.use(flash());

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
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/secrets', { useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('Mongo DB Connected'));
// Set up Models
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
    .then((found) => {
        if (found.length === 0){
            console.log('email not found')
            bcrypt.hash(req.body.password, 10)    
            .then(hashed => {
                // console.log(hashed)
                const user = new User({
                    email: req.body.email,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    password: hashed,
                    birthday: req.body.birthday
                });

                user.save(function(err){
                    if (err) {
                        console.log(err)
                        res.redirect('/')
                    }
                    else {
                        req.session.userID = user._id;
                        console.log('successfully saved user')
                        res.redirect('/')
                    }
                });
                
            })
            .catch(error => {
                console.log(error);
                
            })
        } else {
            console.log('Email already taken')
            res.redirect('/')
        }
    });

      
});

app.post('/login', function(req, res) {
    User.findOne({email: req.body.email})
    .then(found => {
        if (found.length === 0) {
            console.log('Email not in Database');
            res.redirect('/')
        } else {
            userID = found.id;
            bcrypt.compare(req.body.password,  found.password)
            .then((boolean) => {
                if(boolean === true) {
                    console.log('passwords match!')
                    res.redirect('/index')
                } else {
                    console.log(boolean)
                    console.log('passwords do not match')
                    res.redirect('/')
                }
            }) .catch(err => {
                console.log(err)
                res.redirect('/')
            })
        }
    }) .catch(error => {
        console.log(error)
    });
});

app.get('/index', function(req, res){
    res.render('index')
})
app.post('/secret', function(req, res) {
    console.log('creating secret...', req.body)
})
app.listen(port, () => console.log(`Express Server running on Port ${port}`));