import {useState,CSSProperties} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };
export const Loader=()=>{

 
return (
    <div className='loader'>
        <ClimbingBoxLoader
        color={"#36d7b7"}
        loading={true}
        // cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
)
}