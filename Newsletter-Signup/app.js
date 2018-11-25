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