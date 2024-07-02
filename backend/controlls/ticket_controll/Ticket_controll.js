
import { ResponseErrorData, ResponseSuccessData } from "../../middleware/responseData/ResponseData.js";
import Book_ticket_shema from "../../models/book_ticket_shema/Book_ticket_shema.js"

// create ticket
export const ticket_create=async(req,res)=>{
    const {ticketId}=req.body;
    try {
        const existTicketIdCheck=await Book_ticket_shema.find({}).lean();
        const filterData=[];
        existTicketIdCheck?.map((item)=>{
            filterData.push(item?.ticketId);
        })
        if(filterData?.length>0)
            {
                if(filterData?.includes(ticketId))
                    {
                        return ResponseErrorData({res,success:false,message:"Ticket Alreay Booked",code:404})
                    }
                    else{
                        const response=await Book_ticket_shema({
                            "ticketId":ticketId,
                            "userId":req.userId 
                        })
                        await response.save();
                        return ResponseErrorData({res,success:false,message:"Ticket Booked",code:201})
                    }
            }
            else{
                    const response=await Book_ticket_shema({
                        "ticketId":ticketId,
                        "userId":req.userId 
                    })
                    await response.save();
                    return ResponseSuccessData({res,success:false,message:`Ticket Booked ${ticketId}`,code:201})
                }
    } catch (error) {
        return ResponseErrorData({res,success:false,message:"Server Error",code:404})
        
    }
}


// get ticket single Person
export const ticket_get_user=async(req,res)=>{
    try {
        const existTicketIdCheck=await Book_ticket_shema.find({userid:req.userId}).lean();
        const filterData=[];
        existTicketIdCheck?.map((item)=>{
            filterData.push(item?.ticketId);
        })
        return ResponseSuccessData({res,success:false,message:"Ticket Booked Single User",data:filterData,code:200})
    } catch (error) {
        return ResponseErrorData({res,success:false,message:"Server Error",code:404})
        
    }
}