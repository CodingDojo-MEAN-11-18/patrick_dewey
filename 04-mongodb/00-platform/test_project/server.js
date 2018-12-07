// Require the Express Module
const express = require('express');
// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients!)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended: true}));
// Require Path
const path = require('path');
// Set our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Require Mongoose for database integration
const mongoose = require('mongoose');
// This is how we connect to the mongod database server using mongoose -- "basic_mongoose" is the name of
// our db in mongodb --this should math the name of the db you are going to use for your project
mongoose.connect('mongodb://localhost/test_project_db', { useNewUrlParser: true });
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine to EJS
app.set('view engine', 'ejs');
// set up other middleware such as session
const flash = require('express-flash');
app.use(flash());
// Database
const UserSchema= new mongoose.Schema({
    name: { type: String, required: true, minlength: 6 },
    age: {type: Number, required: true, min:1, max: 130}
}, {timestamps: true});
// Set Schema in our Models as "User"
mongoose.model('User', UserSchema);
// Retrieve this Schema from our Models, name "User"
const User = mongoose.model('User');
// Routes
// Root Request
app.get('/', function(req,res) {
    User.find({}, function(err, users) {
    // this is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the
    // callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    // happen inside of this callback for it to be synchronous
    // Make sure you handle the case when there is an error, as well as the case when there is no error
    try { 
        console.log(users);
        res.render('index', {user_data: users});
    } catch(err) {
        next(err);
    }
});
});
// Add User Request
app.post('/users', function(req, res, next) {
    console.log('POST DATA', req.body);
    // this is where we would add the user from req.body to the database.
    // create a new User with the name and age corresponding to those from req.body
    const user = new User({name: req.body.name, age: req.body.age});
    // try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error if any from the operation
    try {
        user.save();
        console.log('Successfully saved user instance');
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});
// 
app.use((err, req, res, next) => {
    res.json(err);
});

// setting our server to Listen on Port: 8000
app.listen(3001, function () {
    console.log("Listening on port 8000");
});