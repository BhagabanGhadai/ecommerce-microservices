import express from 'express'
const router=express.Router()
import { healthCheck } from './healthCheck.controller.js'
router.route('/').get(healthCheck)
export default router