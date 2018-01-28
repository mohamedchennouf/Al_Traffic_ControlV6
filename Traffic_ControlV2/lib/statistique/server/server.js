// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 7500;


var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);


app.get('/',  function (req,  res)  {
    res.sendFile(__dirname + '/index.html');
 });

app.post('/',function(req,res){
  var data = req.body.data;
  res.end("yes");
});


app.get('/statistique', function (req, res) {
    res.sendFile(__dirname + '/statistique.html');
});

app.post('/statistique', function (req, res) {
    var time = req.body.time;
    var nbvoitures = req.body.nbvoitures;
    console.log('time: '+time+'  nb vehicules: '+nbvoitures);
    res.send(time + ' ' + nbvoitures );
});

