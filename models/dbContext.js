"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Student_1 = require("./Student");
class options {
}
let dbConnectionOptions = new options();
class DbContext {
    constructor() {
        this.Context = new sequelize_typescript_1.Sequelize({

            database: 'fleshEaters',
            dialect: 'mysql',
            username: 'root',
            password: '-----'

            //storage: ':memory:',
            //modelPaths: [__dirname + '/models']
        });
        this.Context.addModels([Student_1.Student]);
    }
}
exports.DbContext = DbContext;
exports.default = DbContext;
//# sourceMappingURL=dbContext.js.map