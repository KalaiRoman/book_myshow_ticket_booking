import React from 'react'
import { LoginModels } from '../../Modalpopup/AuthModels/AuthModels'

function Header() {

  return (
    <div className='border w-[100%] h-[70px] d-flex align-items-center justify-between pl-3 pr-4'>
      <div>
        <button >dAEK mODE</button>
      </div>
      <div className='cursor-pointer'>

      </div>
      <div>
        <LoginModels/>
      </div>
    </div>
  )
}

export default Header