const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
const reg = new RegExp('\\.js$', 'i')
// create a variable that points to the models folder
const models_path = path.resolve('server', 'models');

mongoose.Promise = global.Promise;
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
  if (reg.test(file)) {
      require(path.join(models_path, file));
  }
});
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Connected to mongodb'))