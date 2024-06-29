import React,{memo} from 'react'
function RightSheats({BookingSheats,Tickets,handleTicketBooking}) {
  return (
    <div className='p-[5%]'>
        <div className='row gap-2'>
{BookingSheats?.slice(170,340)?.map((item,index)=>{
    return(
        <div className={`${Tickets?.includes(item?.index)?"booked-box col-lg-1":"sheat-box col-lg-1"}`} key={index} onClick={()=>handleTicketBooking(item?.index)}>
           {item?.index}
        </div>
    )
})}
</div>
    </div>
  )
}

export default memo(RightSheats);