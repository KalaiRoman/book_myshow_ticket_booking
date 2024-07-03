
import { ResponseErrorData, ResponseSuccessData } from "../../middleware/responseData/ResponseData.js";
import Book_ticket_shema from "../../models/book_ticket_shema/Book_ticket_shema.js"

// create ticket
export const ticket_create = async (req, res) => {
    const { movieName, tickets } = req.body;
    try {
        let movieTicket = await Book_ticket_shema.findOne({ movieName });

        
        if (movieTicket) {
            const UserTickets = tickets;
            const DatBaseBookedTickets = movieTicket?.tickets;
            const ticketExists = DatBaseBookedTickets?.some(item => UserTickets?.includes(item?.ticketId));
            if (ticketExists) {
                return ResponseErrorData({ res, success: false, message: "This Ticket Already Sold", code: 500 });
            }
            const bookTickets = tickets.map(item => ({ ticketId: item, userId: req.userid }));
            await Book_ticket_shema.updateOne(
                { movieName },
                { $push: { tickets: bookTickets } }
            );
            return ResponseSuccessData({ res, success: true, message: `Ticket Booked`, code: 201 });
        } else {
            const newTicket = new Book_ticket_shema({
                tickets: [],
                movieName: movieName
            });
            await newTicket.save();
            return ResponseSuccessData({ res, success: true, message: `Ticket Booked`, code: 201 });
        }
    } catch (error) {
        console.error("Server Error:", error);
        return ResponseErrorData({ res, success: false, message: "Server Error", code: 500 });
    }
};





// get ticket single Person
export const ticket_get_user=async(req,res)=>{

    const movieName=req.params.movieName;

    try {
        const existTicketIdCheck=await Book_ticket_shema.findOne({movieName}).lean();
        const filterData=[];
        const filterOtherData=[];

        if(existTicketIdCheck?.tickets?.length>0)
            {
                existTicketIdCheck?.tickets?.map((item)=>{

                    if(item?.userId==req.userid)
                        {
                            filterData.push(item?.ticketId);
        
                        }
                        else{
                            filterOtherData.push(item?.ticketId);
        
                        }
                })
            }

      

        const ticketUsers={
            "Your_tickets":filterData,
            "OtherUserTickets":filterOtherData
        }
        return ResponseSuccessData({res,success:false,message:"Ticket Booked Single User",data:ticketUsers,code:200})
    } catch (error) {
        return ResponseErrorData({res,success:false,message:"Server Error",code:404})
        
    }
}