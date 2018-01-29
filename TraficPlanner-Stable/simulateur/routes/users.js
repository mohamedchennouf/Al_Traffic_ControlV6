var express = require('express');
var router = express.Router();
var http = require('http');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req.get('127.0.0.1:3000/stats'))  ;
  http.get(options, function(res) {
    console.log("Got response: " + res.statusCode + " data : " + res.data );
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

  res.send("Succes");
});


var options = {
  host: 'localhost',
  port: 3001,
  path: '/stats'
};


module.exports = router;
