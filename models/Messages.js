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
const Conversation_1 = require("./Conversation");
const messageSender_1 = require("./messageSender");
let Message = class Message extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Length({ min: 1, max: 1000 }),
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Message.prototype, "Message", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => Conversation_1.Conversation),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Message.prototype, "Conversation_id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => messageSender_1.MessageSender),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Message.prototype, "MessageSender_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => Conversation_1.Conversation),
    __metadata("design:type", Conversation_1.Conversation)
], Message.prototype, "Conversation", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => messageSender_1.MessageSender),
    __metadata("design:type", messageSender_1.MessageSender)
], Message.prototype, "MessageSender", void 0);
Message = __decorate([
    sequelize_typescript_1.Table
], Message);
exports.Message = Message;
//# sourceMappingURL=Messages.js.map