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
  const {Tickets}=state;
  useEffect(()=>{
  var AllInputSheats=[];
for(let i=1;i<BookingSheats?.length;i++)
  {
    const values={
      index:`S${i}`,
    }
    AllInputSheats.push(values);
  }
  setSheats(AllInputSheats);
  },[]);

  const handleTicketBooking = useCallback((paramsTicketId) => {
    if (paramsTicketId) {
        if (Tickets?.includes(paramsTicketId)) {
            dispatch(filterTicket(paramsTicketId));
        } else {
            setYourBookedTicket([...YourBookedticket, paramsTicketId]);
            dispatch(BookTicket(paramsTicketId));
        }
    }
}, [Tickets]);

  return (
    <div>
     <section>
     <Header/>
     </section>
      <section>
      <div className='w-[100%] h-[100vh] overflow-hidden lg:h-[100%]'>
<div className='d-flex gap-2 w-[100%] h-[100%]'>
<div className='col-lg-6 w-[50%]'>
<LeftSheats BookingSheats={sheat} handleTicketBooking={handleTicketBooking} Tickets={Tickets}/>
</div>
<div className='col-lg-6 w-[50%]'>
  <RightSheats BookingSheats={sheat}/>
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