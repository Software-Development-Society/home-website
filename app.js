//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const disc = require("./discordFunc");
const db = require("./db")

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", function (req, res) {
  res.render("home");
  disc.sendMessage2("Someone has visited the site!");
});

app.get("/otherinfo", function (req, res) {
  res.render("other");
});
app.get("/meettheteam", function (req, res) {
  res.render("meet");
});
app.get("/projects", function (req, res) {
  res.render("projects");
});
app.get("/club/signup", function (req, res) {
  res.render("signup");
  disc.sendMessage2("Someone has visited the sign up page!");
  
});
app.get("/thanks", function (req, res) {
  let name = req.query.name;
  res.render("thanks", { name: name });
});

app.post('/club/signup', async function (req, res) {
  
  let attend1st = "No";
  if (req.body.attendFirst) {
    attend1st = "Yes";
  }
  let attendFut = "No";
  if (req.body.attendFuture) {
    attendFut = "Yes";
  }
  let doc = { firstName: req.body.fName, lastName: req.body.lName, email: req.body.emailInput, attendFirst: attend1st, attendFuture: attendFut }
  let message = "First Name: " + req.body.fName + "\nLast Name: " + req.body.lName + "\nEmail: " + req.body.emailInput + "\nWill Attend First Meeting: " + attend1st + "\nWill Attend Future Meetings: " + attendFut + "\n---------------------------------------------------------------"
  disc.sendMessage(message);
  try {
    db.insert(doc);
  } catch (error) {
    console.log("error inserting\n", err);
  }

  res.redirect("/thanks?name=" + req.body.fName);
  //res.redirect("/");
});
app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
