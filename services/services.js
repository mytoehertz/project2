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
    getCounselor() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Counselor_1.default.findOne();
        });
    }
}
//# sourceMappingURL=services.js.map