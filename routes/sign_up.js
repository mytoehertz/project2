var express = require('express');
var router = express.Router();
var Counselor = require("../models/counselor.js");
var Student = require("../models/students.js");
/* GET home page. */
router.get('/', function (req, res, next) {
    try {
        res.status(200)
            .send({
            message: 'success',
            status: res.status,
            resource: "YES!!!"
        });
    }
    catch (e) {
        res.status(500)
            .send({
            message: 'failed',
            status: res.status,
            resource: "Server Error"
        });
    }
});
module.exports = router;

// Add a student
app.post("/", function(req, res) {


    Student.create({
      author: req.body.name,
      body: req.body.email,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created student
      res.end();
    });

  });

  // Add a counselor
app.post("/", function(req, res) {


    Counselor.create({
      author: req.body.name,
      body: req.body.email,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created student
      res.end();
    });

  });
//# sourceMappingURL=sign_up.js.map