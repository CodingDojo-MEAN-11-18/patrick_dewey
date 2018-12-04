const express = require('express');
const path = require('path');
const parser = require('body-parser');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.static(path.resolve('static')));
app.use(parser.urlencoded({extended: true}));
app.use(session({
    secret:'thisissupersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge:60000}
}));

app.get('/', (req,res) => {

    res.render('index');
});


const server = app.listen(port, () => {console.log(`Listening on port ${port}`)});
const io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('posting_form', function(data) {
        let random = Math.floor((Math.random()*1000));

        socket.emit('random', {response: random});
        socket.emit('updated_message', {response: data});
    })
});


// app.post('/user', (req,res) => {
//     const userInfo = {
//         name: req.body.name ,
//         location: req.body.location ,
//         language: req.body.language ,
//         comment: req.body.textarea
//     }
//     req.session.info = userInfo;
//     console.log(userInfo);
//     res.redirect('/result');
// })

// app.get('/result', (req,res) => {
//     res.render('results', {user: req.session.info});
// })
