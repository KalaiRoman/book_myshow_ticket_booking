import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import colors from 'colors';
import ConnectDataBase from './dbconnect/DBConnect.js';
const app=express();
app.use(express.json());
dotenv.config({ path: [".env.development",".env.production"] });
ConnectDataBase();
app.use(cors({credentials:true,origin:["*"]}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
const PortNumber=process.env.PORT;
app.listen(()=>{
    console.log(`Running Port ${PortNumber.red}`)
})