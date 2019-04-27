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

//import {IBurger} from "./NewBurgerViewModel";


@Table
export class Counselor extends Model<Counselor> {

    @Length({min: 1, max: 100})
    @AllowNull(false)
    @Column
    FirstName: string;

    @Length({min: 1, max: 100})
    @AllowNull(false)
    @Column
    LastName: string;

    @Length({min: 1, max: 100})
    @AllowNull(false)
    @Column
    Credentials: string;
    
    @AllowNull(false)
    @Column
    JoinDate: Date;

    @AllowNull(false)
    @IsEmail
    @Column
    Email: string;


}

export default Counselor;