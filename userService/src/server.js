import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import ApiError from './util/apiError.js';
import { errorHandler } from './util/middleWare/error-handler.js';
import { verifyBlackList } from './util/middleWare/auth.middleware.js';
import env from '../src/env.js'
import healthCheckRouter from './app/healthCheck/healthCheck.routes.js'


export const expressApp = async (app) => {
   app.use(verifyBlackList)
   app.use(express.json())
   app.use(express.urlencoded({ extended: true }))
   app.use(cookieParser());
   if (env.NODE_ENV == "dev") app.use(morgan('dev'))
   app.use('/api/v1/healthcheck',healthCheckRouter)
   app.use((req,res,next)=>{
      throw new ApiError(404,"Api not found")
   })
   app.use(errorHandler)
}

