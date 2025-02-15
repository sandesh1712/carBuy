import { Column, Entity } from "typeorm";
import SuperModel from "./Super";
import AppDataSource from "../db.config";


@Entity()
export default class User extends SuperModel {
    @Column()
    first_name:string;
    
    @Column()
    last_name:string;

    @Column()
    email:string;

    @Column()
    phone:string;

    @Column()
    passowrd:string;

    static getRepository(){
        return AppDataSource.getRepository(User);
    }
}