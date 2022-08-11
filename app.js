//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
  res.render("home");
});

app.get("/otherinfo", function(req, res){
  res.render("other");
});
app.get("/meettheteam", function(req, res){
  res.render("meet");
});
app.get("/projects", function(req, res){
  res.render("projects");
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
