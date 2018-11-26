// jshing esversion:6

const express = require("express"),
      bodyParser = require("body-parser");

const app = express();

const items = ["list one", "list two", "list 3"];

// default engin for EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   // get today
   var today = new Date();

   var options = {
       weekday: "long",
       day: "numeric",
       month: "long"
   };

   var day = today.toLocaleDateString("en-US", options);
   
   // render
   res.render("list", {day: day, items: items});
    
});

app.post("/", function(req, res){

    var item = req.body.item;
    items.push(item);

    res.redirect("/");
});


app.listen(3030, function() {
    console.log("Server is running on port 3030");
});