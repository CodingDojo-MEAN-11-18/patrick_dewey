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
mongoose.connect('mongodb://localhost/dashboard', { useNewUrlParser: true});

// Link Models Page to server.js
const Dog = require('./models/dog');

// Routes
app.get('/', (req, res) => {
    Dog.find({}, function(err, dogs) {
        try{
            res.render('index', {dog_data: dogs});
        } catch(err) {
            console.log("We have an error");
        }
    })
})

app.get('/new', (req, res) => {
    res.render('new');
})

app.post('/add', (req, res) => {
    const dogs = new Dog({
        name: req.body.name,
        breed: req.body.breed,
        trick: req.body.trick,
        age: req.body.age
    })
    dogs.save(function(err) {
        if(err) {
            console.log('We have an error')
            res.redirect('/new');
        } else {
            console.log('Successfully created user!')
            console.log(dogs)
            res.redirect('/new')
        }
        
    })
});

app.get('/:id', function(req, res){
    Dog.find({_id: req.params.id}, function(err, response) {
        if(err) {
            res.redirect('/')
        }
        res.render('show', {dog_data: response});
        
    })
});



// Listen for Server
app.listen(port, () => console.log(`Running on Port:${port}`));