// Requires
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    port = 3000,
    session = require('express-session'),
    flash = require('express-flash')
// Create Express App
const app = express();

// Initialize Session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'this is a cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
// Use Flash
app.use(flash())
// Use body-parser to parse post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use/Set Static Folder, Views Folder, View Engine
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

// Routes


// Connect mongoose to mongodb
mongoose.connect('mongodb://localhost/message_board', { useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('Mongo connected'));

// Models

// Listen
app.listen(port, ()=>console.log(`Express app running on Port: ${port}`));
