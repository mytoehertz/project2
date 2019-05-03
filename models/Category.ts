import {
  Table,
  Column,
  Model,
  ForeignKey,
  AllowNull,
  HasMany,
  Length,
  Default,
  Sequelize,
  IsEmail,
  BelongsToMany
} from "sequelize-typescript";
import Counselor from "./counselor";
import { CounselorSkill } from "./CounselorSkills";
import { Conversation } from "./Conversation";

@Table
export class Category extends Model<Category> {
  @Length({ min: 1, max: 100 })
  @AllowNull(false)
  @Column
  Name: string;

  //   @BelongsToMany(() => Counselor, () => CounselorSkill)
  //   counselors: Counselor[];

  @HasMany(() => CounselorSkill)
  CounselorSkill: CounselorSkill[];

  @HasMany(() => Conversation)
  Conversation: Conversation[];
}
