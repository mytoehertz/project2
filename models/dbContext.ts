import {Sequelize, SequelizeOptions} from "sequelize-typescript";
import {Student} from "./Student";


class options implements SequelizeOptions {

}

let dbConnectionOptions = new options();


export class DbContext {
    Context: Sequelize;

    constructor() {
        this.Context = new Sequelize({
            database: 'fleshEaters',
            dialect: 'mysql',
            username: 'root',
            password: '-----'
            //storage: ':memory:',
            //modelPaths: [__dirname + '/models']
        });
        this.Context.addModels([Student]);

    }
}


export default DbContext;
