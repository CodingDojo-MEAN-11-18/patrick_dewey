const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');
app.use(parser.urlencoded({extended: true}));


require('./server/config/database');
app.use(require('./server/config/routes'));

app.listen(port, () => console.log(`Express server listening on port ${port}`));
