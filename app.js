//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const disc = require("./discordFunc")

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
app.get("/club/signup", function(req, res){
  res.render("signup");
});
app.get("/thanks", function(req, res){
  res.render("thanks");
});

app.post('/club/signup', async function (req, res) {
  console.log(req.body.fName);
  console.log(req.body.lName);
  console.log(req.body.emailInput);
  console.log(req.body.attendFirst);
  console.log(req.body.attendFuture);
  let attend1st = "No";
  if(req.body.attendFirst){
    attend1st = "Yes";
  }
  let attendFut = "No";
  if(req.body.attendFuture){
    attendFut = "Yes";
  }
  let message = "First Name: " + req.body.fName + "\nLast Name: " + req.body.lName + "\nEmail: " + req.body.emailInput + "\nWill Attend First Meeting: " + attend1st + "\nWill Attend Future Meetings: " + attendFut + "\n---------------------------------------------------------------"
  disc.sendMessage(message);
  res.redirect("/thanks");
  //res.redirect("/");
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
