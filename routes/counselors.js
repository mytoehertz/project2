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

// index route
app.get('/pages', async (req, res) => {

});
//get single page by ID
app.get('/pages/:id', async (req, res) => {

});
//create a new page
app.post('/pages', async (req, res) => {

});
//update a page by ID
app.put('/pages/:id', async (req, res) => {

});
//Delete page by ID
app.delete('/pages/:id', async (req, res) => {

});

//  app.get(`/`, async (req, res) => {
//     console.log(req);

//     res.send('Hello World ');
//  });

 app.listen(PORT, () => console.log(`APP listening on port ${PORT}`));