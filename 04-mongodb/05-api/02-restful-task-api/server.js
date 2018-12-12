const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}))

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`Express server listening on port ${port}`));
