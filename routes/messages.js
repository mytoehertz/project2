"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = __importDefault(require("../services/services"));
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
router.get('/messageSenderTypes', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let services = new services_1.default();
            let senderTypes = new Array();
            senderTypes.push(yield services.getStudentSender());
            senderTypes.push(yield services.getCounselorSender());
            res.status(200)
                .send(senderTypes);
        }
        catch (e) {
            res.status(500)
                .send(e);
        }
    });
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
router.post('/create', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let service = new services_1.default();
            let newlyCreatedMessage = yield service.createMessage(Number(req.body.conversationId), Number(req.body.messageSenderId), req.body.message);
            res.status(200)
                .send(newlyCreatedMessage);
        }
        catch (e) {
            res.status(500)
                .send(e);
        }
    });
});
module.exports = router;
//# sourceMappingURL=messages.js.map