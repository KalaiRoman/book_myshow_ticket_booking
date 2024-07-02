import React,{ createContext } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const data={
        name:"kalai",
        age:"20"
    };
    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider,AppContext};