import express from 'express';
import auth_router from '../controlls/auth_controll/index.js';
import ticket_router from '../controlls/ticket_controll/index.js';

const router_all=express.Router();


// auth

router_all.use("/auth",auth_router);

// tick booking

router_all.use("/ticket",ticket_router)

export default router_all;