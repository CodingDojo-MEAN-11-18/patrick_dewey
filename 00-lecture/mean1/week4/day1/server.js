const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/animals',{ 
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => console.log('Mongo Connected')); 

// const Schema = mongoose.Schema;

const { Schema } = mongoose;
const AnimalSchema = new Schema({
    name: String,
    legs: Number,
    
})

// const o = {
//     a: 'this is a',
//     b: 'this is b'
// }

// const {a, b} = o;
// console.log(a, b)

