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
    IsEmail, BelongsToMany
} from 'sequelize-typescript';
import {Category} from "./Category";
import {CounselorSkill} from "./CounselorSkills";
import {Conversation} from "./Conversation";

//import {IBurger} from "./NewBurgerViewModel";


@Table
export class Counselor extends Model<Counselor> {

    @Length({min: 1, max: 45})
    @AllowNull(false)
    @Column
    FirstName: string;

    @Length({min: 1, max: 45})
    @AllowNull(false)
    @Column
    LastName: string;


    @AllowNull(false)
    @Column
    JoinDate: Date;

    @AllowNull(false)
    @IsEmail
    @Column
    Email: string;

    @BelongsToMany(() => Category, () => CounselorSkill)
    categories: Category[];

    @HasMany(() => Conversation)
    Conversation: Conversation[];


}

export default Counselor;