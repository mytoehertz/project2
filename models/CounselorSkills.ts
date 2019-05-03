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
  BelongsTo,
  PrimaryKey,
  AutoIncrement
} from "sequelize-typescript";
import Counselor from "./counselor";
import { Category } from "./Category";

@Table
export class CounselorSkill extends Model<CounselorSkill> {
  @ForeignKey(() => Category)
  @Column
  Categories_id: number;

  @ForeignKey(() => Counselor)
  @Column
  Counselor_id: number;

  @BelongsTo(() => Counselor)
  Counselor: Counselor;

  @BelongsTo(() => Category)
  Category: Category;
}
