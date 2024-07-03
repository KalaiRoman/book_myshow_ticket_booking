
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModalClose, LoginModalShow } from '../../redux/Reducer/Modal_show_form';
import { useState } from 'react';
import { ToastError } from '../../middleware/Toastmodels/ToastModels';
import { loginservices } from '../../services/serviceHookes/AllServiceHookes';

export const LoginModels=()=>{
    const state=useSelector((state)=>state?.authModal);

    const {loginModel}=state;
    const dispatch=useDispatch();
    const handleClose=()=>{
        dispatch(LoginModalClose());
    }

    const [user,setUser]=useState({
email:"",
password:""
    });

    const {email,password}=user;

    const handleChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value});
    }


    const formDatas=[
      {
        id:1,
        name:"email",
        value:email,
        label:"Email",
      },
      {
        id:2,
        name:"password",
        value:password,
        label:"Password"
      }
    ]

    const handleSubmit=async()=>{
      if(email && password)
        {

          const datas={
            "email":email,
            "password":password
          }
const response=await loginservices(datas);

setUser({
  email:"",
  password:""
})

localStorage.setItem("ticket_token",JSON.stringify(response?.data?.token));
handleClose();

        }
       
    }
    return(
        <>
        <button onClick={()=>dispatch(LoginModalShow())}>Login Model</button>
        <Modal
    show={loginModel}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <div>
{formDatas?.map((item,index)=>{
  return(
    <div>
      <label>{item?.label}</label>
      <div className='mt-2 mb-2'>
        <input  className="border p-3 rounded cursor-pointer w-[100%]" type="text" name={item?.name} placeholder={`Please Enter ${item?.label}`} value={item?.value} onChange={handleChange}/>
      </div>
    </div>
  )
})}

<div className='mt-4 mb-4'>
  <button onClick={handleSubmit} className='border p-3 rounded cursor-pointer w-[100%] bg-blue-500 text-white fw-bold fs-6'>Login</button>
</div>
     </div>
    </Modal.Body>
  
  </Modal>
        </>
    )
}