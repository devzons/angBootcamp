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