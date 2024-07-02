
// register
import { ResponseErrorData, ResponseSuccessData } from "../../middleware/responseData/ResponseData.js";
import auth_shema_model from "../../models/auth_shema/auth_shema_model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register_controll=async(req,res)=>{
    try {
        const {email,password,address,city,pincode,mobileNo}=req.body;
        const genSalt=await bcrypt.genSalt(10);
        const hanshedPassword=await bcrypt.hash(password,genSalt);
        const existMailCheck=await auth_shema_model.findOne({email:email});
        if(existMailCheck) return ResponseErrorData({res,success:false,message:"Email Already Exists",code:404});  
        const token = jwt.sign({_id:existMailCheck?._id},process.env.tokenId,{expiresIn:"2d"});
        const {password:_,...otherData}=existMailCheck?._doc; 
        if(email && password && address && city && pincode && mobileNo)
            {
const response=await auth_shema_model({
    "email":email,
    "password":hanshedPassword,
    "address":address,
    "city":city,
    "pincode":pincode,
    "mobileNo":mobileNo
});
await response.save();
const tokenResponseData={
    "user":otherData,
    "token":token
}
return ResponseSuccessData({res,success:true,message:"User Created Sucessfully",data:tokenResponseData,code:201});
            }
            else{
                return ResponseErrorData({res,success:false,message:"Please Enter All Fields",code:404});
            }
        
    } catch (error) {
    return ResponseErrorData({res,success:false,message:"Error on Server",code:500});
    }
}

// login

export const login_controll=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const existMailCheck=await auth_shema_model.findOne({email:email});
        const hanshedPassword=await bcrypt.compare(password,existMailCheck.password);
        const token = jwt.sign({_id:existMailCheck?._id},process.env.tokenId,{expiresIn:"2d"});
        const {password:_,...otherData}=existMailCheck?._doc;
        if(hanshedPassword){    
            const tokenData={
                "user":otherData,
                "token":token
            }
           return ResponseSuccessData({res,success:true,message:"User Login Sucessfully",data:tokenData,code:200});
        }
        else{
            return ResponseErrorData({res,success:false,message:"Wrong Password",code:404});
        }
    } catch (error) {
    return ResponseErrorData({res,success:false,message:"Error on Server",code:500});
    }
}
// forgetpassorwd

// change-password

// get user details

export const get_controll=async(req,res)=>{
    try {
        const getDetailsuser=await auth_shema_model.findById({_id:req.userid});
        const {password,...otherData}=getDetailsuser?._doc;
            const getUserData={
                "user":otherData,
            }
           return ResponseSuccessData({res,success:true,message:"User Get Details Sucessfully",data:getUserData,code:200});
       
    } catch (error) {
    return ResponseErrorData({res,success:false,message:"Error on Server",code:500});
    }
}