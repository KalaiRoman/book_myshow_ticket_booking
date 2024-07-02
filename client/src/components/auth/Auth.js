// // import React, { useContext, useState } from 'react'
// // import { v4 as uuidv4 } from 'uuid';
// // import { AppContext } from '../../contextApi/ContextApi';
// // function Auth() {

// //     const name=useContext(AppContext);
// //     const [data,setData]=useState([]);
// //     const [inputs,setInputs]=useState("");
// //     const [editid,setEditId]=useState("")
// //     const add=()=>{
// //         const datas={
// //             name:inputs,
// //             id:uuidv4()
// //         }
// //         console.log(datas,'datas')
// //         setData([...data,datas]);
// //         setInputs("");
// //     }
// //     const editData=(id)=>{
// //         const findValue=data?.find((item)=>item?.id===id);
// //         setInputs(findValue?.name);
// //     setEditId(id);
// //     }
// //     const updataData=()=>{
// //         const filters=[...data];
// //         const findIndexValue=data?.findIndex((item)=>item?.id!==editid);
// //         filters[findIndexValue].name=inputs;
// //         setData(filters);
// //         setInputs("");
// //         setEditId("");
// //     }
// //     const deleteData=(id)=>{
// //         const filters=data?.filter((item)=>{
// //             return item?.id!==id
// //         });
// //         setData(filters);
// //     }


// //     const datas=[3,5,6,7,8,9,0,6];

// //     const forms=()=>{
// //         const frt=datas.filter((item)=>item<=6 || item<=9);

// //         return frt;
// //     }
// //     console.log(forms());
// //   return (
// //     <div>


// // {name?.name} {name?.age} 
// //         <div className='d-flex gap-4 mx-auto mt-4 align-items-center w-[80%]'>
// //             <div><input className='border' type="text" placeholder="enter Name" value={inputs} onChange={(e)=>setInputs(e.target.value)}/></div>
// //         <div>
// //             <button onClick={editid?updataData:add} className='border bg-green-600 text-white-500'>{editid?"update Data":"Add +"} </button></div>
// //         </div>

// // {editid}
// //         {data && data?.map((item,index)=>{
// //             return(
// //                 <div className='d-flex mt-3 border gap-4' key={index}>
// //                     <div>{item?.name}</div>
// //                     <div>
// //                     <button className='border p-2 cursor-pointer bg-blue-400 text-white-600' onClick={()=>editData(item?.id)}>edit</button>
// //                         <button className='border p-2 cursor-pointer bg-red-400 text-white-600' onClick={()=>deleteData(item?.id)}>delete</button>
// //                     </div>
// //                 </div>
// //             )
// //         })}
// //     </div>
// //   )
// // }

// // export default Auth

// import React, { useEffect, useState } from 'react'

// const Auth = () => {
//     const [count,setCount]=useState(0);


//     useEffect(()=>{


//         const timeersData=setInterval(() => {
//             setCount((pre)=>pre+1);
//         }, 3000);


//         return ()=>{
//             clearInterval(timeersData);
//         }
//     },[]) /* only one time render in mounte dependies array*/
//   return (
//     <div>
//       {count}
//     </div>
//   )
// }

// export default Auth



import React, { useEffect, useState } from 'react'

function Auth() {
//     const datas=[2,8,14,20,26];
//     const form=(params)=>{
//  const filters=parseInt(params.slice(-1));
//  params.push(Number(filters)+6);
//  console.log(params);
//     }
//     form(datas);



var v="m";
var v="5"

console.log(v,'sv')
  return (
    <div>Auth    </div>
  )
}

export default Auth
