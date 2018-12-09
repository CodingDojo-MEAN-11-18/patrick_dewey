const User = require('mongoose').model('User');

module.exports = {
    index(req, res) {
        res.render('index');
    },
    user(req, res) {
        const data = new User({name: req.body.name, quote: req.body.quote})
        data.save(function(err) {
            if(err){
                console.log("We have an error!")
    
                // for(var key in err.errors){
                //     request.flash('registration', err.errors[key].message);
                // }
                res.redirect('/');
            }
            else {
                console.log('Successfully created user!')
                res.redirect('/')
            }
    
        });
    },

    quotes(req, res) {
        const order = User.find({}).sort("-createdAt")
        console.log(order)
        User.find({}, function(err, users) {
            try {
                res.render('quotes', {user_data: users})
            } catch(err) {
                console.log(err)
            }
        });
    }
};