var express = require('express');
var router = express.Router();


var fs = require('fs')

var paths = {
  distance : 30,
  vitesse  : 40,
}
var nbCars = 10;
var write = function (err, res){
  var datetime = '[' + Date.now() + '] ';
  var stat = datetime + calculStat(paths,nbCars) + '\r\n\n';
  if(err){

  }else{
    fs.appendFile('stat.txt',stat , function (err) {
      if (err) {
        // append failed
      } else {
        console.log("succes write");
        // done
      }
    })
  }

}

var calculStat = function (p,n) {
  var stats = 0;
  for(var i = 0 ; i < p.distance; i++){
    stats+=p.vitesse*0.0005;
  }
  return (stats*n)/Math.random() *100 ;
}
var stat = function (req, res, next) {
  write();
  next()
}
/* GET users listing. */
router.get('/',[stat], function(req, res, next) {

  res.send(req.body.data);
});



module.exports = router;
