import { useState } from 'react'
import instanceBaseurl from '../../config/AxiosBaseUrl'
function UpdatedMethod() {
    const [loading,setLoading]=useState(false);
    const [response,setReponse]=useState({});
    const [errors,setError]=useState(null);
const fetchUpdateMethodApi=async({url,params,data})=>{
    const urlMerage=params?`${url}/${params}`:`${url}`
    setLoading(true);
    setError(null);
    try {
        const responsePostMethod=await instanceBaseurl.put(`${urlMerage}`,data);
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
  return {loading,response,errors,fetchUpdateMethodApi}
}

export default UpdatedMethod