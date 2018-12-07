// Require Express
const express = require('express');
// Require Session
const session = require('express-session');
// Require Flash
const flash = require('express-flash');
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

app.use(session({
    cookie: {maxAge: 60000},
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
app.use(flash())


// connect mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
// Add user.js model
const User = require('./models/user')

app.get('/', (req,res) => {
    res.render('index')
})

app.post('/user', (req,res) => {
    const data = new User({name: req.body.name, quote: req.body.quote})
    data.save(function(err) {
        if(err){
            console.log("We have an error!")

            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            console.log('Successfully created user!')
            res.redirect('/')
        }

    })
});

app.get('/quotes', function(req,res,) {
    const order = User.find({}).sort("-createdAt")
    console.log(order)
    User.find({}, function(err, users) {
        try {
            res.render('quotes', {user_data: users})
        } catch(err) {
            next(err);
        }
    })
})
app.listen(8000, () => console.log(`Listening on Port 8000`))