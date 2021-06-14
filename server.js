var express = require("express");
var path = require("path");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('static'));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/index.html"));
});

app.get("/listings", function(req,res){
    res.sendFile(path.join(__dirname,"/views/listings.html"));
});

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/views/login.html"));
});

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/views/register.html"));
});

app.use((req, res) => {
    res.status(404).send("Page not found")
})

app.listen(HTTP_PORT);