import Services from "../services/services";
import MessageSender from "../models/MessageSender";

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
 * This function comment is parsed by doctrine
 * sdfkjsldfkj
 * @route GET /messages/messageSenderTypes
 * @group Messages
 * @operationId getMessageSenderTypes
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.get('/messageSenderTypes', async function (req, res, next) {
    try {
        let services = new Services();

        let senderTypes: Array<MessageSender> = new Array<MessageSender>();
        senderTypes.push(await services.getStudentSender());
        senderTypes.push(await services.getCounselorSender());


        res.status(200)
            .send(senderTypes);
    } catch (e) {
        res.status(500)
            .send(e);
    }
});

/**
 * @typedef Message
 * @property {integer} conversationId.required
 * @property {integer} messageSenderId.required
 * @property {string} message.required
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
 * @route POST /messages/create
 * @group Messages
 * @param {Message.model} message.body.required
 * @operationId createMessage
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.post('/create', async function (req, res, next) {

    try {
        let service = new Services();
        let newlyCreatedMessage = await service.createMessage(Number(req.body.conversationId), Number(req.body.messageSenderId), req.body.message);

        res.status(200)
            .send(newlyCreatedMessage);
    } catch (e) {
        res.status(500)
            .send(e);
    }

});

module.exports = router;
