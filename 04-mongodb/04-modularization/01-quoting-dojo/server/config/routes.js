const mongoose = require('mongoose');
const User = mongoose.model('User')
module.exports = function(app){
    app.get('/', (req,res) => {
        res.render('index')
    })
    
    app.post('/user', (req,res) => {
        const data = new User({name: req.body.name, quote: req.body.quote})
        data.save(function(err) {
            if(err){
                console.log("We have an error!")
    
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                res.redirect('/');
            }
            else {
                console.log('Successfully created user!')
                res.redirect('/')
            }
    
        })
    });
    
    app.get('/quotes', function(req,res,) {
        const order = User.find({}).sort("-createdAt")
        console.log(order)
        User.find({}, function(err, users) {
            try {
                res.render('quotes', {user_data: users})
            } catch(err) {
                next(err);
            }
        })
    })
}