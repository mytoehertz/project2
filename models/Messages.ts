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
import {Conversation} from "./Conversation";
import {MessageSender} from "./messageSender"
import Counselor from "./Counselor";


@Table
export class Message extends Model<Message> {
    @Length({min: 1, max: 1000})
    @AllowNull(false)
    @Column
    Message: string;


    @ForeignKey(() => Conversation)
    @Column
    Conversation_id: number;

    @ForeignKey(() => MessageSender)
    @Column
    MessageSender_id: number;

    @BelongsTo(()=> Conversation)
    Conversation: Conversation;

    @BelongsTo(() => MessageSender)
    MessageSender: MessageSender;



}

