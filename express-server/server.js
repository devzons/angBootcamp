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

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li></i><li>Code</li><li>Tennis</li></ul>");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

