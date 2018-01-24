var express = require('express');
 var app = express();
 app.get('/', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/map.html');
 });
app.get('/map', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/map.json');
 });
app.get('/car0', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/image/car0.png');
 });
app.get('/car1', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/image/car1.png');
 });
app.get('/event', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/image/event.png');
 });
app.get('/lightred', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/image/Light_red.png');
 });
app.get('/lightgreen', function(req, res) {
     res.sendFile('C:/Users/chennouf/Desktop/AL_Traffic_ControlV6/Map_TraficControl/image/Light_green.png');
 });
 app.listen(8080); 

