var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('App is working ......... !!!!!');
});

router.get('/get', function(req, res, next) {
  res.send('GET Request received server');
});

router.get('/post', function(req, res, next) {
  res.send('Please send a POST Request');
});


router.post('/post', function (req, res) {
  res.send('POST request received server');
  console.log("Data is ",req.body);
})

module.exports = router;
