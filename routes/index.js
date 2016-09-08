var express = require('express');
var router  = express.Router();
var calc    = require('../calc');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/adicao', function(req, res) {
    var campo1 = parseInt(req.body.campo1);
	var campo2 = parseInt(req.body.campo2);
    res.render('index', { res_add: calc.add(campo1, campo2)});
})

router.post('/subtracao', function(req, res) {
    var campo1 = parseInt(req.body.campo1);
    var campo2 = parseInt(req.body.campo2);
    res.render('index', { res_sub: calc.sub(campo1, campo2)});
})

module.exports = router;
