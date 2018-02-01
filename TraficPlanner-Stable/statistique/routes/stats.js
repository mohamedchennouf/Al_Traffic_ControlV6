var express = require('express');
var router = express.Router();


var fs = require('fs')

var options = { // appli simu conf
  host: 'localhost',
  port: 3002,
  path: '/read'
};

var simulation ;
var http = require('http');



//var simulation = readJsonFile("Storage/simulation.json");
var write = function (err, res){
  http.get(options, function(res) {
    //console.log("Got response: " + res.statusCode + " data : " + res.data );
    res.on('data', function (chunk) {
      simulation = JSON.parse(chunk);
      //console.log('BODY: ' + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
  console.log("Simmue " + JSON.stringify(simulation));
  var datetime = '\n[ \n\t{\n\t\t"Simulate" : ' + Date.now()+ ',\n\t\t';
  var stat = datetime + '"Stat" : ' + calculwithJsonArray(simulation) + '\n\t}\n'+ ']' +'\n';
  if(err){

  }else{
    fs.appendFile('Storage/'+Date.now()+'stat.json',stat , function (err) {
      if (err) {
        // append failed
      } else {
        console.log("succes write");
        // done
      }
    })
  }
  //}


}
var stat = function (req, res, next) {
  write();
  next()
}
/* GET users listing. */
router.get('/',[stat], function(req, res, next) {

  res.send(req.body.data);
});

var calculwithJsonArray = function (p) {
  var stats = 0;
  for(var i = 0 ; i < p.length; i++){
    var time = p[i].timeStop + p[i].timeStart;
    stats+=time*p[i].distance / p[i].nbRoads;
  }
  return (stats)/(p.length * 1000);
}

module.exports = router;
