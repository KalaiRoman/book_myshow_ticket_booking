import useAxiosUrl from "../../config/AxiosBaseUrl"
import { All_Apis } from "../allApis/AllApis";

export const Login_services=async(data)=>{
    const {fetchData}=useAxiosUrl();
        fetchData({
            url:All_Apis?.login_api,
            method:"POST",
            data:data,
        })
}