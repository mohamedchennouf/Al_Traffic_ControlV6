var express = require('express');
var router = express.Router();
var fs = require('fs')

var options = { // appli simu conf
  host: 'localhost',
  port: 3002,
  path: '/read'
};

var pathFile = "public/Storage/";
var simulation ;
var http = require('http');

var getDataSimulation = function () {
  http.get(options, function(res) {
    //console.log("Got response: " + res.statusCode + " data : " + res.data );
    res.on('data', function (chunk) {
      simulation = JSON.parse(chunk);
      //console.log('BODY: ' + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}
var res1 = [];

var readFile = function(){

  var res = '{"stats": ['
  fs.readdir(pathFile, (err, files) => {
    files.forEach(file => {
      //console.log(file);
      fs.readFile(pathFile+file, (err, data) => {
        if (err) throw err;
        var temp = JSON.parse(data);
       // console.log(temp);
        res1.push(JSON.stringify(temp));
       // console.log(res);
      })
    })
    res = '{"stats" : [' + res1.toString() + ']}';
    fs.writeFile('public/statistique.json', res , function (err) {
      if (err) {
        // append failed
      } else {
        console.log("succes write");
        // done
      }
    })
    console.log(JSON.parse(res));
  });


}

var write = function (err, res){
  getDataSimulation();
  if(simulation!=null){
    var datetime = '{"Simulate" : '  + Date.now() + ',';
    var stat = datetime + '"Stat" : ' + calculwithJsonArray(simulation) + '}';
    if(err){
    }else{
      fs.appendFile(pathFile+Date.now()+'.json', stat , function (err) {
        if (err) {
          // append failed
        } else {
          console.log("succes write");
          // done
        }
      })
    }
  }
  readFile();
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
