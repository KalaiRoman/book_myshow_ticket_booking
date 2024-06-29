import { createSlice } from '@reduxjs/toolkit'
const BrowserLoadingSlice = createSlice({
  name: 'Initial Browser Loading',
  initialState: {
   BrowserLoading:false
  },
  reducers: {
    BrowserLoadingFunction:(state, action)=>{
      state.BrowserLoading=action.payload
    },
  },
})
export const { BrowserLoadingFunction } = BrowserLoadingSlice.actions
export default BrowserLoadingSlice.reducer