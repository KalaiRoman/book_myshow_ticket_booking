import { useState } from 'react'
import instanceBaseurl from '../../config/AxiosBaseUrl'
function PostMethod() {
    const [loading,setLoading]=useState(false);
    const [response,setReponse]=useState({});
    const [errors,setErrors]=useState("");
const fetchPostMethodApi=async({url,data})=>{
    setLoading(true);
    setErrors(null);
    try {
        const responsePostMethod=await instanceBaseurl.post(`${url}`,data);
        if(responsePostMethod)
            {
                setReponse(responsePostMethod?.data?.data);
                setLoading(false);
            }
    } catch (error) {

        setErrors(error?.response?.data?.message || "An error occurred");
        setLoading(false);
    }
}
  return {loading,response,errors,fetchPostMethodApi}
}

export default PostMethod