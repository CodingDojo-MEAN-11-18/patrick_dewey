const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(parser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function(request, response) {
    console.log('at index');
    response.render('index');
})

app.get('/ejs', function(request, response) {
    response.render('ejs')
})

app.listen(port, () => console.log(`Express server listening on port ${port}`))