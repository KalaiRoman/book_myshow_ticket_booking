import mongoose from "mongoose";
const auth_shema_models=new mongoose.Schema({
    userName:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})
mongoose.models={};
export default mongoose.model("auth",auth_shema_models);