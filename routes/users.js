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