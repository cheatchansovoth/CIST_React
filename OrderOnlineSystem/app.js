const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/category.html");
});
app.get("/working.html", function (req, res) {
  res.sendFile(__dirname + "/error.html");
});
app.get("/experience.html", function (req, res) {
  res.sendFile(__dirname + "/error.html");
});
app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/error.html");
});
app.get("/error.html", function (req, res) {
  res.sendFile(__dirname + "/error.html");
});
app.listen(3001, function (req, res) {
  console.log("working on port 3001");
});
