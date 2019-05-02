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
      database: "fleshEaters",
      dialect: "mysql",
      username: "root",
      password: process.env.Database_Password
      //storage: ':memory:',
      //modelPaths: [__dirname + '/models']
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

}

export default SequelizeDb;
