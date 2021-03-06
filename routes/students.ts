import Services from "../services/services";

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
    } catch (e) {
        res.status(500)
            .send({
                message: 'failed',
                status: res.status,
                resource: "Server Error"

            });
    }

});


/**
 * @typedef Student
 * @property {string} userName.required
 * @property {string} email.required
 */

/**
 * @typedef Error
 * @property {string} code.required
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */
/**
 * This function comment is parsed by doctrine
 * sdfkjsldfkj
 * @route POST /students/create
 * @group Students
 * @param {Student.model} student.body.required
 * @operationId createStudent
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.post('/create', async function (req, res, next) {

    try {
        let service = new Services();
        let newlyCreatedStudent = await service.createStudent(req.body.userName, req.body.email);

        res.status(200)
            .send(newlyCreatedStudent);
    } catch (e) {
        res.status(500)
            .send(e);
    }

});

module.exports = router;
