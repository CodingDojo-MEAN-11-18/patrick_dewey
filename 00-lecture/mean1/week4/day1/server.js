// Refer back to database creation!


const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/animals',{ 
    useNewUrlParser: true,
});

mongoose.connection.on('connected', () => console.log('Mongo Connected')); 


const { Schema } = mongoose;

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        minlength: [3, "Name must be atleast 3 chars"],
        maxlength: [10, "Name cannot be longer than 10 chars"]
    },
    legs:{
        type: Number,
        required: [true, "Must have a minimum of 0 legs!"],
        min: [0, "You must enter a digit between 0 and 4"],
    },
    species: {
        type: String,
        required: [true, 'Provide a species'],
        enum: ['Dog', 'Cat', 'Lizard']
    },
    isPet: {
        type:Boolean ,
        required: true,
        default: true
    },
    
})
const Animal = mongoose.model('Animal', AnimalSchema)


const animal = new Animal({
    name: 'Patrick',
    legs: 4,
    species: 'Dog',
});
animal.save()
    .then(savedAnimal => {
        console.log('save')
    })
    .catch(error => {

        // const errors = [];
        const errors = Object.keys(error.errors).map(key =>  error.errors[key].message)

        console.log(errors)
    })

Animal.findById('5c0af7a3d349ad0d0b5aafe7')
    .then(animal => {
        console.log('animal:', animal)
        
        animal.name = 'Barry'

        return animal.save()
            .then(saved => console.log(saved))
    })
    .catch(error => console.log(error));



