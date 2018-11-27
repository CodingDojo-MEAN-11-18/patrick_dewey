const express = require('express');
const path = require('path');
const parser = require('body-parser');
const axios = require('axios');
const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve('static')));

app.get('/', (req,res)=> {
    res.render('index');
});

app.get('/people', (req,res) => {
    axios.get('http://swapi.co/api/people/?page=2')
    .then(data => {
        console.log(data);

        res.json(data.results);
    })
    .catch(error => {
        console.log(error);
        res.json(error);
    })
});


app.listen(port, () => console.log(`Express server running on port ${port}`));