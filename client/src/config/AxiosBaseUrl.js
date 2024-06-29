
import { useEffect, useState } from 'react';
import axios from 'axios';
const useAxiosUrl=()=>{
    const [loading,setLoading]=useState(false);
    const [response,setResponse]=useState({});
    const [error,setError]=useState("");
    // Base Url
    const axiosInstance=axios.create({
        baseURL:""
    })

    axiosInstance.interceptors.request.use(
        (config) => {
          console.log("Sending request to:", config.url);
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    
      axiosInstance.interceptors.response.use(
        (response) => {
          console.log("Received response from:", response.config.url);
          return response;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

    useEffect(() => {
        const source = axios.CancelToken.source();
        return () => {
          source.cancel("Component unmounted: Request cancelled.");
        };
      }, []);
    

    const fetchData=async({url,method,data={},params={}})=>{
        setLoading(true);
        try {
            const result = await axiosInstance({
                url,
                method,
                data: method.toLowerCase() === "get" ? undefined : data, // Only include data for non-GET requests
                params: method.toLowerCase() === "get" ? data : params, // For GET requests, use data as query params
                cancelToken: axios.CancelToken.source().token,
              });
              setResponse(result.data);
            
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log("Request cancelled", error.message);
              } else {
                setError(error.response ? error.response.data : error.message);
              }
        }finally
        {
            setLoading(false);
        }
    }
    return { response, error, loading, fetchData };

}
export default useAxiosUrl;