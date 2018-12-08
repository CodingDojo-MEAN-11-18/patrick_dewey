const express = require('express'),
    parser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path')

const port = process.env.PORT || 8000;
const app = express();

const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/books_n_authors', { useNewUrlParser: true })

mongoose.connection.on('connected', () => console.log('Mongo DB connected'));


app.set('views', path.resolve('views'));
app.set('view engine', 'ejs')

app.use(parser.urlencoded({extended:true}));

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    isAlive: {
        type: Boolean,
        default: true
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
}, {timestamps: true});
const BookSchema = new Schema({
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    pages: Number,
    year: Number,
    publisher: String
},{timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);

app.get('/', function(request, response){
    response.render('index');
});

app.get('/authors', function(request, response){
    Author.find({})
        .populate('books')
        .then(authors => {
            response.render('authors/index', { authors })
        })
        .catch(console.log);
});

app.get('/authors/new', function(request, response) {
    response.render('authors/new');
})

app.post('/authors', function(request, response) {
    console.log('creating author', request.body)

    Author.create(request.body)
        .then(author => {
            console.log('author created', author);
            response.redirect('authors/new')
        })
        .catch(console.log);
})

app.get('/books', function(request, response) {
    Book.find({})
        .populate('author')
        .then(books => {
            response.render('books/index', { books })
        })
        .catch(console.log)
})

app.get('/books/new', function(req, res) {
    Author.find({})
    .then(authors => {
        res.render('books/new', { authors })
    }).catch(console.log)
    
})

app.post('/books', function(req, res) {
    console.log('creating book', req.body)
    Book.create(req.body)
        .then(book => {
            console.log('book created', book)
            return Author.findById(book.author)
                .then(author => {
                    author.books.push(book._id);

                    return author.save();
                })
                .then(() => {
                    res.redirect('/books')
                });
        })
        .catch(console.log);
});
app.listen(port, () => console.log(`Express server listening on port ${port}`))