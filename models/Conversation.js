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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Category_1 = require("./Category");
const student_1 = __importDefault(require("./student"));
const counselor_1 = __importDefault(require("./counselor"));
const Messages_1 = require("./Messages");
let Conversation = class Conversation extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.ForeignKey(() => student_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Conversation.prototype, "Student_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => counselor_1.default),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Conversation.prototype, "Counselor_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Category_1.Category),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Conversation.prototype, "Category_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Category_1.Category),
    __metadata("design:type", Category_1.Category)
], Conversation.prototype, "Category", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => student_1.default),
    __metadata("design:type", student_1.default)
], Conversation.prototype, "Student", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => counselor_1.default),
    __metadata("design:type", counselor_1.default)
], Conversation.prototype, "Counselor", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Messages_1.Message),
    __metadata("design:type", Array)
], Conversation.prototype, "Messages", void 0);
Conversation = __decorate([
    sequelize_typescript_1.Table
], Conversation);
exports.Conversation = Conversation;
//# sourceMappingURL=Conversation.js.map