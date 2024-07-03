import instanceBaseurl from "../../config/AxiosBaseUrl";
import { All_Apis } from "../allApis/AllApis";



// export const login_services=async(datas)=>{
//     console.log(datas,"kl")
//     try {
//         const response=await instanceBaseurl.post(`/auth/login`,datas);

//         return response.data;
//     } catch (error) {
//      console.log(error)   
//     }
// }


export async function loginservices(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/login`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const book_services=async(data)=>{
    try {
        const response=await instanceBaseurl.post(All_Apis?.ticket_book_api,data);
        return response;
    } catch (error) {
     console.log(error)   
    }
}


export const get_booked_services=async(data)=>{
    try {
        const response=await instanceBaseurl.get(`${All_Apis?.get_booked_ticktes}/${data}`);
        return response;
    } catch (error) {
     console.log(error)   
    }
}
