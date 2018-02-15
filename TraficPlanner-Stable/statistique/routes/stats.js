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

  var res ;
  var result_Final = '{"stats": [';

  fs.readdir(pathFile, (err, files) => {
    var taille = files.length;
    var i = 0;
    files.forEach(file => {
      console.log(file);

    /*fs.readFile(pathFile+file, (err, data) => {
        if (err) throw err;
        var temp = JSON.parse(data);
       // console.log(temp);
        res1.push(JSON.stringify(temp));
       // console.log(res);
      });*/
      var data = fs.readFileSync(pathFile+file);
      //res.push(data);
      res = data.toString();
      if(i < taille-1) {
        result_Final += res + ",";
        i++;
      }else{
        result_Final += res;
      }
    });
    result_Final+= ']}';
    console.log(result_Final);
   // res = '{"stats" : [' + data.toString() + ']}';
    //res1 = [];
    fs.writeFileSync('public/statistique.json', result_Final , 'utf8');

    console.log(JSON.parse(res));
  });


}

var write = function (err, res){
  getDataSimulation();
  if(simulation!=null){
    var datetime = '{"Simulate" : '  + Date.now().toString() + ',';
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
  //readFile();
}

var stat = function (req, res, next) {
  write();
  readFile();
  next()
}
/* GET users listing. */
router.get('/',[stat], function(req, res, next) {
  res.redirect('http://localhost:3001/');
  //res.send(req.body.data);
});



var calculwithJsonArray = function (p) {
  var stats = 0;
  for(var i = 0 ; i < p.length; i++){
    var time = p[i].timeStop - p[i].timeStart;
    stats+=time+p[i].distance / p[i].nbRoads;
  }
  return Math.ceil(stats/1000) + Math.random() * 10;
}

module.exports = router;
