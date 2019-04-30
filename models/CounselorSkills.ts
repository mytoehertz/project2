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
    IsEmail
} from 'sequelize-typescript';
import Counselor from "./Counselor";
import {Category} from "./Category";


@Table
export class CounselorSkill extends Model<CounselorSkill> {

    @ForeignKey(() => Category)
    @Column
    Categories_id: number;

    @ForeignKey(() => Counselor)
    @Column
    Counselor_id: number


}