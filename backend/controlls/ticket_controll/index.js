import express from 'express';
import { ticket_create, ticket_get_user } from './Ticket_controll.js';
import verifyToken from './../../middleware/tokenCheck/TokenCheckMiddleware.js';
const ticket_router=express.Router();
ticket_router.post("/book",verifyToken,ticket_create)
ticket_router.get("/booked/get",verifyToken,ticket_get_user)
export default ticket_router;