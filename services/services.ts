import { Category } from "../models/Category";
import Counselor from "../models/Counselor";
import Student from "../models/student";
import { CounselorSkill } from "../models/CounselorSkills";

class Services{

    async  getCategories():Promise<Array<Category>>{
    return  await  Category.findAll();
    }

    async  getCounselors(Categoryid: number):Promise<Array<Counselor>>{
        return  await  CounselorSkill.findAll().then(Counselor=> {Counselor})
        }

    async  getStudent():Promise<Array<Student>>{
        return  await  Student.findOne();
        }

    async  getCounselor():Promise<Array<Counselor>>{
        return  await  Counselor.findOne();
        }    
}


