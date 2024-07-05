import { useState } from 'react'
import instanceBaseurl from '../../config/AxiosBaseUrl'
function DeleteMethod() {
    const [loading,setLoading]=useState(false);
    const [response,setReponse]=useState({});
    const [errors,setError]=useState(null);
const fetchDeleteMethodApi=async({url,params})=>{
    const urlMerage=params?`${url}/${params}`:`${url}`
    setLoading(true);
    setError(null);
    try {
        const responsePostMethod=await instanceBaseurl.delete(`${urlMerage}`);
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
  return {loading,response,errors,fetchDeleteMethodApi}
}

export default DeleteMethod