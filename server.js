// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// friend data
var friendsArr = [];

// htmlRoutes.js
//directs homepage to home.html
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});
//directs to survey.html after clicking button
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
  console.log("survey")
});

// apiRoutes.js
//returns json friends array
app.get("/api", function(req,res){
	return res.json(friendsArr)
})

//posts new friends data into friendsArr
app.post("/api/new", function(req, res) {
	var newfriend = req.body;
	friendsArr.push(newfriend);
	res.json(newfriend)
});

//listening to port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});