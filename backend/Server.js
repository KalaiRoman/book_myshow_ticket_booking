import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import colors from 'colors';
import margon from 'morgan';
import ConnectDataBase from './dbconnect/DBConnect.js';
import router_all from './routing/AllRoutings.js';
const app=express();
app.use(express.json());
dotenv.config();
ConnectDataBase();
app.use(cors({credentials:true,origin:["http://localhost:3001","http://localhost:3000"]}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(margon("dev"));
const PortNumber=process.env.PORT;
// api class
app.use("/ticket/api/v1",router_all)
app.listen(PortNumber,()=>{
    console.log(`Running Port ${PortNumber.red}`)
})