import { Sequelize } from "sequelize-typescript";
import Student from "../models/student";
import Counselor from "../models/Counselor";

import User from "../models/users";

import { CounselorSkill } from "../models/CounselorSkills";
import { Category } from "../models/Category";
import { Conversation } from "../models/Conversation";
import { Message } from "../models/Messages";
import { MessageSender } from "../models/MessageSender";

export class SequelizeDb {
  Context: Sequelize;

  constructor() {
    this.Context = new Sequelize({
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
      Student,
      Counselor,
      CounselorSkill,
      Category,
      Conversation,
      Message,
      MessageSender
    ]);
    this.Context.sync();
  }

  async LoadMessageSenders() {
    let messageSenders: Array<MessageSender>;

    messageSenders = await MessageSender.findAll();

    if (messageSenders.length == 0) {
      var studentSender = new MessageSender();
      studentSender.Message_Sender = "student";
      await studentSender.save();
      var counselorSender = new MessageSender();
      counselorSender.Message_Sender = "counselor";
      await counselorSender.save();
    }
  }
}

export default SequelizeDb;
