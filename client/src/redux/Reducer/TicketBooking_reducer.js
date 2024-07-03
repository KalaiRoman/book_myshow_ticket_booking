import { createSlice } from '@reduxjs/toolkit'
const BookingTicketSlice = createSlice({
  name: 'Booking Tickets',
  initialState: {
   Tickets:[],
   allTickets:[]
  },
  reducers: {
    AllTicketNos:(state,action)=>{
      state.allTickets.push(action.payload)
    },
    BookTicket:(state, action)=>{
      state.Tickets=[...state?.Tickets,action.payload]
    },
    filterTicket:(state, action)=>{
        state.Tickets=state?.Tickets?.filter((item)=>item!==action.payload)
      },
  },
})
export const { BookTicket,filterTicket,AllTicketNos } = BookingTicketSlice.actions
export default BookingTicketSlice.reducer