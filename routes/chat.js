var express = require('express');
var router = express.Router();
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
//# sourceMappingURL=chat.js.map

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