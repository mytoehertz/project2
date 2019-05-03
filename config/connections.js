"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const student_1 = __importDefault(require("../models/student"));
const Counselor_1 = __importDefault(require("../models/Counselor"));
const CounselorSkills_1 = require("../models/CounselorSkills");
const Category_1 = require("../models/Category");
const Conversation_1 = require("../models/Conversation");
const Messages_1 = require("../models/Messages");
const MessageSender_1 = require("../models/MessageSender");
class SequelizeDb {
    constructor() {
        this.Context = new sequelize_typescript_1.Sequelize({
            database: "heroku_b4cf61c71350f3d",
            host: "us-cdbr-iron-east-02.cleardb.net",
            dialect: "mysql",
            username: "bdf87f6afc50bb",
            password: process.env.Database_Password
            // //storage: ':memory:',
            //modelPaths: [__dirname + '/models']
            //     host     : 'us-cdbr-east-04.cleardb.com',
            // user     : 'b6d6c6e874',
            // password : 'b3f7###',
            // database : 'heroku_1daa39da0'
            // CLEAR DB URL: mysql://bdf87f6afc50bb:4759d7e2@us-cdbr-iron-east-02.cleardb.net/heroku_b4cf61c71350f3d?reconnect=true
        });
        this.Context.addModels([
            student_1.default,
            Counselor_1.default,
            CounselorSkills_1.CounselorSkill,
            Category_1.Category,
            Conversation_1.Conversation,
            Messages_1.Message,
            MessageSender_1.MessageSender
        ]);
        this.Context.sync();
    }
}
exports.SequelizeDb = SequelizeDb;
exports.default = SequelizeDb;
//# sourceMappingURL=connections.js.map