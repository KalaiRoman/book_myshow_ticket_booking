import { createSlice } from '@reduxjs/toolkit'
const ModalFormSlice = createSlice({
  name: 'Login and Signup Form',
  initialState: {
   loginModel:false,
   signupModel:false,
  },
  reducers: {
    LoginModalShow:(state, action)=>{
      state.loginModel=true
    },
    LoginModalClose:(state, action)=>{
        state.loginModel=false
      },
    SignupModalShow:(state, action)=>{
        state.signupModel=true
      },
    SignupModalClose:(state, action)=>{
        state.signupModel=false
      },
  },
})
export const { LoginModalShow,LoginModalClose,SignupModalShow,SignupModalClose } = ModalFormSlice.actions
export default ModalFormSlice.reducer