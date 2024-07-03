import React, { useCallback, useEffect, useState,memo } from 'react'
import Header from '../../middleware/header/Header'
import LeftSheats from './LeftSheats'
import RightSheats from './RightSheats'
import { useDispatch, useSelector } from 'react-redux'
import { AllTicketNos, BookTicket,filterTicket } from '../../redux/Reducer/TicketBooking_reducer'
import { book_services, get_booked_services } from '../../services/serviceHookes/AllServiceHookes'
import { useParams } from 'react-router-dom'
function TicketsSection() {
  const {name}=useParams();
  const BookingSheats=Array(341)?.fill("Sheats");
  const dispatch=useDispatch();
  const state=useSelector((state)=>state?.tickBook);
  const [YourBookedticket,setYourBookedTicket]=useState([]);
  const [YourBookedticketpay,setYourBookedTicketPay]=useState(null);
  const [YourBookedticketOtherpay,setYourBookedTicketOtherPay]=useState(null);


  const [error,setError]=useState("");
  const {Tickets,allTickets}=state;
  useEffect(()=>{
for(let i=1;i<BookingSheats?.length;i++)
  {
    const values={
      index:`S${i}`,
      status:false
    }
  dispatch(AllTicketNos(values))

  }


  },[]);
  const TicketBooked=(paramsTicketId)=>{
      setError("One Person Booked Ticket Only 10, Please Login Another Email Id");
      if (paramsTicketId) {
        if (Tickets?.includes(paramsTicketId)) {
          const filterLocalTickets=YourBookedticket?.filter((item)=>item!==paramsTicketId);
          setYourBookedTicket(filterLocalTickets)
            dispatch(filterTicket(paramsTicketId));
        }
        else {
          if(YourBookedticket?.length>9)
            {
            }
            else{
              setYourBookedTicket([...YourBookedticket, paramsTicketId]);
              dispatch(BookTicket(paramsTicketId));
            }
         
      }
      }
  }

  const handleTicketBooking = useCallback((paramsTicketId) => {
    if (paramsTicketId) {
        if (Tickets?.includes(paramsTicketId)) {
          const filterLocalTickets=YourBookedticket?.filter((item)=>item!==paramsTicketId);
          setYourBookedTicket(filterLocalTickets)
            dispatch(filterTicket(paramsTicketId));
        } else {
            setYourBookedTicket([...YourBookedticket, paramsTicketId]);
            dispatch(BookTicket(paramsTicketId));
        }
    }
}, [Tickets,error]);
const BookTicketApi=()=>{

  const datas={
    "tickets":YourBookedticket,
    "movieName":name
  }
  book_services(datas);
}


const Booked_user_tickets=async()=>{
  try {
    const response=await get_booked_services(name);
    if(response)
      {
        setYourBookedTicketPay(response?.data?.data?.Your_tickets);
        setYourBookedTicketOtherPay(response?.data?.data?.OtherUserTickets);
      }
  } catch (error) {
  }
}
useEffect(()=>{
  if(name)
    {
      Booked_user_tickets();
    }
},[name])
  return (
    <div>
     <section>
     <Header/>
     </section>
      <section>
      <div className='w-[100%] h-[100vh] overflow-hidden lg:h-[100%]'>
      {/* <div>
      <button onClick={BookTicketApiMoviewType} className='border d-flex align-items-center mx-auto bg-orange-600 text-white cursor-pointer p-2 rounded fs-5 fw-bold'>Movie Ticket Now </button>

      </div> */}
      <div className='text-danger'>
        {YourBookedticket?.length>9 && <>
    {error && <div>{error}</div>}
    </>}
  </div>


<div className='d-flex gap-2 w-[100%] h-[100%]'>

<div className='col-lg-6 w-[50%]'>
<LeftSheats BookingSheats={allTickets}
handleTicketBooking={YourBookedticket?.length>9?TicketBooked:handleTicketBooking} Tickets={Tickets}
YourBookedticketpay={YourBookedticketpay}
YourBookedticketOtherpay={YourBookedticketOtherpay}
/>
</div>
<div className='col-lg-6 w-[50%]'>
  <RightSheats 
  BookingSheats={allTickets}
  handleTicketBooking={YourBookedticket?.length>9?TicketBooked:handleTicketBooking} Tickets={Tickets}
  YourBookedticketpay={YourBookedticketpay}
  YourBookedticketOtherpay={YourBookedticketOtherpay}
  />
</div>
</div>

      </div>
      </section>
      <section>
       <div className='mb-5 mt-1 ms-5'>

        {YourBookedticket?.length>0 ?<>
          <button onClick={BookTicketApi} className='border d-flex align-items-center mx-auto bg-orange-600 text-white cursor-pointer p-2 rounded fs-5 fw-bold'>Book Ticket Now ({YourBookedticket?.length})</button>
        
        </>:null}
       </div>
      </section>
    </div>
  )
}

export default memo(TicketsSection)