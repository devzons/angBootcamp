const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result =  weight / (height * height);

    res.send("Your BMI is " + result);
});


app.listen(3000, function() {
  console.log("Server has started on port 3000");
});