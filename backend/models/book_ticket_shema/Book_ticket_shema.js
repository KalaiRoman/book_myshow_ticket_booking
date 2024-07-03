import mongoose from "mongoose";


const ticketArray_model=new mongoose.Schema({
    ticketId:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"auth"
    }
})
const Ticket_models=new mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
  tickets:[ticketArray_model]
},
{
    timestamps:true
});
mongoose.models={};
export default mongoose.model("ticket",Ticket_models);