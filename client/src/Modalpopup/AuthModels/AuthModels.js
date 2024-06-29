
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { LoginModalClose, LoginModalShow } from '../../redux/Reducer/Modal_show_form';

export const LoginModels=()=>{
    const state=useSelector((state)=>state?.authModal);
    const {loginModel}=state;
    const dispatch=useDispatch();
    const handleClose=()=>{
        dispatch(LoginModalClose());
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
      <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <div>
      Modal
     </div>
    </Modal.Body>
  
  </Modal>
        </>
    )
}