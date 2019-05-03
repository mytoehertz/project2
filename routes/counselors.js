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
    res.render('index', { title: 'Express' });
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
router.post('/create', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let service = new services_1.default();
            let firstName = req.body.firstName;
            let lastName = req.body.lastName;
            let email = req.body.email;
            let skills = req.body.skills.map(s => Number(s));
            let counselor = yield service.createCounselor(firstName, lastName, email, skills);
            res.status(200)
                .send(counselor);
        }
        catch (e) {
            yield req.status(500)
                .send(e);
        }
    });
});
module.exports = router;

//# sourceMappingURL=counselors.js.map


MappingURL=counselors.js.map

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



