import mongoose from "mongoose";

const Ticket_models=new mongoose.Schema({
    ticketId:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"auth"
    }
},
{
    timestamps:true
});
mongoose.models={};
export default mongoose.model("ticket",Ticket_models);