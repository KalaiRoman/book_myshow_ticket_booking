import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../middleware/header/Header'
import Footer from '../../middleware/footer/Footer'
import LeftSheats from './LeftSheats'
import RightSheats from './RightSheats'
import { useDispatch, useSelector } from 'react-redux'
import { BookTicket,filterTicket } from '../../redux/Reducer/TicketBooking_reducer'
function Home() {
  const [sheat,setSheats]=useState([]);
  const BookingSheats=Array(341)?.fill("Sheats");
  const dispatch=useDispatch();
  const state=useSelector((state)=>state?.tickBook);
  const [YourBookedticket,setYourBookedTicket]=useState([]);

  const [error,setError]=useState("");
  const {Tickets}=state;

  useEffect(()=>{
  var AllInputSheats=[];
for(let i=1;i<BookingSheats?.length;i++)
  {
    const values={
      index:`S${i}`,
      status:false
    }
    AllInputSheats.push(values);
  }
  setSheats(AllInputSheats);
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

  return (
    <div>
     <section>
     <Header/>
     </section>
      <section>
      <div className='w-[100%] h-[100vh] overflow-hidden lg:h-[100%]'>
      <div className='text-danger'>
        {YourBookedticket?.length>9 && <>
        
    {error && <div>{error}</div>}
    </>}
  </div>
<div className='d-flex gap-2 w-[100%] h-[100%]'>

<div className='col-lg-6 w-[50%]'>
<LeftSheats BookingSheats={sheat} handleTicketBooking={YourBookedticket?.length>9?TicketBooked:handleTicketBooking} Tickets={Tickets}/>
</div>
<div className='col-lg-6 w-[50%]'>
  <RightSheats BookingSheats={sheat} handleTicketBooking={YourBookedticket?.length>9?TicketBooked:handleTicketBooking} Tickets={Tickets}/>
</div>
</div>
      </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Home