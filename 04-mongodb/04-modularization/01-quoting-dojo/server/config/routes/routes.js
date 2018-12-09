const userController = require('../../controllers/users');


module.exports = function(app){
    app.get('/', userController.index);
    app.post('/user', userController.user);
    app.get('/quotes', userController.quotes); 
}
