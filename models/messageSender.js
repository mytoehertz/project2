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
const Messages_1 = require("./Messages");
let MessageSender = class MessageSender extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Length({ min: 1, max: 45 }),
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MessageSender.prototype, "Message_Sender", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => Messages_1.Message, 'MessageSender_id'),
    __metadata("design:type", Array)
], MessageSender.prototype, "Message", void 0);
MessageSender = __decorate([
    sequelize_typescript_1.Table
], MessageSender);
exports.MessageSender = MessageSender;
exports.default = MessageSender;
//# sourceMappingURL=messageSender.js.map