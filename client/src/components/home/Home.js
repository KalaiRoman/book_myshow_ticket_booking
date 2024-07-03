import React from 'react'
import Header from '../../middleware/header/Header'
import Footer from '../../middleware/footer/Footer'
import {useNavigate } from 'react-router-dom';
import { book_services } from '../../services/serviceHookes/AllServiceHookes';
function Home() {


    const navigate=useNavigate ();

    const movienNameList=["Garudan","PT Sir","Rasavathi","Aranmanai 4","Teenz","Indian 2","Lal Salaam","Ayalaan","Captain Miller","Merry Christmas","Amaran","The Greatest of All Time","Bharateeyudu 2"]

  
    const TicketBooking=async(paramsMoview)=>
    {
            const data={
                movieName:paramsMoview
              }
              const response=await book_services(data);
              if(response)
                {
        navigate(`/ticket/${paramsMoview}`);
                    
                }
    }
  
    return (
    <div>
        <section>
            <Header/>
        </section>
        <section>
            
            <div className='row gap-3 mt-4 mb-5 mx-auto w-[90%]'>
                {movienNameList?.map((item,index)=>{
                    return(
                        <div onClick={()=>TicketBooking(item)} className='border rounded cursor-pointer bg-green-500 text-white w-[25%] col-lg-2 p-2 mt-2 mb-3 fs-6 fw-bold' key={index}>
{item}
                        </div>
                    )
                })}
            </div>
        </section>
        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Home