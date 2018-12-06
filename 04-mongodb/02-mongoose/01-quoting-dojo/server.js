// Require Express
const express = require('express');
// Create App
const app = express();
// Require body-parser 
const bodyParser = require('body-parser');
// integrate bodyParser with app
app.use(bodyParser.urlencoded({extended:true}));
// Require Path
const path = require('path');
// Set our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Set our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Set our view engine to ejs
app.set('view engine', 'ejs');
// require session
const session = require('express-session');
// set up flash
const flash = require('express-flash');

// connect mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
// Add user.js model
const User = require('./models/user')

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/user', (req,res,next) => {
    console.log('POST DATA', req.body)
    const data = new User({name: req.body.name, quote: req.body.quote})
    try {
        data.save();
        console.log('Successfully saved user');
        res.redirect('/');
    } catch (err) {
        next(err);
    }
});

app.get('/quotes', function(req,res,) {
    User.find({}, function(err, users) {
        try {
            console.log(users)
            res.render('quotes', {user_data: users})
        } catch(err) {
            next(err);
        }
    })
})
app.listen(8000, () => console.log(`Listening on Port 8000`))