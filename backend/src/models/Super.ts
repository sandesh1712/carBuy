import { PrimaryGeneratedColumn } from "typeorm";

export default abstract class SuperModel {
   @PrimaryGeneratedColumn()
    id:number;
}