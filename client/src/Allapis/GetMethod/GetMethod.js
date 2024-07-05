import { useState } from 'react'
import instanceBaseurl from '../../config/AxiosBaseUrl'
function GetMethod() {
    const [loading,setLoading]=useState(false);
    const [response,setReponse]=useState({});
    const [errors,setError]=useState(null);
const fetchGetMethodApi=async({url,params})=>{
    const urlMerage=params?`${url}/${params}`:`${url}`
    setLoading(true);
    setError(null);
    try {
        const responsePostMethod=await instanceBaseurl.get(`${urlMerage}`);
        if(responsePostMethod)
            {
                setLoading(false);
                setReponse(responsePostMethod?.data?.data);
            }
    } catch (error) {
        setError(error?.response?.data?.message);
        setLoading(false);
    }finally
    {
        setLoading(false);
    }
}
  return {loading,response,errors,fetchGetMethodApi}
}

export default GetMethod