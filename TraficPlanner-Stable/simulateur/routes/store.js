var express = require('express');
var router = express.Router();

var fs = require('fs');


var storeData = function() {
  var dataCars = [];
  for (var i = 0; i < 10; i++) {
    var car = {
      "timeStart": Date.now(),
      "timeStop": Date.now()+ 1000,
      "distance": i + 1 * Math.random() * 10,
      "nbRoads": i + 1 * Math.random() * 20
    }
    dataCars.push(car);
  }
  console.log(dataCars);
  var data = JSON.stringify(dataCars);
  fs.writeFile('Storage/simu.json',data , function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("succes write");
    }
  })


}
var store = function (req, res, next) {
  storeData();
  next()
}

/* GET users listing. */
router.get('/', [store],function(req, res, next) {
  res.send("succes");
});



module.exports = router;
