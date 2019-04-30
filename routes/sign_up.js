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

// // index route
// app.get('/pages', async (req, res) => {

// });
// //get single page by ID
// app.get('/pages/:id', async (req, res) => {

// });
// //create a new page
// app.post('/pages', async (req, res) => {

// });
// //update a page by ID
// app.put('/pages/:id', async (req, res) => {

// });
// //Delete page by ID
// app.delete('/pages/:id', async (req, res) => {

// });

// //  app.get(`/`, async (req, res) => {
// //     console.log(req);

// //     res.send('Hello World ');
// //  });

//  app.listen(PORT, () => console.log(`APP listening on port ${PORT}`));