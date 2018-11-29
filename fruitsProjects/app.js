// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Requied']
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so sweet"
});

// fruit.save();

// create person schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

// create model of a person
const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
  name: 'Pineapple',
  score: 9,
  review: 'Great Fruit'
});

pineapple.save();

const person = new Person({
  name: 'Amy',
  age: 12,
  favoriteFurit: pineapple
});

person.save()

// Person.deleteMany({'name': 'John'}, function(err){
//   if(err){
//     console.log(err);
//   } else {
//     console.log('Deleted successfully all the docs');
//   }
// });
