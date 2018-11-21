const express = require('express');
const path = require('path');
const parser = require('body-parser');


const app = express();
// const port = process.env.PORT ? process.env.PORT : 8000;
const port = process.env.PORT || 8000;

const names=['patrick', 'david', 'tyler', 'carly']

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(parser.urlencoded({extended: true}));


app.get('/', function(request, response) {
    // console.log('at the index', request);

    response.render('index');
});

app.post('/names', function(request, response) {
    console.log('posting', request.body);
    names.push(request.body.name);

    // response.render('results', {
    //     name: request.body.name,
    //     names
    // })

    response.redirect('/');
})

app.get('/names/:id', function(request, response) {
    console.log(request.params)
    response.send(names[request.params.id]);
})

console.log(port);
app.listen(port, () => console.log(`Express server listening on port ${port} `))