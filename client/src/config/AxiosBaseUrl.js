
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const useAxiosUrl=()=>{
//     const [loading,setLoading]=useState(false);
//     const [response,setResponse]=useState({});
//     const [error,setError]=useState("");
//     // Base Url
//     const axiosInstance=axios.create({
//         baseURL:process.env.REACT_APP_BASE_URL
//     })

//     axiosInstance.defaults.withCredentials = true;

//     axiosInstance.interceptors.request.use(
//         (config) => {
          // const token = localStorage.getItem("ticket_token");
          // config.headers.Authorization = `${JSON.parse(token)}`;
//           return config;
//         },
//         (error) => {
//           return Promise.reject(error);
//         }
//       );
    
//       axiosInstance.interceptors.response.use(
//         (response) => {
//           console.log("Received response from:", response.config.url);
//           return response;
//         },
//         (error) => {
//           return Promise.reject(error);
//         }
//       );

//     useEffect(() => {
//         const source = axios.CancelToken.source();
//         return () => {
//           source.cancel("Component unmounted: Request cancelled.");
//         };
//       }, []);
//     const fetchData=async({url,method,data={},params={}})=>{
//         setLoading(true);
//         try {

//           // if(method.toLowerCase()==="post")
//           //   {
//           //     const result = await axiosInstance({
//           //       url,
//           //       method,
//           //       data:method.toLowerCase()==="post"?data:data, 
//           //       cancelToken: axios.CancelToken.source().token,
//           //     });
//           //     setResponse(result.data);
//           //   }
//           //   else{
//               const result = await axiosInstance({
//                 url,
//                 method,
//                 data:method.toLowerCase() === "get"? undefined : data, // Only include data for non-GET requests
//                 params: method.toLowerCase() === "get" ? data : params, // For GET requests, use data as query params
//                 cancelToken: axios.CancelToken.source().token,
//               });
//               setResponse(result.data);
//             // }
          
            
//         } catch (error) {
//             if (axios.isCancel(error)) {
//                 console.log("Request cancelled", error.message);
//               } else {
//                 setError(error.response ? error.response.data : error.message);
//               }
//         }finally
//         {
//             setLoading(false);
//         }
//     }
//     return { response, error, loading, fetchData };

// }
// export default useAxiosUrl;



import axios from 'axios';

const instanceBaseurl = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,

})

instanceBaseurl.defaults.withCredentials = true;

instanceBaseurl.interceptors.request.use(function (config) {
  const token = localStorage.getItem("ticket_token");
  // if(token)
  //   {
      config.headers.Authorization = `${JSON.parse(token)}`;
      return config;
    // }
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});
export default instanceBaseurl;