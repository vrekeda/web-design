var express = require('express');
var router = express.Router();

let table = [1, 2, 3, 4, 5];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {table: table});
});

router.post('/table', (req, res) => {
    table = req.body['cell-content'];
    res.redirect('/');
});

module.exports = router;
