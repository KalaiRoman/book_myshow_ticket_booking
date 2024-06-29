import React,{memo} from 'react'
function RightSheats({BookingSheats}) {
  return (
    <div className='p-[5%]'>
        <div className='row gap-2'>
{BookingSheats?.slice(170,340)?.map((item,index)=>{
    return(
        <div className='sheat-box col-lg-1' key={index+2}>
         {item?.index}
        </div>
    )
})}
</div>
    </div>
  )
}

export default memo(RightSheats);