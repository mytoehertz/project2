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
import { Category } from "./Category";
import { CounselorSkill } from "./CounselorSkills";
import { Conversation } from "./Conversation";
import { type } from "os";

//import {IBurger} from "./NewBurgerViewModel";

@Table
export class User extends Model<User> {
  // @Length({min: 1, max: 45})
  // @AllowNull(false)
  // @Column
  // FirstName: string;

  // @Length({min: 1, max: 45})
  // @AllowNull(false)
  // @Column
  // LastName: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  password: string;

  // @AllowNull(false)
  // @Column
  // type: string;

  // @BelongsToMany(() => Category, () => CounselorSkill)
  // categories: Category[];

  // @HasMany(() => Conversation)
  // Conversation: Conversation[];
}

export default User;

// function User(username, password) {
//   (this.username = username), (this.password = password);
// }

// module.exports = {
//   User: User
// };
