"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const CounselorSkills_1 = require("./CounselorSkills");
const Conversation_1 = require("./Conversation");
//import {IBurger} from "./NewBurgerViewModel";
let Counselor = class Counselor extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Length({ min: 1, max: 45 }),
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Counselor.prototype, "FirstName", void 0);
__decorate([
    sequelize_typescript_1.Length({ min: 1, max: 45 }),
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Counselor.prototype, "LastName", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Counselor.prototype, "JoinDate", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.IsEmail,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Counselor.prototype, "Email", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => CounselorSkills_1.CounselorSkill),
    __metadata("design:type", Array)
], Counselor.prototype, "CounselorSkill", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Conversation_1.Conversation),
    __metadata("design:type", Array)
], Counselor.prototype, "Conversation", void 0);
Counselor = __decorate([
    sequelize_typescript_1.Scopes({
        full: {
            include: [() => CounselorSkills_1.CounselorSkill]
        }
    }),
    sequelize_typescript_1.Table
], Counselor);
exports.Counselor = Counselor;
exports.default = Counselor;
//# sourceMappingURL=Counselor.js.map