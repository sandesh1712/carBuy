import { Repository } from "typeorm";
import User from "../models/User";


export default class UserService {
    
    constructor(private userRepo:Repository<User>){}

    async create(data:Partial<User>){
        if(!await this.findOne({email: data.email })){
            throw new Error("User already Exists");
        } 
        const user = this.userRepo.create(data);
        return  await this.userRepo.insert(user);
    }

    async findOne(condition:{}){
        return await this.userRepo.findOne({where : condition});
    }
}