# angBootcamp

## slice(x,y)

```
console.log(prompt("compose your tweet").slice(0,140));
```
## toUpperCase(), toLowerCase()

```
var name = "John";
name = name.toUpperCase(); // JOHN
name = name.toLowerCase(); // john
name = name.slice(0,1).toUpperCase() + name.slice(1, name.length).toLowerCase(); // John capitalize
```

## Number

## Math

```
Math.pow(base, exponent)
Math.round()
Math.floor()
Math.ceil()
Math.random()
  Math.floor(Math.random() * 6);
```

## DOM

```
document.firstElementChild
document.firstElementChild.firstElementChild
```

### Properties

  innterHTML
  style
  firstChild

### Methods

  click()
  appendChild()
  setAttribute()

```
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
```

### Separation of Concerns:

Structure   html
Style       css
Behaviour   js

```
document.querySelector("button").classList.add("invisible")
document.querySelector("button").classList.remove("invisible")
document.querySelector("button").classList.toggle("invisible")
```

innerHTML
textContent

### Attributes

```
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://yahoo.com");
```

## Adv JS and DOM

### Higher order functions and passing functions as arguments

```
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator){
  return operator(num1, num2);
}

```

## More of javascript object

### Constructor Function

```
function Person(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.goShopping = function() {
    alert("Lets go shopping:);
    getList();
    move();
  }
}
```
Initialize Object

```
var person1 = new Person("Jane", 21, true, ["French", "German"]);
```
ex
```
function Housekeeper(hasExperience, name, skill){
  this.hasExperience = hasExperience;
  this.name = name;
  this.skill = skill;
  this.clean = function() {
    alert("Cleaning in progress...);
  }
}

var housekeeper1 = new Housekeeper(15, "Janie", ["front", "bedroom"]);
var housekeeper1.clean();
```

## Methods


```
switch (key) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  
  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  
  case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "l":
    var kickBass = new Audio("sounds/kick-bass.mp3");
    kickBass.play();
    break;
  
  case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  default:
    console.log("Wrong key");

}
```

## Keyboard

keypress
keyup

```
document.addEventListener("keypress", function(event) {
  alert("A key was pressed!);
});
```



## NODEJS

### REPL (Read Evaluation Print Loops)

// jshint esversion:6
```
// jshint esversion:6

const fs = require('fs');

fs.copyFileSync("file1.txt", "file2.txt");
```

## Root and Route

```
//jshint esversion:6

const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello, world!</h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>This is my About Page</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>Contact me at: dev@gmail.com</h1>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```

install nodemon

```
npm install -g nodemon
```

## body parser

```
npm install body-parser

// app.js
// jshint esversion:6cd

const express     = require("express");
const bodyParser  = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.listen(3000, function(){
  console.log("Server started");
});

// index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Calculator</title>
</head>
<body>
  <h1>Calculator</h1>
  <form action="/" method="post">
    <input type="text" name="num1" placeholder="First Number">
    <input type="text" name="num2" placeholder="Second Number">
    <button type="submit" name="submit">Calculate</button>
  </form>
</body>
</html>

```

## API Bitcoin Ticker

```
npm install request
```

JSON
```
var wardrobe = {
  door: 2,
  drawers: 2,
  color: "red"
}

// object to json data
var objToJson = JSON.stringify(wardrobe);
{"door":2,"drawers":2,"color":"red"}

// json to object
var jsonToObj = JSON.parse(objToJson);

// index.js
const express = require('express'),
      bodyParser = require('body-parser'),
      request = require('request');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var crypto = req.body.crypto;
  var fiat = req.body.fiat;

  var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

  var finalURL = baseURL + crypto + fiat;
  
  request(finalURL, function(error, resolution, body){
    
    var data = JSON.parse(body);
    var price = data.averages.week;
    var currentDate = data.display_timestamp;

    res.write("<p>The current date is " + currentDate + "</p>");
    
    res.write("<h1>The price of " + crypto + " is " + price + fiat + "</h1>");
    
    res.send();
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
});

//index.html
<h1>Bitcoin Ticker</h1>
  <form action="/" method="post">
    <select name="crypto">  
      <option value="BTC">Bitcoin</option>
      <option value="ETH">Ethereum</option>
      <option value="LTC">Litecoins</option>
    </select>

    <select name="fiat">  
      <option value="USD">US Dollars</option>
      <option value="GBP">GB Pounds</option>
      <option value="EUR">EU Euros</option>
    </select>
    <button type="submit" name="button">Check</button>
  </form>
```

## Branch

```
git branch test-branch
git branch                // check branches
git checkout test-granch  // switch to branch
git add .
git commit -m "Modify...."

git branch
git checkout master
git merge test-branch
git push master origin
```


## APIs

```
curl https://www.google.com
```






## MailChimp Newsletter Sign up App

```
// jslint esversion:6

var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName  = req.body.lName;
    var email     = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us19.api.mailchimp.com/3.0/lists/f19ab1c35b",
        method: "POST",
        headers: {
            "Authorization": "devzons1 c0fedb104fe1dace5de10b469229e6db-us19"
        },
        body: jsonData
    }

    request(options, function(error, response, body){
        if(error){
            res.sendFile(_dirname + "/failure.html");
        } else {
            if(response.statusCode === 200){
                res.sendFile(__dirname + "/success.html");
            } else {
                res.sendFile(_dirname + "/failure.html");
            }
        }
    });
});

app.post("/failure", function(req, res){
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
});

// api: c0fedb104fe1dace5de10b469229e6db-us19

// listID: f19ab1c35b

// signup.html
<form class="form-signin" method="post" aciton="/">
  <img class="mb-4" src="img/logo_up.png" alt="logo" width="150" height="150">
  <h1 class="h3 mb-3 font-weight-normal">Signup to my Newsletter</h1> 
  <input type="text" name="fName" class="form-control top" placeholder="First Name" required autofocus>
  <input type="text" name="lName" class="form-control middle" placeholder="Last Name" required>
  <input type="email" name="email" class="form-control bottom" placeholder="Email" required>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Me Up!</button>
  <p class="mt-5 mb-3 text-muted">&copy; SolarFuel</p>
</form>

// Procfile
web: node app.js

```

## HEROKU

```
$ heroku login

$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

## Template

```
// jshing esversion:6

var express = require("express"),
    bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay.getDay === 6 || currentDay.getDay === 0){
        res.write("<h1>Yay it's the weekend</h1>");
        res.write("<p>Let's go surfing!</p>");
        res.send();
    } else {
        res.write("<h1>Nay! I have to work</h1>");
        res.write("<p>It is not the weekend.</p>");
        res.send();
    }
});

app.listen(3030, function() {
    console.log("Server is running on the port 3030.");
});

//===>
var express = require("express"),
    bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay.getDay === 6 || currentDay.getDay === 0){
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }
});

app.listen(3030, function() {
    console.log("Server is running on the port 3030.");
});
```

## EJS Templating

ejs.co

```
// jshing esversion:6

var express = require("express"),
    bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Error!");
    }
    res.render("list", {
        day: day    
    });
});

app.listen(3030, function() {
    console.log("Server is running on the port 3030.");
});

// list.ejs -> views/list.ejs

<body>
    <h1>It's a <%= day %>!</h1>    
</body>

```

## Running code inside the EJS template

```
// list.ejs
<body>
<% if (day === "Saturday" || day === "Sunday") { %>
    <h1 style="color: purple"><%= day%> ToDo List</h1>
<% } else { %>
    <h1 style="color: blue"><%= day%> ToDo List</h1>
<% } %>    
</body>
```

## TODO List V1

```
// app.js
// jshing esversion:6

var express = require("express"),
    bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", { day: day, items: items });
});

app.post("/", function(req, res){

    var item = req.body.item;
    items.push(item);

    res.redirect("/");
});

app.listen(3030, function() {
    console.log("Server is running on the port 3030.");
});

// list.ejs
<body>

    <h1><%= day %></h1>

    <ul>
        <% items.forEach(function(item){ %>
            <li><%= item %></li>
        <% }); %>
    </ul>

    <form class="" action="/" method="post">
        <input type="text" name="item">
        <button type="submit" name="button">Add List</button>
    </form>

</body>


```


## SCOPE Concept

var : global

let : local

const : local, can't change value once it is set a value

```
// app.js -- change var to let
// jshing esversion:6

const express = require("express"),
      bodyParser = require("body-parser");

const app = express();

let items = ["list one", "list two", "list 3"];

// default engin for EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   // get today
   let today = new Date();

   let options = {
       weekday: "long",
       day: "numeric",
       month: "long"
   };

   let day = today.toLocaleDateString("en-US", options);
   
   // render
   res.render("list", {day: day, items: items});
    
});

app.post("/", function(req, res){

    let item = req.body.item;
    items.push(item);

    res.redirect("/");
});


app.listen(3030, function() {
    console.log("Server is running on port 3030");
});

// CSS

html {
  background-color: #E4E9FD;
  background-image: -webkit-linear-gradient(65deg, #A683E3 50%, #E4E9FD 50%);
  min-height: 1000px;
  font-family: 'helvetica neue';
}

h1 {
  color: #fff;
  padding: 10px;
}

.box {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
}

#heading {
  background-color: #A683E3;
  text-align: center;
}

.item {
  min-height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F1F1F1;
}

.item:last-child {
  border-bottom: 0;
}

input:checked+p {
  text-decoration: line-through;
  text-decoration-color: #A683E3;
}

input[type="checkbox"] {
  margin: 20px;
}

p {
  margin: 0;
  padding: 20px;
  font-size: 20px;
  font-weight: 200;
  color: #00204a;
}

form {
  text-align: center;
  margin-left: 20px;
}

button {
  min-height: 50px;
  width: 50px;
  border-radius: 50%;
  border-color: transparent;
  background-color: #A683E3;
  color: #fff;
  font-size: 30px;
  padding-bottom: 6px;
  border-width: 0;
}

input[type="text"] {
  text-align: center;
  height: 60px;
  top: 10px;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 200;
  width: 313px;
}

input[type="text"]:focus {
  outline: none;
  box-shadow: inset 0 -3px 0 0 #A683E3;
}

::placeholder {
  color: grey;
  opacity: 1;
}

footer {
  color: white;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
}


```

## Templating VS Layout

```
// date.js
// jshing esversion:6

module.exports.getDate = function() {

  const today = new Date();

  const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

module.exports.getDay = function() {

  const today = new Date();

  const options = {
      weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

// app.js - new
// jshing esversion:6

const express = require("express"),
      bodyParser = require("body-parser"),
      date = require(__dirname + "/date.js");

const app = express();

const items = ["list one", "list two", "list 3"];
const workItems = [];

// default engin for EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
   const day = date.getDate();
   
   // render
   res.render("list", {listTitle: day, newListItems: items});
    
});

app.post("/", function(req, res){
    console.log(req.body.list);
    const item = req.body.newItem;

    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    } 
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3030, function() {
    console.log("Server is running on port 3030");
});

```


## Database

### MongoDB

```
// Terminal

cd ~

touch .bash_profile

vim .bash_profile

// i for insert text
// esc from get out of i
// :wq!

```

MongoDB CRUD

```
use shopDB
db.products.insertOne({})

db.products.find()

db.products.find({price: {$gt: 1}})
db.products.find({_id: 1}, {name: 1})
```
UPDATE
```
db.products.updateOne({_id: 1}, {$set: {stock: 32}})
```
DELETE
```
db.products.deleteOne({_id: 2})
```

### Relationships in MongoDB

```
db.products.insert(
  {
    _id: 2,
    name: "Pencil",
    price: 0.80,
    stock: 43,
    reviews: [
      {
        authorName: "Sally",
        rating: 5,
        review: "Best pencil ever!"
      },
      {
        authorName: "John",
        rating: 5,
        review: "Awesome pencil!"
      }
    ]
  }
)

db.products.insert(
  {_id: 1},
  {$set: {
    reviews: [
      {
        authorName: "Jane",
        rating: 4.9,
        review: "Almost perfect"
      },
      {
        authorName: "Paul",
        rating: 5,
        review: "Great fit for my needs"
      }
    ]
  }}
)
```

### MongoDB with Nodejs

```
// jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit"
    },
    {
      name: "Orange",
      score: 6,
      review: "Sour"
    },
    {
      name: "Banana",
      score: 9,
      review: "Great for old"
    }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
}
```

## Mongoose

```
// jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Red apples are red"
});

// fruit.save();

// create person schema
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create model of a person
const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: 'John',
  age: 37
});

// person.save()

// insert data
const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "King of the fruit"
});

const orange = new Fruit({
  name: "Orange",
  score: 6,
  review: "Sour"
});

const banana = new Fruit({
  name: "Banana",
  score: 10,
  review: "Long and sweet"
});

Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});


```

### Read db using mongoose

```
// mongo
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
}

// mongoose
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();
    
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});


```

### Data Validation with Mongoose

```
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

```

### Updating and Deleting Data using Mongoose

```
// find
Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// update
Fruit.updateOne({_id: '5c003c8b9701d231880bc7db'}, {name: 'Peach'}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log('Successfully updated the document');
  }
});

// delete
Fruit.deleteOne({name: 'Peach'}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Successfully deleted the document');
  }
});

```