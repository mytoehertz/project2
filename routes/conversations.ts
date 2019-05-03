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
 * @typedef Conversation
 * @property {integer} categoryId.required
 * @property {integer} counselorId.required
 * @property {integer} studentId.required
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
 * @route POST /conversations/create
 * @group Conversations
 * @param {Conversation.model} conversation.body.required
 * @operationId createConversation
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.post('/create', async function (req, res, next) {

    try {
        let service = new Services();
        let newlyCreatedConversation = await service.createConversation(Number(req.body.categoryId), Number(req.body.studentId), Number(req.body.counselorId));

        res.status(200)
            .send(newlyCreatedConversation);
    } catch (e) {
        res.status(500)
            .send(e);
    }

});

module.exports = router;
