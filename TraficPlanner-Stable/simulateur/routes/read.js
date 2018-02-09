var express = require('express');
var router = express.Router();

var fs = require('fs');



/* GET users listing. */
router.get('/',function(req, res) {
  var contents = fs.readFileSync("Storage/simu.json");
  res.send(JSON.parse(contents));
});



module.exports = router;

