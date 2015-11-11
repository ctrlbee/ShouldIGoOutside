var express = require('express');
var controller = require('./controller.js');
var app = express();

app.use(express.static(__dirname + '/../client'));

controller(app);

app.listen(8000);

module.exports = app;


