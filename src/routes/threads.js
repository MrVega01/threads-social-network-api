import express from 'express'
import getAllThreads from '../controllers/threads/getAllThreads.js'
import createThread from '../controllers/threads/createThread.js'
import updateThread from '../controllers/threads/updateThread.js'
import deleteThread from '../controllers/threads/deleteThread.js'
import { getThreadById } from '../controllers/threads/getThreadById.js'

const router = express.Router()

router.get('/', getAllThreads)
router.get('/:id', getThreadById)
router.post('/', createThread)
router.put('/:id', updateThread)
router.delete('/:id', deleteThread)

export default router
