
export const ResponseSuccessData=({res,success,message,data,code})=>{
        return res.status(code).json({
            "status":success,
            "message":message,
            "data":data,
            "code":code
        })
}


export const ResponseErrorData=({res,success,message,code})=>{
        return res.status(code).json({
            "status":success,
            "message":message,
            "code":code
        })
}