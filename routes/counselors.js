var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = router;
//# sourceMappingURL=counselors.js.map

router.get('/', function (req, res) {
    res.render('home');
});


// index route
router.get('/counselorlist', async (req, res) => {
res.render('index');
});
//get single page by ID
router.get('/counselorlist/:id', async (req, res) => {

});

//create
router.get(`/new`, async (req, res) => {
    res.render(`new`, { title: "New Post", action: `/sign-up`, method: "POST"});
});

//create a new page
router.post('/index', async (req, res) => {
 console.log("POST -> /index", req.body);
 res.redirect("/index");
});
