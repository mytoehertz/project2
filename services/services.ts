import { Category } from "../models/Category";
import Counselor from "../models/counselor";
import Student from "../models/student";
import { CounselorSkill } from "../models/CounselorSkills";
import Transaction from "sequelize";
import { Conversation } from "../models/Conversation";
import { Message } from "../models/Messages";
import MessageSender from "../models/messageSender";

export class Services {
  async getCategories(): Promise<Array<Category>> {
    return await Category.findAll();
  }

  async getCounselors(Categoryid: number): Promise<Array<Counselor>> {
    return await CounselorSkill.findAll().then(Counselor => {
      Counselor;
    });
  }

  async getStudent(): Promise<Array<Student>> {
    return await Student.findOne();
  }

  async getCounselorsByCategory(categoryId: number): Promise<Array<Counselor>> {
    let category = await Category.findOne();

    return category.counselors;
  }

  async getCounselorSender(): Promise<MessageSender> {
    return await MessageSender.findOne({
      where: { Message_Sender: "counselor" }
    });
  }

  async getStudentSender(): Promise<MessageSender> {
    return await MessageSender.findOne({
      where: { Message_Sender: "student" }
    });
  }

  async createMessage(
    conversationId: number,
    messageSenderId: number,
    message: string
  ): Promise<Message> {
    let newlyCreatedMessage = new Message();
    newlyCreatedMessage.Conversation_id = conversationId;
    newlyCreatedMessage.MessageSender_id = messageSenderId;
    newlyCreatedMessage.Message = message;

    return await newlyCreatedMessage.save();
  }

  async createConversation(
    categoryId: number,
    studentId: number,
    counselorId: number
  ): Promise<Conversation> {
    let conversation = new Conversation();

    conversation.Category_id = categoryId;
    conversation.Counselor_id = counselorId;
    conversation.Student_id = studentId;
    return await conversation.save();
  }

  async createStudent(userName: string, email: string): Promise<Student> {
    let student = new Student();

    student.UserName = userName;
    student.Email = email;
    student.JoinDate = new Date(Date.now());
    return await student.save();
  }

  async createCounselor(
    firstName: string,
    lastName: string,
    email: string,
    skillCategories: Array<number>
  ): Promise<Counselor> {
    let counselor = new Counselor();
    counselor.FirstName = firstName;
    counselor.LastName = lastName;
    counselor.Email = email;
    counselor.JoinDate = new Date(Date.now());

    await counselor.save();

    await this.createCounselorSkills(counselor.id, skillCategories);

    //  console.log(counselor.CounselorSkill);

    //  console.log(counselor);

    // let newlyCreatedCounselor= await Counselor.findOne({where:{id:counselor.id},include:[{model:CounselorSkill}]});

    //   skillCategories.forEach(c=>{let sk=new CounselorSkill(); sk.Categories_id=c; counselor.CounselorSkill.pu//sh(sk); counselor.isNewRecord=true;});

    //await counselor.save();

    //let skills: Array<Category>;
    //skills= skillCategories.map(s=> {let cat=new Category(); cat.id=s; return cat});

    //let counselorSkills: Array<CounselorSkill>;
    //counselorSkills= skills
    //  .map(s=>{let cs=new CounselorSkill(); cs.Categories_id=s.id; cs.Counselor_id=counselor.id; return cs});

    // counselorSkills.forEach(async cs=>await cs.save());

    return await counselor;
  }

  async createCounselorSkills(
    counselorId: number,
    categorySkills: Array<number>
  ): Promise<Array<CounselorSkill>> {
    let skills: Array<CounselorSkill>;
    skills = categorySkills.map(s => {
      let cs = new CounselorSkill();
      cs.Counselor_id = counselorId;
      cs.Categories_id = s;
      cs.isNewRecord = true;
      return cs;
    });

    skills.forEach(async s => await s.save());

    return skills;
  }

  async getCounselor(): Promise<Array<Counselor>> {
    return await Counselor.findOne();
  }

  async createCategory(categoryName: string): Promise<Category> {
    var cat = new Category();
    cat.Name = categoryName;

    return await cat.save();
  }
}

export default Services;
