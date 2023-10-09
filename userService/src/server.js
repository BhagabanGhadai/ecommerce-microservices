import express from 'express';
import ApiError from './util/apiError.js';
import { errorHandler } from './util/middleWare/error-handler.js';

import healthCheckRouter from './app/healthCheck/healthCheck.routes.js'
export const expressApp = async (app) => {
   app.use(express.json())
   app.use(express.urlencoded({ extended: true }))
   app.use('/api/v1/healthcheck',healthCheckRouter)
   app.use((req,res,next)=>{
      throw new ApiError(404,"Api not found")
   })
   app.use(errorHandler)
}

