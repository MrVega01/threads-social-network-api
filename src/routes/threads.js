import express from 'express'
import getAllThreads from '../controllers/threads/getAllThreads.js'
import createThread from '../controllers/threads/createThread.js'

const router = express.Router()

router.get('/', getAllThreads)
router.post('/', createThread)
// router.delete('/', )

export default router
