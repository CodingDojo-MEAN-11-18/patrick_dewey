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
app.use(express.static(path.join(__dirname, './client/static')));
// Set our Views Folder Directory
app.set('views', path.join(__dirname, './client/views'));
// Set our view engine to ejs
app.set('view engine', 'ejs');

app.use(session({
    cookie: {maxAge: 60000},
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}));
app.use(flash());


// connect mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
// Add user.js model
const User = require('./models/user');

require('./server/config/routes.js', (app));
app.listen(8000, () => console.log(`Listening on Port 8000`))