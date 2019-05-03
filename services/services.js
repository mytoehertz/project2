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
const Category_1 = require("../models/Category");
const Counselor_1 = __importDefault(require("../models/Counselor"));
const student_1 = __importDefault(require("../models/student"));
const CounselorSkills_1 = require("../models/CounselorSkills");
const Conversation_1 = require("../models/Conversation");
const Messages_1 = require("../models/Messages");
const MessageSender_1 = __importDefault(require("../models/MessageSender"));
class Services {
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Category_1.Category.findAll();
        });
    }
    getCounselors(Categoryid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CounselorSkills_1.CounselorSkill.findAll().then(Counselor => { Counselor; });
        });
    }
    getStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_1.default.findOne();
        });
    }
    getCounselorsByCategory(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            let category = yield Category_1.Category.findOne();
            return category.counselors;
        });
    }
    getCounselorSender() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageSender_1.default.findOne({ where: { Message_Sender: 'counselor' } });
        });
    }
    getStudentSender() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield MessageSender_1.default.findOne({ where: { Message_Sender: 'student' } });
        });
    }
    createMessage(conversationId, messageSenderId, message) {
        return __awaiter(this, void 0, void 0, function* () {
            let newlyCreatedMessage = new Messages_1.Message();
            newlyCreatedMessage.Conversation_id = conversationId;
            newlyCreatedMessage.MessageSender_id = messageSenderId;
            newlyCreatedMessage.Message = message;
            return yield newlyCreatedMessage.save();
        });
    }
    createConversation(categoryId, studentId, counselorId) {
        return __awaiter(this, void 0, void 0, function* () {
            let conversation = new Conversation_1.Conversation();
            conversation.Category_id = categoryId;
            conversation.Counselor_id = counselorId;
            conversation.Student_id = studentId;
            return yield conversation.save();
        });
    }
    createStudent(userName, email) {
        return __awaiter(this, void 0, void 0, function* () {
            let student = new student_1.default();
            student.UserName = userName;
            student.Email = email;
            student.JoinDate = new Date(Date.now());
            return yield student.save();
        });
    }
    createCounselor(firstName, lastName, email, skillCategories) {
        return __awaiter(this, void 0, void 0, function* () {
            let counselor = new Counselor_1.default();
            counselor.FirstName = firstName;
            counselor.LastName = lastName;
            counselor.Email = email;
            counselor.JoinDate = new Date(Date.now());
            yield counselor.save();
            yield this.createCounselorSkills(counselor.id, skillCategories);
            //  console.log(counselor.CounselorSkill);
            //  console.log(counselor);
            // let newlyCreatedCounselor= await Counselor.findOne({where:{id:counselor.id},include:[{model:CounselorSkill}]});
            //   skillCategories.forEach(c=>{let sk=new CounselorSkill(); sk.Categories_id=c; counselor.CounselorSkill.pu//sh(sk); counselor.isNewRecord=true;});
            //await counselor.save();
            //let skills: Array<Category>;
            //skills= skillCategories.map(s=> {let cat=new Category(); cat.id=s; return cat});
            //let counselorSkills: Array<CounselorSkill>;
            //counselorSkills= skills
            //  .map(s=>{let cs=new CounselorSkill(); cs.Categories_id=s.id; cs.Counselor_id=counselor.id; return cs});
            // counselorSkills.forEach(async cs=>await cs.save());
            return yield counselor;
        });
    }
    createCounselorSkills(counselorId, categorySkills) {
        return __awaiter(this, void 0, void 0, function* () {
            let skills;
            skills = categorySkills
                .map(s => {
                let cs = new CounselorSkills_1.CounselorSkill();
                cs.Counselor_id = counselorId;
                cs.Categories_id = s;
                cs.isNewRecord = true;
                return cs;
            });
            skills.forEach((s) => __awaiter(this, void 0, void 0, function* () { return yield s.save(); }));
            return skills;
        });
    }
    getCounselor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Counselor_1.default.findOne();
        });
    }
    createCategory(categoryName) {
        return __awaiter(this, void 0, void 0, function* () {
            var cat = new Category_1.Category();
            cat.Name = categoryName;
            return yield cat.save();
        });
    }
}
exports.Services = Services;
exports.default = Services;
//# sourceMappingURL=services.js.map