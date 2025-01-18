import express from 'express'
import { createRatePost } from './../controllers/ratePost/createRatePost.js'
import { deleteRatePost } from './../controllers/ratePost/deleteRatePost.js'

const router = express.Router()

router.post('/', createRatePost)
router.delete('/:id', deleteRatePost)

export default router
