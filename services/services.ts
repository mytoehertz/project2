import { Category } from "../models/Category";
import Counselor from "../models/Counselor";

class Services{

  async  getCategories():Promise<Array<Category>>{
    return  await  Category.findAll();
    }

    async  getCounselor():Promise<Array<Counselor>>{
        return  await  Counselor.findAll();
        }
}


