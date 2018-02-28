var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Home Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/cars", function (req, res) {
    // res.send("Home Page!")
    res.sendFile(path.join(__dirname, "cars.json"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});