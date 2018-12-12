const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');
module.exports = {
  index(request, response) {
    Book.find({})
      .populate('author')
      .then(books => {
        response.render('books/index', { books })
      })
      .catch(console.log);
  },
  new(request, response) {
    Author.find({})
      .then(authors => {
        response.render('books/new',{ authors })
      })
      .catch(console.log);
  },
  create(request, response) {
    console.log('getting books...', request.body)
    Book.create(request.body)
      .then(book => {
        return Author.findById(book.author)
          .then(author => {
            author.books.push(book._id);
            return author.save()
          })
          .then(() => {
            response.redirect('/books')
          })
          .catch(console.log);
      })
      .catch(console.log);
  },
};
