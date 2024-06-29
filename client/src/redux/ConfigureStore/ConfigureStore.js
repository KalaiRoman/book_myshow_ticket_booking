import BrowserLoadingslice from "../Reducer/Browser_loading_Reducer";
import ModalFormSlice from '../Reducer/Modal_show_form';
import BookingTickets from '../Reducer/TicketBooking_reducer';
export const AllReducers={
    InitialLoading:BrowserLoadingslice,
    authModal:ModalFormSlice,
    tickBook:BookingTickets
}