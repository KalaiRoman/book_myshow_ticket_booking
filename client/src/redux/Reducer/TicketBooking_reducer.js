import { createSlice } from '@reduxjs/toolkit'
const BookingTicketSlice = createSlice({
  name: 'Booking Tickets',
  initialState: {
   Tickets:[]
  },
  reducers: {
    BookTicket:(state, action)=>{
      state.Tickets=[...state?.Tickets,action.payload]
    },
    filterTicket:(state, action)=>{
        state.Tickets=state?.Tickets?.filter((item)=>item!==action.payload)
      },
  },
})
export const { BookTicket,filterTicket } = BookingTicketSlice.actions
export default BookingTicketSlice.reducer