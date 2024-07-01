import React from 'react'

function Header() {

  const clicks=()=>{
    console.log("kalak")
    window.alert("kalai")
  }
  return (
    <div className='border w-[100%] h-[70px] d-flex align-items-center justify-between pl-3 pr-4'>
      <div>
<button onClick={()=>clicks()}>thla</button>
      </div>
      <div className='cursor-pointer'>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Header