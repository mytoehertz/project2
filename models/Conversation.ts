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
  IsEmail,
  BelongsToMany
} from "sequelize-typescript";
import { Category } from "./Category";
import { CounselorSkill } from "./CounselorSkills";
import Student from "./student";
import Counselor from "./counselor";
import { Message } from "./Messages";

@Table
export class Conversation extends Model<Conversation> {
  @ForeignKey(() => Student)
  @Column
  Student_id: number;

  @ForeignKey(() => Counselor)
  @Column
  Counselor_id: number;

  @ForeignKey(() => Category)
  @Column
  Category_id: number;

  @BelongsTo(() => Category)
  Category: Category;

  @BelongsTo(() => Student)
  Student: Student;

  @BelongsTo(() => Counselor)
  Counselor: Counselor;

  @HasMany(() => Message)
  Messages: Message[];
}
