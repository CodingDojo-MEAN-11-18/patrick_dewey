const Author = require('mongoose').model('Author');

module.exports = {
  index(request, response) {
    Author.find({})
      .populate('books')
      .then(authors => {
        response.render('authors/index', { authors });
      })
      .catch(console.log);
  },
  show(request, response) {
    Author.findById(request.params.id)
      .populate('books')
      .then(author => {
        console.log(author);
        response.render('authors/show', { author })
      })
      .catch(console.log);
  },
  edit(request, response) {
    Author.findById(request.params.id)
      .populate('books')
      .then(author => {
        console.log(author);
        response.render('authors/edit', { author })
      })
      .catch(console.log);
  },
  new(request, response) {
    response.render('authors/new');
  },
  create(request, response) {
    console.log('creating author...', request.body);
    Author.create(request.body)
      .then(author => {
        console.log('Created author', author);
        response.redirect('/authors')
      })
      .catch(console.log);
  },
  update(request, response) {
    Author.findByIdAndUpdate(request.params.id, request.body)
      .then(() => {
        response.redirect('/authors');
      })
      .catch(console.log);
  },
  delete(request, response) {
    Author.findByIdAndRemove(request.params.id)
      .then( () => {
        response.redirect('/authors/index')
      })
      .catch(console.log);

  },
};
