import Services from "../services/services";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/**
 * This function comment is parsed by doctrine
 * sdfkjsldfkj
 * @route GET /counselors/categories
 * @group Counselors
 * @param {integer} categoryid.query.required
 * @operationId getCounselor
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.get('/categories',async function (req, res, next) {
    let service = new Services();
    let counselor = await service.getCounselorsByCounselorSkill(Number(req.query.categoryid));
    res.render('index', {title: 'Express'});
    res.status(200)
    .send(counselor);
});

//Test


/**
 * @typedef Counselor
 * @property {string} firstName.required
 * @property {string} lastName.required
 * @property {string} email.required
 * @property {Array.<integer>} skills.required
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
 * @route POST /counselors/create
 * @group Counselors
 * @param {Counselor.model} counselor.body.required
 * @operationId createCounselor
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.post('/create', async function (req, res, next) {
    try {
        let service = new Services();
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email;
        let skills = req.body.skills.map(s => Number(s));


        let counselor = await service.createCounselor(firstName, lastName, email, skills);

        res.status(200)
            .send(counselor);


    } catch (e) {
        await req.status(500)
            .send(e);
    }
});


module.exports = router;
