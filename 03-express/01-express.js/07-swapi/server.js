const express = require('express');
const path = require('path');
const parser = require('body-parser');
const axios = require('axios');
const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));

app.get('/', (req,res)=> {
    res.render('index');
});

app.get('/people', (req,res) => {
    info = 'people';
    axios.get('http://swapi.co/api/people/?page=2')
    .then(content => {
        console.log(content.data);
        res.json(content.data);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});

app.get('/planets', (request,response) => {
    info = 'planets';
    axios.get('http://swapi.co/api/planets/')
    .then(content => {
        console.log(content.data)
        response.json(content.data);
    })
    .catch(error => {
        response.json(error);
    })
});


app.listen(port, () => console.log(`Express server running on port ${port}`));