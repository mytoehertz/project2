import { Category } from "../models/Category";
import Counselor from "../models/Counselor";
import Student from "../models/student";
import { CounselorSkill } from "../models/CounselorSkills";
import { Conversation } from "../models/Conversation";

class Services{

    async  getCategories():Promise<Array<Category>>{
        return  await  Category.findAll();
        }

    async  getCounselors(Categoryid: number):Promise<Array<Counselor>>{
        return  await  Counselor.findAll().then(counselor => {
            counselor.categories.filter(c=>c.id==Categoryid)});
        }

    async  getStudent():Promise<Array<Student>>{
        return  await  Student.findOne().then(student => {
            student.UserName.filter(s=>s.UserName==student.UserName)
        })
        }

    async  getCounselor():Promise<Array<Counselor>>{
        return  await  Counselor.findOne();
        }   
        
    async  getConversation():Promise<Array<Conversation>>{
        return  await  Conversation.findOne();
        }    
}


