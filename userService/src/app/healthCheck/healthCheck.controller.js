import asyncHandler from "../../util/asyncHandler.js"
import ApiResponse from "../../util/apiResponse.js"
export const healthCheck=asyncHandler((req,res)=>{
    res.send(new ApiResponse(200,'Health Check successFul'))
})