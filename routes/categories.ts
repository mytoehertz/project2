import {Category} from "../models/Category";
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
 * This function comment is parsed by doctrine
 * @route GET /categories/all
 * @group Categories
 * @returns {object} 200 - An array of categories
 * @returns {Error}  default - Unexpected error
 */
router.get('/all', async function (req, res, next) {

    try {
        var service = new Services();
        var categories = await service.getCategories();
        res.status(200)
            .send({
                categories
            });
    } catch (e) {
        res.status(500)
            .send({
                message: 'failed',
                status: res.status,
                resource: e

            });
    }

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
router.post('/create', async function (req, res, next) {

    try {
        var service = new Services();

        console.log(req.body);

        var createdCategory = await service.createCategory(req.body.name);

        res.status(200)
            .send(createdCategory);
    } catch (e) {
        res.status(500)
            .send({
                message: 'failed',
                exception: e,
                bdy: req.body
            })
    }
});

module.exports = router;
