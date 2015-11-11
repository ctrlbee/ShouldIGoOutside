var express = require('express'); 
var app = express(); 
var controller = require('./controller.js');

app.use(express.static(__dirname + '/../client'));

controller(app);

app.listen(8000);

module.exports = app; 


