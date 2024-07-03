import React,{memo} from 'react'
import './styles.scss';
function LeftSheats({BookingSheats,handleTicketBooking,Tickets,YourBookedticketpay,YourBookedticketOtherpay}) {
  return (
    <div className='p-[5%]'>
<div className='row gap-2'>
{BookingSheats?.slice(0,170)?.map((item,index)=>{
    return(
        // <div className={`${Tickets?.includes(item?.index)?"booked-box col-lg-1":"sheat-box col-lg-1"}`} key={index} onClick={()=>handleTicketBooking(item?.index)}>
        //    {/* {item?.index} */}
        // </div>

        <div className={`${YourBookedticketpay && YourBookedticketpay?.includes(item?.index)?"your_tickets col-lg-1":YourBookedticketOtherpay && YourBookedticketOtherpay?.includes(item?.index)?"Other_tickets col-lg-1":Tickets?.includes(item?.index)?"booked-box col-lg-1":"sheat-box col-lg-1"}`} key={index} onClick={()=>handleTicketBooking(item?.index)}>
        {/* {item?.index} */}
     </div>
    )
})}
</div>

    </div>
  )
}   

export default memo(LeftSheats)