var express = require('express');
 var app = express();
 app.get('/', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL/map.html');
 });
app.get('/map', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL/map.json');
 });
 app.listen(8080); 

