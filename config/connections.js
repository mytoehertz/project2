"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OGSequelize = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
// const Sequelize = tsSequelize.Sequelize();
//establish the student model
// var studentModel = require("../models/student");
const student_1 = require("../models/student");
console.log(typeof student_1.Student, student_1.Student);
//connecting to the database
const sequelize = new sequelize_typescript_1.Sequelize("fleshEaters", "root", "Shmaavmc1", {
    host: "localhost",
    dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
sequelize.addModels([student_1.Student]);
// console.log(sequelize);
//
//adding the student model for testing:
//making sure connection works:
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });
// // studentModel.create({ FirstName: "bob", LastName: "smith" });
student_1.Student.sync({ force: true }).then(function (thing) {
    console.log("We managed to sync Students");
    const newStudent = new student_1.Student({
        FirstName: "bob",
        LastName: "smith",
        Email: "hello@testing.com"
    });
    console.log(newStudent);
    newStudent.save();
});
// const Student = sequelize.define(
//   "students",
//   {
//     // attributes
//     username: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     user_email: {
//       type: Sequelize.STRING
//       // allowNull defaults to true
//     },
//     has_started_conversation: {
//       type: Sequelize.BOOLEAN
//       // allowNull defaults to true
//     }
//   },
//   {
//     // options
//   }
// );
// const Counselor = sequelize.define(
//   "counselors",
//   {
//     // attributes
//     username: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     user_email: {
//       type: Sequelize.STRING
//       // allowNull defaults to true
//     },
//     has_replied_to_conversation: {
//       type: Sequelize.BOOLEAN
//       // allowNull defaults to true
//     }
//   },
//   {
//     // options
//   }
// );
// const Conversation = sequelize.define(
//   "conversations",
//   {
//     // attributes
//     student_name: {
//       type: Sequelize.STRING,
//       allowNull: false
//     },
//     counselor_name: {
//       type: Sequelize.STRING
//       // allowNull defaults to true
//     },
//     is_open: {
//       type: Sequelize.BOOLEAN
//       // allowNull defaults to true
//     }
//   },
//   {
//     // options
//   }
// );
//create a test student
// Student.sync({ force: true }).then(function(thing) {
//   console.log("We managed to sync Students");
//   Student.create({
//     username: "Michael",
//     user_email: "Michael@here",
//     has_started_conversation: false
//   }).then(function(element) {
//     console.log("Created a student");
//   });
// });
//creating a test counselor
// Counselor.sync({ force: true }).then(function(thing) {
//   console.log("We managed to sync with Counselors");
//   Counselor.create({
//     username: "Juan",
//     user_email: "Juan@here",
//     has_replied_to_conversation: true
//   }).then(function(element) {
//     console.log("Created a counselor");
//   });
// });
//creating a test conversation
// Conversation.sync({ force: true }).then(function(thing) {
//   console.log("We managed to sync with Conversations");
//   Conversation.create({
//     student_name: "Michael",
//     counselor_name: "Juan",
//     is_open: false
//   }).then(function(element) {
//     console.log("Created a conversation");
//   });
// });
// module.exports = {
//   Sequelize: Sequelize,
//   sequelize: sequelize,
//   Burger: Burger
// };
//# sourceMappingURL=connections.js.map