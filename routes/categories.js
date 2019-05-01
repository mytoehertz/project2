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
 * @route GET /categories/all
 * @group Categories
 * @returns {object} 200 - An array of categories
 * @returns {Error}  default - Unexpected error
 */
router.get('/all', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var service = new services_1.default();
            var categories = yield service.getCategories();
            res.status(200)
                .send({
                categories
            });
        }
        catch (e) {
            res.status(500)
                .send({
                message: 'failed',
                status: res.status,
                resource: e
            });
        }
    });
});
/**
 * @typedef Category
 * @property {string} name.required
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
 * @route POST /categories/create
 * @group Categories
 * @param {Category.model} category.body.required
 * @operationId createCategory
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -    date in UTC when token expires
 * @security JWT
 */
router.post('/create', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var service = new services_1.default();
            console.log(req.body);
            var createdCategory = yield service.createCategory(req.body.name);
            res.status(200)
                .send(createdCategory);
        }
        catch (e) {
            res.status(500)
                .send({
                message: 'failed',
                exception: e,
                bdy: req.body
            });
        }
    });
});
module.exports = router;
//# sourceMappingURL=categories.js.map