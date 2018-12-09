const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');




app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');



require('./server/config/database.js');


require('./server/config/routes/routes.js')(app);
app.listen(8000, () => console.log(`Listening on Port 8000`))