const router = require('express').Router();

module.exports = router
  .use('/tasks', require('./task.routes'));