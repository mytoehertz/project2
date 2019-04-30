import {
    Table,
    Column,
    Model,
    ForeignKey,
    AllowNull,
    HasMany,
    Length,
    BelongsTo,
    Default,
    Sequelize,
    IsEmail, BelongsToMany
} from 'sequelize-typescript';
import {Message} from "./Messages";

@Table
export class MessageSender extends Model<MessageSender> {
    @Length({min: 1, max: 45})
    @AllowNull(false)
    @Column
    Message_Sender: string;

}