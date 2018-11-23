const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');


const app = express();
// console.log(app);

let count = 0;

// console.log(parser);

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.static(path.join(__dirname,'/static')));
app.use(parser.urlencoded({extended: true}));
// initializing session
app.use(session({
    secret: 'geckoisplaying',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}))


app.get('/', (req, res) => {

    res.render('index', {counter: increment(req)});
});

function increment(req) {
    return req.session.counter = req.session.counter ? req.session.counter + 1: 1;
}


app.listen(port)