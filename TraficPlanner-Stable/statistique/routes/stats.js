var express = require('express');
var router = express.Router();


var fs = require('fs')

//var simulation = readJsonFile("../../Storage/Simulation/simulation.json");
var simulation = readJsonFile("Storage/simulation.json");
var write = function (err, res){
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
    var time = p[i].timeStop - p[i].timeStart;
    stats+=time*p[i].distance / p[i].nbRoads;
  }
  return (stats)/(p.length * 1000);
}

function readJsonFile(file) {

  var contents = fs.readFileSync(file);

  return JSON.parse(contents);

}

module.exports = router;
