const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));

app.get('/', function(req, res) {
    res.render('dogs');
})

app.get('/white', function(req, res) {
    res.render('white');
})

app.listen(port, () => console.log(`Express listening on port ${port}`))