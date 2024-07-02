import express from 'express';
import { get_controll, login_controll, register_controll } from './Auth_controlls.js';
import verifyToken from '../../middleware/tokenCheck/TokenCheckMiddleware.js';
const auth_router=express.Router();
auth_router.post("/register",register_controll);
auth_router.post("/login",login_controll);
auth_router.get("/get",verifyToken,get_controll)
export default auth_router;