import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import cors from "cors";
import userRouter from './routes/user.routes';

export const app = express();

//add middlewares below
app.use(bodyParser.json());
app.use(cors())


//add routes below
app.use("/users",userRouter);