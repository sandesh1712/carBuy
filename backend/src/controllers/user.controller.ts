import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController {
    
   constructor(private userService:UserService){}

   async register(req:Request,res:Response){
      try {
        const user = await this.userService.create(req.body); 
        res.status(201).send(user);
      }catch(err){
        res.status(400).send(err);
      }
   } 
}