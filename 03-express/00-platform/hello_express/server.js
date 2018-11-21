const express = require("express");

const app = express();
// console.log(app);

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
console.log(__dirname);
app.set('view engine', 'ejs')

app.get('/', function(request, response) {
    response.send("Hello express!");
    // console.log(request);
    // console.log(response);
    
});

app.get("/users", function(request, response) {
    // hard-coded user data
    const users_array = [
        {name: "Patrick", email: "patrick.t.dewey@gmail.com"},
        {name: "Patrick", email: "patrick.t.dewey@gmail.com"},
        {name: "Patrick", email: "patrick.t.dewey@gmail.com"},
        {name: "Patrick", email: "patrick.t.dewey@gmail.com"}
    ];
    response.render('users', {users: users_array});
})

app.listen(8000, function(){
    console.log("listening on 8000!");
})