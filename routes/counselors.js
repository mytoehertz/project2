var express = require('express');
var router = express.Router();
var Counselor = require("../models/counselor.js");

/* GET home page. */
router.get('/list', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    Counselor.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
});
module.exports = router;
//# sourceMappingURL=counselors.js.map